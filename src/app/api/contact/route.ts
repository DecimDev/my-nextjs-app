import { NextResponse } from 'next/server';
import sendEmail from '@/utils/sendEmail'; // Adjust the import path as needed

export const config = {
    api: {
        bodyParser: true, // Adjust based on your form setup
    },
};

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

