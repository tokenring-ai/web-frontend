import { AgentTeam, TokenRingPackage } from "@tokenring-ai/agent";
import { WebHostService } from "@tokenring-ai/web-host";
import packageJSON from "./package.json" with { type: "json" };
import DefaultFrontendResource from "./DefaultFrontendResource.js";

export const packageInfo: TokenRingPackage = {
  name: packageJSON.name,
  version: packageJSON.version,
  description: packageJSON.description,
  install(agentTeam: AgentTeam) {
    const webHost = agentTeam.services.getItemByType(WebHostService);
    if (webHost) {
      webHost.registerResource("defaultFrontend", new DefaultFrontendResource());
    }
  },
};

export { default as DefaultFrontendResource } from "./DefaultFrontendResource.js";
