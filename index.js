const { startDevServer } = require('@web/dev-server');

module.exports = (hermione, opts) => {
  let server;

  hermione.on(hermione.events.RUNNER_START, () => {
    const config = {
      port: opts.port || 8080,
      hostname: opts.hostname || '127.0.0.1',
      rootDir: opts.root || process.cwd(),
      nodeResolve: true
    };

    return new Promise(resolve => {
      startDevServer({
        config,
        readCliArgs: false,
        readFileConfig: false
      }).then(result => {
        server = result.server;
        resolve();
      });
    });
  });

  hermione.on(hermione.events.RUNNER_END, () => {
    console.log('Server closed.');
    return server.close();
  });
};
