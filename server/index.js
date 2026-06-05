const express = require('express');
const path = require('path');
const cors = require('cors');

inconnu const app = express();
inconnu const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../inconnu/inconnu.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', engine: 'GitDrop X ⚡', author: 'Inconnu Boy 🖤' });
});

app.listen(PORT, () => {
  console.log(`GitDrop X ⚡ running on port ${PORT}`);
});

module.exports = app;
