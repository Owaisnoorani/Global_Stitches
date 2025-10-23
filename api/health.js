// Simple health check endpoint
module.exports = (req, res) => {
  res.json({ status: 'Server is running!' });
};
