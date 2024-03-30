import { startServer } from './server';
import { logger } from './config/logger';

startServer().catch((err: unknown) => {
  logger.error(err);
  process.exit(1);
});
