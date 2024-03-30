import { pino } from 'pino';

const getLoggerLevel = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'error';
    case 'test':
      return 'debug';
    default:
      return 'info';
  }
};

export const logger = pino({
  level: getLoggerLevel(),
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'yyyy-mm-dd HH:MM:ss Z',
      ignore: 'pid,hostname',
      colorlize: true,
    },
  },
});
