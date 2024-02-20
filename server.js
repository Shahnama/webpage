const express = require('express');
const app = express();
const port = 3000;

// Import your data
const { people, pairings } = require('./data.js');

app.use(express.static('public')); // Serve static files from 'public' directory

// Endpoint to get pairings
app.get('/api/pairings', (req, res) => {
  res.json(pairings);
});

// Endpoint to get a person's profile by ID
app.get('/api/profile/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profile = people[id];
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send('Profile not found');
  }
});

app.listen(port, () => {
  console.log(`Coffee Roulette server listening at http://localhost:${port}`);
});
