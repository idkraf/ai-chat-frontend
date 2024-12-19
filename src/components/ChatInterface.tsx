import React, { useState } from 'react';
import { sendMessage } from '../services/api.ts';

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');
        setLoading(true);

        const response = await sendMessage(userMessage);
        setMessages((prev) => [...prev, { user: userMessage, bot: response.reply }]);
        setLoading(false);
    };

    return (
        <div>
            <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <p><strong>You:</strong> {msg.user}</p>
                        <p><strong>Bot:</strong> {msg.bot}</p>
                    </div>
                ))}
                {loading && <p>Bot is typing...</p>}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={handleSend} disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
            </button>
        </div>
        
    );
};

export default ChatInterface;
