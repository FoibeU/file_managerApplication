import express from 'express';
import startServer from './libs/boot';
import injectRoutes from './routes';
import injectMiddlewares from './libs/middlewares';
import { Queue } from 'bull/lib/queue.js';

const server = express();

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

export default server;
