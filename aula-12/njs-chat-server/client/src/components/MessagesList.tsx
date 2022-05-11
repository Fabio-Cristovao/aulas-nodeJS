import { Message } from "../models/message";
import { ChatMessage } from "./ChatMessage";

interface MessagesListProps {
    messages: Message[];
}

export function MessagesList({ messages }: MessagesListProps) {
    return (
        <div className="content">
            {messages?.map(m => <ChatMessage key={m._id} message={m} />)}
        </div>
    )
}