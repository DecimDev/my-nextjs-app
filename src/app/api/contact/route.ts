import { NextResponse } from 'next/server';
import sendEmail from '@/utils/sendEmail'; // Adjust the import path as needed

export async function GET(request: Request) {
    // Your existing GET handler code
    return NextResponse.json({ message: 'Hello, world!' });
}

// If you had a config like this:
// export const config = { runtime: 'edge' };

// Replace it with the new convention:
export const runtime = 'edge';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    try {
        const emailBody = `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `;
        await sendEmail('jacob.cadiente@gmail.com', `Contact Form Submission from ${name}`, emailBody);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}

