import { Server } from 'http';
import express, { Request, Response } from 'express';
import acceptHMR from './utils/acceptHMR';

const app = express();
const port = 3000;

app.get('/', (_: Request, res: Response) => {
  res.send('test / get');
});

const server: Server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});

acceptHMR(module, server);

export default server;
