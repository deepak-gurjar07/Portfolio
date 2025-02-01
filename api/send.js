import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: process.env.EMAIL,
      subject: `Message from ${name} by website contact form.`,
      text: `${message}\n\nSender's Email: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Message sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending message');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}