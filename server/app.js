const express = require('express');
const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
// const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const xss = require('xss-clean');
const userRouter = require('../server/routes/userRouter');
const tweetRouter = require('../server/routes/tweetRouter');

// const rateLimit = require('express-rate-limit');
// const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

// const hpp = require('hpp');
// const compression = require('compression');
const app = express();
app.enable('trust proxy');
const cors = require('cors');

// Implement CORS
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
} else {
  app.use(cors({ credentials: true }));
}

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// // 1) Global Middlewares

// // for complex routes
app.options('*', cors());

// // Serving static files
// app.use(express.static(path.join(__dirname, 'puplic')));

// // Set security HTTP headers
// app.use(helmet());

// // Development logging
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// Body parser, reading data from body into req.body
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// // limits the requests from the same IP address to avoid BRUTE FORCE ATTACKS
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, Please try again in an hour!'
// });

// app.use('/api', limiter);

// Body parser, reading data from body into req.body
//parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json()); //middleware

// // Data sanitization against NoSQL query injection(against any unwanted symbols as $ (for logging in without email))
app.use(mongoSanitize());

// Data sanitization against XSS (against any malicious html code)
app.use(xss());

// // Prevent6 parameter pollution
// app.use(
//   hpp({
//     whitelist: [
//       'duration',
//       'ratingsQuantity',
//       'ratingsAverage',
//       'maxGroupSize',
//       'difficulty',
//       'price'
//     ]
//   })
// );
app.use(express.static(`${__dirname}/build`));
app.use(express.static(path.join(__dirname, 'data')));

// app.use(compression());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tweets', tweetRouter);

// Handling un-handled routes
// ('*') : for any url
// app.all('*', (req, res, next) => {
//   next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404));
// });
app.all('*', (req, res, next) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

// ERROR HANDLING MIDDLEWARE (handling error controller)
app.use(globalErrorHandler);

module.exports = app;
