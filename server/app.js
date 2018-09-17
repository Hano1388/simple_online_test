const createError   = require('http-errors'),
      express       = require('express'),
      path          = require('path'),
      cookieParser  = require('cookie-parser'),
      logger        = require('morgan'),
      cors          = require('cors'),

      indexRouter   = require('./routes/index'),
      questions     = require('./routes/questions'),
      answers     = require('./routes/answers'),
      app           = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up a whitelist and check against it:
// var whitelist = ['http://localhost:8080', 'http://localhost:3000']
// var corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions));

// or bellow cors are setup for all origins
app.use(cors());

// routes
app.use('/', indexRouter);
app.use('/questions', questions);
app.use('/answers', answers);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
