import {AgentTeam, TokenRingPackage} from "@tokenring-ai/agent";
import {WebHostService} from "@tokenring-ai/web-host";
import DefaultFrontendResource from "./DefaultFrontendResource.js";
import packageJSON from "./package.json" with {type: "json"};

export default {
  name: packageJSON.name,
  version: packageJSON.version,
  description: packageJSON.description,
  install(agentTeam: AgentTeam) {
    agentTeam.waitForService(WebHostService, webHost =>
      webHost.registerResource("defaultFrontend", new DefaultFrontendResource())
    );
  },
} as TokenRingPackage;

export {default as DefaultFrontendResource} from "./DefaultFrontendResource.js";
