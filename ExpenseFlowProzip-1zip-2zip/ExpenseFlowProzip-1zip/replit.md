# Overview

This is a multiplayer social deduction game branded as **TikJogos**. Players join game rooms and try to identify who among them is the impostor through various game modes involving secret words, locations, roles, and questions. The application is built as a full-stack web application with real-time multiplayer capabilities.

## Recent Changes (November 2025)
- Rebranded to TikJogos with new logo
- Added donation button with PIX payment modal
- PIX Key: `48492456-23f1-4edc-b739-4e36547ef90e`

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Libraries**
- React with TypeScript for the UI layer
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query for server state management and API calls
- Zustand for local state management (game state store)

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library built on Radix UI
- Tailwind CSS for styling with custom theme configuration
- Poppins font family for typography
- Custom neon/cyberpunk aesthetic with animations

**State Management Strategy**
- Local game state managed through Zustand store (`gameStore.ts`)
- Server state synchronized via TanStack Query
- WebSocket connections for real-time game updates
- Store includes player info, room data, game modes, and game status

## Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- Node.js with TypeScript
- HTTP server wrapped for WebSocket support
- Custom logging middleware for request/response tracking

**Real-time Communication**
- WebSocket server (ws library) for live multiplayer functionality
- Room-based architecture where players connect to specific game rooms
- Server broadcasts game state changes to all connected clients
- Message-based protocol for game actions (join, start, vote, etc.)

**Data Storage Strategy**
- In-memory storage implementation (`MemoryStorage` class)
- Interface-based design allows for future database integration
- Room state includes players, game mode, impostor assignment, and game data
- Designed for PostgreSQL via Drizzle ORM (schema defined but storage layer currently in-memory)

**API Design**
- RESTful endpoints for room creation and initial setup
- WebSocket messages for real-time game interactions
- Custom route registration system in `routes.ts`
- Static file serving for production builds

## Database Schema

**Room Model** (defined in schema.ts)
- Primary key: room code (text)
- Host tracking via hostId
- Game status (waiting/playing)
- Current game mode and category
- Impostor assignment
- Players array (JSONB)
- Game-specific data (JSONB) for different modes
- Timestamps for room creation

**Design Rationale**
- PostgreSQL with Drizzle ORM chosen for type-safe database queries
- JSONB columns for flexible game data structures across different modes
- Schema supports multiple game modes without separate tables
- Currently uses in-memory storage but ready for database migration

## Game Modes Architecture

**Five Distinct Game Types**
1. **Palavra Secreta**: Everyone gets same word except impostor
2. **Locais & Funções**: Players receive location and role assignments
3. **Duas Facções**: Two teams with different words, impostor knows neither
4. **Categoria + Item**: Category revealed to all, specific item hidden from impostor
5. **Perguntas Diferentes**: Different questions for crew and impostor

**Mode Data Structure**
- Each mode has predefined word/category lists
- Server randomly selects and assigns based on mode rules
- Game data stored flexibly in JSONB to accommodate varying structures
- Client receives role-specific information based on player assignment

## Build and Deployment

**Build Process**
- Custom build script using esbuild for server bundling
- Vite for client-side bundling and optimization
- Selective dependency bundling to reduce cold start times
- Server externals list minimizes bundle size
- Production build outputs to `dist/` directory

**Development vs Production**
- Development: Vite dev server with HMR
- Development: Replit-specific plugins (cartographer, dev banner)
- Production: Static file serving from compiled dist
- Environment-based configuration via NODE_ENV

**Asset Management**
- Custom Vite plugin for OpenGraph image meta tags
- Automatic domain detection for Replit deployments
- Support for PNG, JPG, JPEG opengraph images
- Public assets served from client/public directory

# External Dependencies

## Database & ORM
- **Neon Database** (@neondatabase/serverless): PostgreSQL serverless database
- **Drizzle ORM**: Type-safe database toolkit with schema in `shared/schema.ts`
- WebSocket constructor override for Neon compatibility

## Real-time Communication
- **ws**: WebSocket server implementation for multiplayer functionality

## UI Libraries
- **Radix UI**: Comprehensive set of accessible component primitives
- **shadcn/ui**: Pre-built components using Radix UI
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

## Monetization
- **Google AdSense**: Advertising platform (configured but requires publisher ID)
- PIX donation system (Brazilian payment method) integrated in UI

## Development Tools
- **Replit Vite Plugins**: Runtime error overlay, cartographer, dev banner
- **TypeScript**: Full type safety across client, server, and shared code
- **ESBuild**: Fast JavaScript bundler for server code

## Session Management
- In-memory session storage currently implemented
- Dependencies included for PostgreSQL session storage (connect-pg-simple)
- Session middleware prepared but not actively used in current implementation

## Validation
- **Zod**: Schema validation for API requests and database operations
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation