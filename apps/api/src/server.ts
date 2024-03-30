import Fastify from 'fastify';
import { fastifyEnv } from '@fastify/env';
import { envOptions } from './config/env';
import { logger } from './config/logger';

export const startServer = async () => {
  const fastify = Fastify({
    logger,
  });

  await fastify.register(fastifyEnv, envOptions);

  fastify.get('/', () => 'Figma Plugins');

  await fastify.listen({
    host: '0.0.0.0',
    port: fastify.config.API_PORT,
  });
};
