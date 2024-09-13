"use client";

import { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatus('Failed to send message.');
        }
    };


    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border border-accent rounded bg-black"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-accent rounded bg-black"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        required
                        className="w-full p-2 border border-accent rounded bg-black"
                    />
                </div>
                <button type="submit" className="bg-accent text-white py-2 px-4 rounded">Send</button>
            </form>
            {status && <p className="mt-4">{status}</p>}
        </div>
    );
};

export default ContactForm;