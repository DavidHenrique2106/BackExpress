const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/api/data', (req, res) => {
  res.send('teste de back');
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
