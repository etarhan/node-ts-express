import express from 'express';
import acceptHMR from './utils/acceptHMR';

declare const module: any;

const app = express();
const port = 3000;

app.get('/', (_, res: any) => {
  res.send('test / get');
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

acceptHMR(module, server);

export default server;