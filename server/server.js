const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Try to load .env from the server directory first, then from the root directory
const serverEnvPath = path.join(__dirname, '.env');
const rootEnvPath = path.join(__dirname, '..', '.env');

let envPath = null;
if (fs.existsSync(serverEnvPath)) {
  envPath = serverEnvPath;
  console.log('Using .env from server directory');
} else if (fs.existsSync(rootEnvPath)) {
  envPath = rootEnvPath;
  console.log('Using .env from root directory');
} else {
  console.log('No .env file found');
}

if (envPath) {
  require('dotenv').config({ path: envPath });
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|eps|pes|dst|ai|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image and design files are allowed!'));
    }
  }
});

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Configure Nodemailer (only if credentials are provided)
let transporter = null;

// Debug environment variables
console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');

if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_USER !== 'your-email@gmail.com') {
  transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS  // Your email password or app password
    }
  });
  console.log('Email transporter configured successfully');
} else {
  console.log('Email not configured - running without email functionality');
  if (!process.env.EMAIL_USER) console.log('Reason: EMAIL_USER is not set');
  if (!process.env.EMAIL_PASS) console.log('Reason: EMAIL_PASS is not set');
  if (process.env.EMAIL_USER === 'your-email@gmail.com') console.log('Reason: EMAIL_USER has default value');
}

// API endpoint for form submission
app.post('/api/submit-order', upload.single('designFile'), async (req, res) => {
  try {
    const {
      fileFormat,
      size,
      turnaroundTime,
      complexity,
      additionalInfo,
      name,
      email,
      phone
    } = req.body;

    const file = req.file;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your email
      subject: `New Order from ${name} - Global Stitches`,
      html: `
        <h2>New Order Submission</h2>
        <h3>Contact Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Project Details:</h3>
        <p><strong>File Format:</strong> ${fileFormat}</p>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Turnaround Time:</strong> ${turnaroundTime}</p>
        <p><strong>Complexity:</strong> ${complexity}</p>
        
        <h3>Additional Information:</h3>
        <p>${additionalInfo || 'No additional information provided'}</p>
        
        <h3>File Upload:</h3>
        <p>${file ? `File uploaded: ${file.originalname}` : 'No file uploaded'}</p>
        
        <hr>
        <p><em>This order was submitted from the Global Stitches website.</em></p>
      `,
      attachments: file ? [{
        filename: file.originalname,
        path: file.path
      }] : []
    };

    // Send email (only if transporter is configured)
    if (transporter) {
      try {
        await transporter.sendMail(mailOptions);

        // Send confirmation email to customer
        const customerMailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Order Confirmation - Global Stitches',
          html: `
            <h2>Thank you for your order!</h2>
            <p>Dear ${name},</p>
            <p>We have received your order and will contact you soon with more details.</p>
            
            <h3>Order Summary:</h3>
            <p><strong>File Format:</strong> ${fileFormat}</p>
            <p><strong>Size:</strong> ${size}</p>
            <p><strong>Turnaround Time:</strong> ${turnaroundTime}</p>
            <p><strong>Complexity:</strong> ${complexity}</p>
            
            <p>We'll review your requirements and get back to you within 24 hours.</p>
            
            <p>Best regards,<br>Global Stitches Team</p>
          `
        };

        await transporter.sendMail(customerMailOptions);
        console.log('Emails sent successfully');
      } catch (emailError) {
        console.log('Email sending failed:', emailError.message);
        // Continue without failing the request
      }
    } else {
      console.log('Email not configured - order saved without sending emails');
    }

    res.status(200).json({ 
      success: true, 
      message: 'Order submitted successfully!' 
    });

  } catch (error) {
    console.error('Error submitting order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting order. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});