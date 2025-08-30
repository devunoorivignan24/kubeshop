const express = require('express');
const app = express();
const port = 5002;

let cart = [];

app.use(express.json());

app.post('/cart', (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json({ message: 'Item added to cart', cart });
});

app.get('/cart', (req, res) => res.json(cart));

app.get('/health', (req, res) => res.sendStatus(200));
app.get('/ready', (req, res) => res.sendStatus(200));

app.listen(port, () => {
  console.log(`Cart service running on port ${port}`);
});
