import { randomUUID } from "crypto";
import EventEmitter from "events";
import { request as WebsocketRequest, connection as WebsocketConnection } from "websocket";
import Console from "./utils/logger";

export default class Client extends EventEmitter {

    private id: string;
    private connection: WebsocketConnection;
    private username?: string;
    private color?: string;
    private request: WebsocketRequest;

    constructor(request: WebsocketRequest) {
        super();

        this.id = randomUUID();
        this.request = request;

        Console.info(`Connection from the origin`);

        this.connection = this.request.accept();
        this.acceptConnection();
    }

    private acceptConnection(): void {
        Console.info('Connection accepted');
    }
}