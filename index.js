//just server and port
const server = require('./server.js')
const port = 8000;
//listen
server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });