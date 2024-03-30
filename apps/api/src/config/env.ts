import type { FastifyEnvOptions } from '@fastify/env';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      NODE_ENV: 'development' | 'test' | 'production';
      API_PORT: number;
      API_SECRET_KEY: string;
    };
  }
}

const schema = {
  type: 'object',
  required: ['API_SECRET_KEY'],
  properties: {
    NODE_ENV: {
      enum: ['development', 'test', 'production'],
      default: 'development',
    },
    API_PORT: {
      type: 'number',
      default: 3000,
    },
    API_SECRET_KEY: {
      type: 'string',
    },
  },
};

export const envOptions = {
  dotenv: true,
  confKey: 'config',
  data: process.env,
  schema,
} satisfies FastifyEnvOptions;
