const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId)) {
    return res.status(404).send(`Cannot GET /cart/${id}`);
  } else {
    return res.status(200).send(`Payment methods for cart ${id}`);
    }
});
   

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
