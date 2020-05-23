const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
//dentro do cors=> {origin: 'endereco para acessar a aplicação'}
app.use(express.json());
app.use(routes)

app.listen(3333);