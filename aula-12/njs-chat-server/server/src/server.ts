import { createServer } from 'http';
import { server as WebSocketServer } from 'websocket';
import Console from './utils/logger';

export const createWebsocketServer = (): WebSocketServer => {
    const port = process.env.PORT || 5000;
    const httpServer = createServer(() => {});

    httpServer.listen(port, () => Console.info(`HTTP Server listening on port ${port}`));

    return new WebSocketServer({
        httpServer
    });
};