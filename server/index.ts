import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import fs from "fs";
import path from "path";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  // Import and run seed
  import("./seed").catch(err => console.error("Seed failed:", err));

  app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    // Log the error with full stack trace
    console.error(`[Error Handler] ${status} ${req.method} ${req.path}`);
    console.error(`[Error Handler] Message:`, message);
    console.error(`[Error Handler] Stack:`, err.stack);

    // Check if response has already been sent
    if (res.headersSent) {
      console.error('[Error Handler] Headers already sent, cannot send error response');
      return;
    }

    // Don't send JSON for non-API routes to avoid download issues on mobile
    if (req.path.startsWith('/api')) {
      res.status(status).json({ message });
    } else {
      // For non-API routes, redirect to home or show error page
      res.status(status).send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Erro - TikJogos</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-align: center;
                padding: 20px;
              }
              .error-container {
                max-width: 500px;
              }
              h1 { font-size: 3em; margin: 0; }
              p { font-size: 1.2em; margin: 20px 0; }
              a {
                display: inline-block;
                padding: 12px 24px;
                background: white;
                color: #667eea;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="error-container">
              <h1>Oops!</h1>
              <p>Algo deu errado. Por favor, tente novamente.</p>
              <a href="/">Voltar para o início</a>
            </div>
          </body>
        </html>
      `);
    }
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  
  // Handle server errors
  httpServer.on('error', (error: any) => {
    console.error('Server error:', error);
  });

  // Handle client connection errors
  httpServer.on('clientError', (err: any, socket: any) => {
    console.error('Client error:', err.message);
    if (err.code === 'ECONNRESET' || !socket.writable) {
      return;
    }
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });

  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );

  // Handle uncaught exceptions
  process.on('uncaughtException', (error) => {
    console.error('[Uncaught Exception]:', error);
    console.error('[Uncaught Exception] Stack:', error.stack);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason, promise) => {
    console.error('[Unhandled Rejection] at:', promise);
    console.error('[Unhandled Rejection] reason:', reason);
  });
})();
