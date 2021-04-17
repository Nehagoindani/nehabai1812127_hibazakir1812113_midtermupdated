var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const session = require('express-session')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { Cv_update, Cv_resume } = require('./controller/Cv.controller');
const cvModel = require('./model/cv.model');

var app = express();
app.use(session(
  {
  name:'sid',
  secret: 'random message', //this is needed for making a session key
  saveUninitialized: false, //for login sessions set it to false, setting to true means store blank sessions
  resave: false, 
  cookie: {
      expires: 600000 //or use maxAge ( takes in milliseconds value)
    }
  }
)
);

mongoose.connect('mongodb://localhost/CvDb', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views')); //yesy pucho han thra thra puri video nh dekhio ok ok abi kiya krna hay
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.post("/login",async(req, res)=> {
  try{
    const username = req.body.username;
    const password = req.body.password;
    const user_name = await login.findOne({username:username})
    if(user_name.password===password){
      res.status(201).render('main');
    }
    else{
      res.send("invalid data");
    }

  }
  catch(error){
    res.status(400).send("invalid email")

  }
});


module.exports = app;
