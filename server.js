const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const adminCredentials = {
  email: 'admin@example.com',
  password: 'admin1234'
};

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Please enter both email and password.');
  }

  if (email === adminCredentials.email && password === adminCredentials.password) {
    return res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  }

  return res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).send('Please fill in all fields.');
  }

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match.');
  }

  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(PORT, () => {
  console.log(`Auth app running on port ${PORT}`);
  console.log(`Admin login: ${adminCredentials.email} / ${adminCredentials.password}`);
});