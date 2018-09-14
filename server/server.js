const express     = require('express'),
      bodyParser  = require('body-parser'),
      PORT        = process.env.PORT || 8000,
      app         = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log("listening on port: ", port);
})
