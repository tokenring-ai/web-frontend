import fastifyStatic from "@fastify/static";
import type {WebResource} from "@tokenring-ai/web-host/types";
import type {FastifyInstance} from "fastify";
import {join} from 'path';

export default class DefaultFrontendResource implements WebResource {
  name = "DefaultFrontend";

  async register(server: FastifyInstance): Promise<void> {
    const distPath = join(import.meta.dirname, "frontend", "dist");

    await server.register(fastifyStatic, {
      root: distPath,
      prefix: "/",
    });

    server.setNotFoundHandler((request, reply) => {
      reply.sendFile("index.html");
    });
  }
}
