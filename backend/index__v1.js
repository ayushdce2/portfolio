const express = require('express');
const cors = require("cors");
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.GMAIL_APP_PASS
  }
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✔ Email transporter ready");
  }
});

app.get('/', (req, res) => {
  res.send('SERVER RUNNING NOW');
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  try {
    console.log("<---Incoming Contact Form Data--->", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, 
      replyTo: email, 
      to: 'ayushdce2@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    res.json({
      message: 'Thank you for contacting me! I will get back to you shortly.',
      response: info.response
    });

  } catch (error) {
    console.error("❌ Error in /contact:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
