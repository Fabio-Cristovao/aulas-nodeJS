import { useEffect, useState } from "react";

export function useWebsocket(
    url: string, 
    onMessage?: (message: MessageEvent) => void,
    onOpen?: () => void,
    onError?: (error: unknown) => void
) {
    const [connection, setConnection] = useState<WebSocket>();

    function sendMessage(message: string, callback?: (message: string) => void) {
        connection?.send(message);

        if (callback) {
            callback(message);
        }
    }

    useEffect(() => {
        const c = new WebSocket(url);

        if (onOpen) c.addEventListener('open', onOpen);
        if (onError) c.addEventListener('error', onError);
        if (onMessage) c.addEventListener('message', onMessage);

        setConnection(c);

        return () => {
            if (onOpen) c.removeEventListener('open', onOpen);
            if (onError) c.removeEventListener('error', onError);
            if (onMessage) c.removeEventListener('message', onMessage);
        }
    }, []);

    return {
        connection,
        sendMessage
    };
}