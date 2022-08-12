const express = require('express')
const cors = require('cors')
const port = 3001;
const app = express()
const route = require('./src/routes/personagem.route')

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/rick', route)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})