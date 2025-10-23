const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { sendEmail } = require('./utils');

// In serverless environments like Vercel, we need to use /tmp for file uploads
// as it's the only writable directory
const uploadsDir = process.env.VERCEL ? '/tmp' : path.join(process.cwd(), 'uploads');
if (!process.env.VERCEL && !fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
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

// For Vercel serverless function
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

// API handler for Vercel
module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Process file upload
    await runMiddleware(req, res, upload.single('designFile'));
    
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
        path: file.path,
        // Add content type to help with attachment handling
        contentType: file.mimetype
      }] : []
    };

    // Send email
    const emailResult = await sendEmail(mailOptions);
    
    if (emailResult.success) {
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

      await sendEmail(customerMailOptions);
      console.log('Emails sent successfully');
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
      message: 'Error submitting order. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
