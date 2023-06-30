if (process.env.JEST_WORKER_ID !== undefined) {
  const { server } = require("./src/mocks/server");
  server.listen();
}
