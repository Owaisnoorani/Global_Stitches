// This file is for local testing of the API endpoints
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load environment variables
const serverEnvPath = path.join(__dirname, '..', 'server', '.env');
const rootEnvPath = path.join(__dirname, '..', '.env');

if (fs.existsSync(serverEnvPath)) {
  dotenv.config({ path: serverEnvPath });
  console.log('Loaded .env from server directory');
} else if (fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
  console.log('Loaded .env from root directory');
} else {
  console.log('No .env file found');
}

// Import API handlers
const submitOrderHandler = require('./submit-order');
const healthHandler = require('./health');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.all('/api/submit-order', (req, res) => submitOrderHandler(req, res));
app.get('/api/health', (req, res) => healthHandler(req, res));

// Start server
app.listen(PORT, () => {
  console.log(`API test server running on port ${PORT}`);
});
