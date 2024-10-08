const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Register Route
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  // Here you would send OTP logic
  console.log(`Registering user: ${email}`);
  res.status(200).json({ message: 'OTP sent' });
});

// Verify OTP Route
app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  // Verify OTP logic goes here
  console.log(`Verifying OTP for user: ${email}`);
  res.status(200).json({ message: 'Registration successful' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
