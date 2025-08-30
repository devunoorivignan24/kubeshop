const express = require('express');
const app = express();
const port = 5001;

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' }
  ]);
});

app.get('/health', (req, res) => res.sendStatus(200));
app.get('/ready', (req, res) => res.sendStatus(200));

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});
