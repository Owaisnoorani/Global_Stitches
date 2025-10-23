# Global Stitches - Email Setup Guide

## Email Configuration

To enable email functionality, you need to configure your email settings:

### 1. Create Environment File

Create a `.env` file in the `server` directory with the following content:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=5000
```

### 2. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS`

### 3. Alternative Email Services

You can also use other email services by modifying the transporter configuration in `server.js`:

```javascript
const transporter = nodemailer.createTransporter({
  service: 'outlook', // or 'yahoo', 'hotmail', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

### 4. Running the Application

#### Development Mode (Both Frontend & Backend):
```bash
npm run dev:all
```

#### Frontend Only:
```bash
npm run dev
```

#### Backend Only:
```bash
npm run server
```

### 5. Testing

1. Start the server: `npm run server`
2. Start the frontend: `npm run dev`
3. Fill out the order form
4. Check your email for the order details

### 6. File Uploads

Uploaded files are stored in the `uploads/` directory and attached to the email.

### 7. Troubleshooting

- **Email not sending**: Check your email credentials and app password
- **File upload issues**: Ensure the `uploads/` directory exists and has write permissions
- **CORS errors**: The server is configured to allow all origins in development

## Features

- ✅ Form validation
- ✅ File upload (images and design files)
- ✅ Email notifications to admin
- ✅ Confirmation email to customer
- ✅ Responsive design
- ✅ Error handling