const app = require('./server/server');

var port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Listening');
});
