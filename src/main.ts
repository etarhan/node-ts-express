import express from 'express';

declare const module: any;

const app = express();
const port = 3000;

app.get('/', (_, res: any) => {
  res.send('test / get');
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
