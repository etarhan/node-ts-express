import { Server } from 'http';

export default (mod: NodeModule, server: Server): void => {
  if (mod.hot) {
    mod.hot.accept();
    mod.hot.dispose(() => server.close());
  }
};
