# Overview

ExpenseFlowPro is a multiplayer social deduction game application built with a full-stack TypeScript architecture. The application features real-time multiplayer gameplay through WebSocket connections, where players join game rooms and participate in various game modes designed to identify an "impostor" among them. The project uses a modern React frontend with a Node.js/Express backend, PostgreSQL database via Neon, and includes Google AdSense integration for monetization.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build Tools**
- React 18 with TypeScript for type-safe UI development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing
- Custom Vite plugins for meta image updates and Replit-specific integrations

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS v4 for utility-first styling with CSS variables for theming
- Poppins font family for consistent typography
- Custom neon/cyberpunk aesthetic with animations (glow-pulse, neon-flicker effects)
- Component configuration stored in `components.json` with New York style variant

**State Management**
- Zustand for local game state management (`gameStore.ts`)
- TanStack Query (React Query) for server state synchronization and API caching
- WebSocket connections for real-time multiplayer state updates
- Game state includes: player info, room data, game modes, impostor status, and game-specific data

**Key State Models**
- Player: uid, name
- Room: code, hostId, status, gameMode, players array, impostor tracking
- GameData: varies by mode (words, locations, roles, factions, questions)
- Five game modes: palavraSecreta, palavras, duasFaccoes, categoriaItem, perguntasDiferentes

## Backend Architecture

**Server Framework**
- Express.js HTTP server with TypeScript
- HTTP server wrapped with Node's `http.createServer` for WebSocket support
- Custom logging middleware for request/response tracking with timestamps
- JSON body parsing with raw body preservation for webhook integrations

**Real-time Communication**
- WebSocket server using the `ws` library for live multiplayer functionality
- Room-based architecture where players connect to specific game sessions
- Server broadcasts game state changes to all connected clients in a room
- Message-based protocol for game actions: join, start, vote, role reveal

**Game Logic**
- Multiple game mode configurations stored server-side
- Random impostor selection and role assignment
- Game data generation based on selected mode (words, locations, factions, questions)
- Room lifecycle management (creation, updates, player management, cleanup)

## Data Storage

**Database**
- PostgreSQL database hosted on Neon (serverless Postgres)
- Drizzle ORM for type-safe database queries and schema management
- Connection pooling via `@neondatabase/serverless` with WebSocket support
- Schema defined in `shared/schema.ts` for code sharing between client and server

**Database Schema**
- `rooms` table: stores game room state including code, host, status, game mode, players (JSONB), impostor tracking, and game-specific data (JSONB)
- JSONB columns for flexible storage of player arrays and game mode-specific data
- Timestamps for room creation tracking

**Storage Strategy**
- In-memory storage implementation (`MemoryStorage` class) for development/testing
- Database storage interface (`IStorage`) for production with methods: createRoom, getRoom, updateRoom, addPlayerToRoom, deleteRoom
- Rooms are ephemeral and cleaned up when games end or expire

## External Dependencies

**Database & Infrastructure**
- Neon serverless PostgreSQL for database hosting
- WebSocket constructor override for Neon compatibility (`ws` library)
- Drizzle Kit for database migrations and schema management

**Payment Integration**
- PIX payment system for donations (Brazilian instant payment)
- PIX key: `48492456-23f1-4edc-b739-4e36547ef90e`
- Donation modal component for user contributions

**Advertising**
- Google AdSense integration (account: ca-pub-4854252788330308)
- Ad scripts loaded in HTML head for monetization
- Privacy policy and terms of use pages for compliance

**Development Tools**
- Replit-specific plugins: cartographer, dev-banner, runtime-error-modal
- ESBuild for server-side bundling in production
- Dependency bundling strategy with allowlist for optimized cold starts

**Build & Deployment**
- Separate build processes for client (Vite) and server (ESBuild)
- Static file serving from `dist/public` directory
- Environment-based configuration (NODE_ENV, DATABASE_URL)
- Production build creates CommonJS bundle for server deployment