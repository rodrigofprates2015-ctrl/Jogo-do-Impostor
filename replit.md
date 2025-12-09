# Overview

This is a multiplayer social deduction game called "Quem é o Impostor?" (Who is the Impostor?), inspired by games like Spyfall. Players join game rooms where one player is secretly assigned as the impostor who must blend in while others try to identify them.

The application features 5 distinct game modes:
- **Palavra Secreta** (Secret Word): Crew members receive the same word; impostor doesn't know it
- **Locais & Funções** (Locations & Roles): Players receive locations and roles; impostor doesn't know the location
- **Duas Facções** (Two Factions): Two teams with different words; impostor knows neither
- **Categoria + Item** (Category + Item): Crew knows category and item; impostor only knows category
- **Perguntas Diferentes** (Different Questions): Crew and impostor receive similar but different questions

The game supports 3-15 players with real-time WebSocket communication, session persistence, and Google AdSense integration for monetization. Users can also create custom themes via a paid feature using MercadoPago PIX payments.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

- **React 18 with TypeScript** using Vite as build tool
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TailwindCSS** with custom theme configuration and shadcn/ui components (Radix UI primitives)
- **Zustand** for client-side game state management (`gameStore.ts`)
- **TanStack Query** for server state and API calls

Key design patterns:
- Single Page Application with all game states managed client-side
- WebSocket connection managed through Zustand store for real-time game synchronization
- Mobile-first responsive design with custom color palette (dark blues, oranges, greens)

## Backend Architecture

- **Node.js with Express** and TypeScript
- **WebSocket (ws library)** for real-time multiplayer communication
- **Drizzle ORM** for database interactions with PostgreSQL
- **Passport.js** for GitHub OAuth2 authentication
- **MercadoPago SDK** for PIX payment processing (custom theme purchases)

The server handles:
- Room creation/management with unique codes
- Real-time game state synchronization via WebSocket
- User sessions with PostgreSQL-backed session store
- Payment webhook processing for theme purchases

## Database Design

PostgreSQL database with tables for:
- `sessions` - User session storage
- `users` - User accounts (GitHub OAuth)
- `rooms` - Game rooms with player lists and game state (JSONB)
- `themes` - Custom word themes created by users

The application uses a dual-driver approach for database connections:
- **@neondatabase/serverless** for Replit/Neon environments
- **pg (node-postgres)** for standard PostgreSQL (Railway deployment)

## Build and Deployment

- Custom build script (`script/build.ts`) using esbuild for server bundling and Vite for client
- Server bundles to `dist/index.cjs` for production
- Client builds to `dist/public/`
- Supports both Replit and Railway deployment environments

# External Dependencies

## Database
- **PostgreSQL** via Neon (Replit) or standard PostgreSQL (Railway)
- Connection string via `DATABASE_URL` environment variable
- Drizzle ORM for schema management and queries

## Authentication
- **GitHub OAuth2** via Passport.js
- Session storage in PostgreSQL using `connect-pg-simple`

## Payments
- **MercadoPago** for PIX payments (Brazilian payment method)
- Access token via `MERCADO_PAGO_ACCESS_TOKEN` environment variable
- Webhook endpoint for payment confirmation

## Analytics & Monetization
- **Google Analytics** (G-7BRQ5X7FHL)
- **Google AdSense** (ca-pub-9927561573478881)

## Required Environment Variables
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption key
- `MERCADO_PAGO_ACCESS_TOKEN` - MercadoPago API token
- GitHub OAuth credentials (for authentication)