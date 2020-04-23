export default (mod, server) => {
  if (mod.hot) {
    mod.hot.accept();
    mod.hot.dispose(() => server.close());
  }
}