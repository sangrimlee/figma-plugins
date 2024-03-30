import Fastify from 'fastify';

export const createServer = () => {
  const fastify = Fastify({
    logger: true,
  });

  fastify.get('/', () => {
    return 'Figma Plugins';
  });

  return fastify;
};
