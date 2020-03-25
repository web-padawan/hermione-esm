const { startServer, createConfig } = require('es-dev-server');

module.exports = (hermione, opts) => {
  let server;

  hermione.on(hermione.events.RUNNER_START, () => {
    console.log('Starting server ...');

    const cfg = createConfig({
      port: opts.port || 8080,
      hostname: opts.hostname || '127.0.0.1',
      rootDir: opts.root || process.cwd(),
      nodeResolve: true,
      compatibility: opts.compatibility || 'none'
    });

    return new Promise(resolve => {
      startServer(cfg).then(result => {
        server = result.server;
        console.log(`Server started on http://${cfg.hostname}:${cfg.port}`);
        resolve();
      });
    });
  });

  hermione.on(hermione.events.RUNNER_END, () => {
    console.log('Server closed.');
    return server.close();
  });
};
