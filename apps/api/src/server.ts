import Fastify from 'fastify';
import { fastifyEnv } from '@fastify/env';
import { envOptions } from './config/env';

export const startServer = async () => {
  const server = Fastify({
    logger: true,
  });

  await server.register(fastifyEnv, envOptions);

  server.get('/', () => 'Figma Plugins');

  await server.listen({
    port: server.config.API_PORT,
  });
};
