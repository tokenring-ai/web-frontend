import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { WebResource } from "@tokenring-ai/web-host/types";
import type { FastifyInstance } from "fastify";
import fastifyStatic from "@fastify/static";

export default class DefaultFrontendResource implements WebResource {
  name = "DefaultFrontend";

  async register(server: FastifyInstance): Promise<void> {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const distPath = join(__dirname, "frontend", "dist");

    await server.register(fastifyStatic, {
      root: distPath,
      prefix: "/",
    });

    server.setNotFoundHandler((request, reply) => {
      reply.sendFile("index.html");
    });
  }
}
