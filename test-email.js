// Test email sending
require('dotenv').config();
const nodemailer = require('nodemailer');

// Check if EMAIL_PASSWORD is set
if (!process.env.EMAIL_PASSWORD) {
  console.error('ERROR: EMAIL_PASSWORD is not set in .env file');
  console.log('Please add your email app password to the .env file');
  process.exit(1);
}

async function testEmail() {
  try {
    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'abhinavingle8080@gmail.com',
      subject: 'Portfolio Contact Form Test',
      html: `
        <h3>This is a test email</h3>
        <p>If you're seeing this, your email service is working correctly!</p>
      `
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    process.exit(0);
  } catch (error) {
    console.error('Error sending email:', error);
    process.exit(1);
  }
}

// Run the test
testEmail(); 