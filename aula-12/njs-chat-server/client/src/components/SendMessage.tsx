import { useState } from "react";

interface SendMessageProps {
    status: string;
    isEnabled: boolean;
    color: string;
    onSendMessage: (message: string) => void;
}

export function SendMessage({ status, isEnabled, onSendMessage, color }: SendMessageProps) {
    const [message, setMessage] = useState('');

    function handleKeyPressed(event: any): void {
        if (event.keyCode !== 13) {
            return;
        }

        onSendMessage(message.trim());
        setMessage('');
    }

    return (
        <div className="options">
            <span className="status" style={{ color }}>
                {status}
            </span>

            <input 
                type="text" 
                className="message"
                disabled={!isEnabled}
                title="message input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={handleKeyPressed} 
            />
        </div>
    )
}