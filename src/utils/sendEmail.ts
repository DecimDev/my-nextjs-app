import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const sendEmail = async (name: string, email: string, message: string) => {
    const msg = {
        to: 'jacob.cadiente@gmail.com',
        from: 'jacob.cadiente@gmail.com',
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    await sgMail.send(msg);
};

export default sendEmail;
