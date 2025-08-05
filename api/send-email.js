// api/send-email.js
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

// Vercel will run
export default function handler(req, res) {
  // Use CORS middleware to allow requests from your frontend
  cors(req, res, async () => {
    // We only want to handle POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    try {
      const { firstName, lastName, email, number, message } = req.body;

      // Create a transporter object using the SMTP transport
      // We use environment variables for security
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Or your email provider
        auth: {
          user: process.env.EMAIL_USER, // Your "email1" from Vercel env
          pass: process.env.EMAIL_PASS, // Your "email1" app password from Vercel env
        },
      });

      // Set up email data
      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address (email1)
        to: 'amanaditya565@gmail.com', // List of receiver (or many receivers)
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Message from your Website Contact Form</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${number}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      
      // Send a success response
      return res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Something went wrong.' });
    }
  });
}
