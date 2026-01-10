import type { Request, Response, NextFunction } from 'express';
import { db } from './db';
import { analyticsEvents, type InsertAnalyticsEvent } from '@shared/schema';
import { randomUUID } from 'crypto';

const COOKIE_NAME = 'visitor_id';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60 * 1000; // 365 days

// Paths to ignore (static assets, API health checks)
const IGNORE_PATHS = [
  /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|webp|map|json)$/i,
  /^\/api\//,  // Ignore ALL API routes
  /^\/assets\//,
  /^\/node_modules\//,
  /^\/@/,  // Vite dev server paths
];

// Track which visitors we've already registered as unique
const registeredVisitors = new Set<string>();

export function analyticsMiddleware(req: Request, res: Response, next: NextFunction) {
  // Skip tracking for ignored paths
  if (IGNORE_PATHS.some(pattern => pattern.test(req.path))) {
    return next();
  }

  // Only track GET requests for HTML pages
  if (req.method !== 'GET') {
    return next();
  }

  // Extract or create visitor ID
  let visitorId = req.cookies?.[COOKIE_NAME];
  let isNewVisitor = false;

  if (!visitorId) {
    visitorId = randomUUID();
    isNewVisitor = true;
    
    res.cookie(COOKIE_NAME, visitorId, {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: false, // Allow client-side reading
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
  }

  // Check if this is the first time we're seeing this visitor in this session
  const shouldTrackAsUnique = isNewVisitor && !registeredVisitors.has(visitorId);
  
  if (shouldTrackAsUnique) {
    registeredVisitors.add(visitorId);
  }

  // Extract metadata
  const ipAddress = extractRealIP(req);
  const userAgent = req.headers['user-agent'] || null;
  const pagePath = req.path;
  const referrer = req.headers['referer'] || null;

  // Track unique visitor event (only once per visitor)
  if (shouldTrackAsUnique) {
    trackEvent({
      visitorId,
      eventType: 'unique_visitor',
      ipAddress,
      userAgent,
      pagePath,
      referrer,
    }).catch(err => {
      console.error('[Analytics] Failed to track unique visitor:', err);
    });
  }

  // Always track pageview
  trackEvent({
    visitorId,
    eventType: 'pageview',
    ipAddress,
    userAgent,
    pagePath,
    referrer,
  }).catch(err => {
    console.error('[Analytics] Failed to track pageview:', err);
  });

  next();
}

function extractRealIP(req: Request): string | null {
  return (
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    (req.headers['x-real-ip'] as string) ||
    req.socket.remoteAddress ||
    null
  );
}

async function trackEvent(data: Omit<InsertAnalyticsEvent, 'id' | 'createdAt'>) {
  if (!db) {
    console.warn('[Analytics] Database not available, skipping tracking');
    return;
  }

  try {
    await db.insert(analyticsEvents).values(data);
  } catch (error) {
    console.error('[Analytics] Error inserting event:', error);
  }
}
