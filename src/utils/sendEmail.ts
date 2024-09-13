import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmail = async (to: string, subject: string, text: string) => {
    const msg = {
        to,
        from: 'jacob.cadiente@gmail.com', // Use your verified sender
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export default sendEmail;
