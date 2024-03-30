import { createServer } from './server';

const server = createServer();

server.listen().catch((err) => {
  server.log.error(err);
  process.exit(1);
});
