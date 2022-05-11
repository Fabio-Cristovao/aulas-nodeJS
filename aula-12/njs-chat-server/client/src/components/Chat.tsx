import { useState } from "react";
import { useWebsocket } from "../hooks/useWebsocket";
import { Message } from "../models/message";
import { MessagesList } from "./MessagesList";
import { SendMessage } from "./SendMessage";

export function Chat() {
    const { sendMessage } = useWebsocket('ws://localhost:5001', onMessage, onOpen);

    const [status, setStatus] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [color, setColor] = useState('');

    function onOpen() {
        setStatus('Username: ')
        setIsEnabled(true);
    }

    function onMessage(message: MessageEvent) {
        try {
            const json = JSON.parse(message.data);

            switch (json.type) {
                case 'color': setColor(json.data); break;
                case 'history': setMessages(json.data); break;
                case 'message': setMessages(state => {
                    const messages = [...state, json.data];
                    return messages;
                }); break;
            }

            setIsEnabled(true);
        } catch (err) {
            console.log('Invalid JSON', message.data);
        }
    }

    function sendMessageCallback(message: string) {
        setIsEnabled(false);

        if (status.includes('Username: ')) {
            setStatus(message);
        }
    }

    return (
        <>
            <MessagesList messages={messages} />
            <SendMessage 
                status={status}
                isEnabled={isEnabled}
                onSendMessage={(message) => sendMessage(message, sendMessageCallback)}
                color={color}
            />
        </>
    )
}