import { startServer } from './server';
import { logger } from './config/logger';

startServer().catch((err) => {
  logger.error(err);
  process.exit(1);
});
