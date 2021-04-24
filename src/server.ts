import express from 'express';

import './database';

import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log('Server is running on port 3333'));

/* 
app.get(('/'), (request, response) => {
  //return response.send('Olá NLW 05')
  //mesma coisa de 
  return response.json({
    message:'Olá NLW 05'
  })
});
app.post(('/'), (request, response) => {
  return response.json({
    message:"usuário criado com sucesso"
  })
}) */