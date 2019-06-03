const express = require('express');
const transformMiddleware = require('express-transform-bare-module-specifiers').default;

module.exports = function(gemini, opts) {
  let server;

  gemini.on('startRunner', function(runner) {
    console.log('Starting server ...');

    const cfg = {
      port: opts.port || 8080,
      hostname: opts.hostname || '127.0.0.1',
      root: opts.root || process.cwd()
    };

    const app = express();

    // transform bare modules specifiers
    app.use('*', transformMiddleware());

    // serve static files
    app.use(express.static(cfg.root));

    return new Promise(resolve => {
      server = app.listen(cfg.port, cfg.hostname, () => {
        console.log(`Server started on http://${cfg.hostname}:${cfg.port}`);
        resolve();
      });
    });
  });

  gemini.on('endRunner', function(runner, data) {
    console.log('Server closed.');
    return server.close();
  });
};
