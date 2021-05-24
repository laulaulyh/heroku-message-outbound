/*
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const SMSServiceURL = 'https://sms.emma.hk/sms/APIServiceMulti'

app.get('/SendMessage', (req, res) => {
  const request = require('request');
  var correlationId = req.query.correlationId;
request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
  console.log(correlationId);
});
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
*/
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))