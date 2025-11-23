import TokenRingApp from "@tokenring-ai/app";
import {TokenRingPlugin} from "@tokenring-ai/app";
import {WebHostService} from "@tokenring-ai/web-host";
import DefaultFrontendResource from "./DefaultFrontendResource.js";
import packageJSON from "./package.json" with {type: "json"};

export default {
  name: packageJSON.name,
  version: packageJSON.version,
  description: packageJSON.description,
  install(app: TokenRingApp) {
    app.waitForService(WebHostService, webHost =>
      webHost.registerResource("defaultFrontend", new DefaultFrontendResource())
    );
  },
} as TokenRingPlugin;

export {default as DefaultFrontendResource} from "./DefaultFrontendResource.js";
