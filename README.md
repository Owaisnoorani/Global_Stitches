# Global Stitches Co.

A web application for embroidery design services built with React and Vite.

## Development

```bash
# Install dependencies
npm install

# Run frontend development server
npm run dev

# Run backend server
npm run server

# Run both frontend and backend concurrently
npm run dev:all
```

## Vercel Deployment Instructions

### 1. Setup Environment Variables

In your Vercel dashboard, add the following environment variables:

- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail app password
- `PORT`: 5000 (though Vercel will handle the port assignment)

### 2. Deploy to Vercel

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments.

### 3. Important Notes

- The project has been restructured to work with Vercel's serverless functions
- API endpoints are now in the `/api` directory
- File uploads are handled through the `/api/submit-order` endpoint
- Make sure your Gmail account has "Less secure app access" enabled or use an app password

## Original Vite Information

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
