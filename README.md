# @tokenring-ai/web-frontend

A complete React-based web frontend package for TokenRing agents, featuring a CLI-style interface with real-time communication and agent management capabilities.

## Overview

This package provides a ready-to-use web interface for interacting with TokenRing agents. It includes:

- **React Application**: Modern frontend built with React 18 and TypeScript
- **CLI-Style Interface**: Dark theme with syntax-colored output for enhanced readability
- **Real-time Communication**: WebSocket-based communication with agents
- **Agent Management**: Select from running agents or create new ones
- **Event Display**: Real-time display of all agent events (chat, reasoning, system, input)
- **Human Interaction**: Built-in prompts for user input when required by agents

## Package Structure

```
pkg/web-frontend/
├── index.ts                 # Main plugin entry point
├── DefaultFrontendResource.ts # Web resource handler
├── package.json            # Package configuration and dependencies
├── frontend/               # React application source
│   ├── package.json        # Frontend dependencies and scripts
│   ├── src/
│   │   ├── main.tsx        # React application entry point
│   │   ├── App.tsx         # Main application component
│   │   ├── client.ts       # Agent client re-export
│   │   └── App.css         # Application styles
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── vite.config.ts      # Vite build configuration
│   └── tsconfig.json       # TypeScript configuration
└── README.md              # This file
```

## Installation

```bash
npm install @tokenring-ai/web-frontend
```

## Usage

### Basic Integration

```typescript
import { AgentTeam } from "@tokenring-ai/agent";
import { packageInfo as webHostPackage } from "@tokenring-ai/web-host";
import { packageInfo as webApiPackage } from "@tokenring-ai/web-api";
import { packageInfo as webFrontendPackage } from "@tokenring-ai/web-frontend";

const team = new AgentTeam({
  webHost: { enabled: true, port: 3000 }
});

await team.addPackages([
  webHostPackage,
  webApiPackage,
  webFrontendPackage
]);

// Access the web interface at http://localhost:3000
```

### Manual Integration

```typescript
import TokenRingApp from "@tokenring-ai/app";
import { TokenRingPlugin } from "@tokenring-ai/app";
import { WebHostService } from "@tokenring-ai/web-host";
import DefaultFrontendResource from "@tokenring-ai/web-frontend";

const app = new TokenRingApp();
app.addPackage(DefaultFrontendResource);
await app.start();
```

## API Reference

### Main Exports

- **Default Plugin**: Main TokenRing plugin that registers the frontend resource
- **DefaultFrontendResource**: Web resource class that serves the static frontend files

### DefaultFrontendResource

```typescript
class DefaultFrontendResource implements WebResource {
  name: string = "DefaultFrontend";
  
  async register(server: FastifyInstance): Promise<void>;
  // Registers the static file server and handles SPA routing
}
```

### Frontend Client

The frontend re-exports `AgentClient` from `@tokenring-ai/agent-api/client` for WebSocket communication with agents.

## Frontend Features

### Agent Management
- **Agent Selection**: View and connect to running agents
- **Agent Creation**: Create new interactive code agents
- **Agent Information**: Display agent name and ID

### Real-time Communication
- **Chat Messages**: Display agent responses in green
- **Reasoning Output**: Show agent reasoning process in yellow
- **System Messages**: Display system information in blue (warnings in yellow, errors in red)
- **User Input**: Show user messages in cyan
- **Busy States**: Display loading indicators when agents are processing

### User Interface
- **Dark Theme**: Terminal-inspired dark interface for comfortable extended use
- **Auto-scroll**: Messages automatically scroll to show latest content
- **Input Focus**: Input field automatically regains focus when agents become idle
- **Responsive Design**: Adapts to different screen sizes

## Development

### Frontend Development

```bash
cd frontend
npm install
npm run dev  # Development server with hot reload
```

### Building the Frontend

```bash
cd frontend
npm install
npm run build
```

The built files in `frontend/dist/` are automatically served by the web-host service.

### Available Frontend Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production version
- `npm run preview` - Preview production build

## Dependencies

### Runtime Dependencies
- `@tokenring-ai/agent` - Agent framework
- `@tokenring-ai/web-host` - Web hosting service
- `fastify` - Fast web framework
- `@fastify/static` - Static file serving middleware

### Development Dependencies (Frontend)
- `react` - React library
- `react-dom` - React DOM renderer
- `@types/react` - TypeScript definitions for React
- `@types/react-dom` - TypeScript definitions for React DOM
- `typescript` - TypeScript compiler
- `vite` - Build tool and development server
- `@vitejs/plugin-react` - React plugin for Vite

## Configuration

The package uses Vite for the frontend build process with the following configuration:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
```

## License

MIT License - Copyright (c) 2025 Mark Dierolf

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Build the frontend: `cd frontend && npm run build`
5. Test your changes
6. Submit a pull request

## Support

For issues and questions, please refer to the main TokenRing repository or create an issue in the appropriate package.