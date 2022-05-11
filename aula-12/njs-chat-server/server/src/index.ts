import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import Client from './client';
import { createWebsocketServer } from './server';
import Console from './utils/logger';

dotenv.config();

const clients: Client[] = [];

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        Console.info('Connected to database');

        const ws = createWebsocketServer();

        ws.on('request', request => {
            const client = new Client(request);
        });

    } catch (err) {

    }
})();