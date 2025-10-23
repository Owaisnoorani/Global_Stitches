const nodemailer = require('nodemailer');
const path = require('path');

// Configure Nodemailer (only if credentials are provided)
let transporter = null;

const initEmailTransporter = () => {
  if (!transporter && process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_USER !== 'your-email@gmail.com') {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    console.log('Email transporter configured successfully');
    return true;
  } else if (!transporter) {
    console.log('Email not configured - running without email functionality');
    if (!process.env.EMAIL_USER) console.log('Reason: EMAIL_USER is not set');
    if (!process.env.EMAIL_PASS) console.log('Reason: EMAIL_PASS is not set');
    if (process.env.EMAIL_USER === 'your-email@gmail.com') console.log('Reason: EMAIL_USER has default value');
    return false;
  }
  return true;
};

const sendEmail = async (mailOptions) => {
  if (!transporter) {
    const configured = initEmailTransporter();
    if (!configured) {
      return { success: false, message: 'Email not configured' };
    }
  }

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.log('Email sending failed:', error.message);
    return { success: false, error };
  }
};

module.exports = {
  initEmailTransporter,
  sendEmail
};
