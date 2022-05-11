import { Message } from "../models/message";

interface ChatMessageProps {
    message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => (
    <p>
        <span style={{ color: message.color }}>{message.author}</span>
        @ {message.time} <br />
        {message.text}
    </p>
);