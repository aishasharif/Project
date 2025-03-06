const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let users = []; // In-memory user data (for simplicity)

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Simple user registration logic
  users.push({ username, password });
  res.status(201).send('User Registered');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    res.status(200).send('Login Successful');
  } else {
    res.status(401).send('Invalid Credentials');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
