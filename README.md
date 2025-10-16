# @tokenring-ai/web-frontend

Default React-based web frontend for TokenRing agents with CLI-style interface.

## Features

- **CLI-Style Interface**: Dark theme with colored output
- **Agent Management**: Select or create agents
- **Real-time Chat**: WebSocket-based communication
- **Event Display**: All agent events shown in real-time
- **Human Interaction**: Prompts for user input when needed

## Usage

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

// Access at http://localhost:3000
```

## Building the Frontend

```bash
cd frontend
npm install
npm run build
```

The built files in `frontend/dist/` are automatically served by the web-host.

## Development

```bash
cd frontend
npm run dev  # Development server with hot reload
```

## License

MIT License - Copyright (c) 2025 Mark Dierolf
