const express = require('express');
// const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
// const AppError = require('./utils/appError');

const userRouter = require('../routes/userRouter');
const tweetRouter = require('../routes/tweetRouter');
// const reviewRouter = require('./routes/reviewRoutes');
// const bookingRouter = require('./routes/bookingRoutes');

// const rateLimit = require('express-rate-limit');
// const helmet = require('helmet');
// const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
// const hpp = require('hpp');
// const compression = require('compression');

// const cors = require('cors');

const app = express();

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// // 1) Global Middlewares

// // Implement CORS
// app.use(cors());

// // for complex routes
// app.options('*', cors());

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
// app.use(cookieParser());

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
// app.use(mongoSanitize());

// // Data sanitization against XSS (against any malicious html code)
// app.use(xss());

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

// app.use(compression());

// app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tweets', tweetRouter);
// app.use('/api/v1/reviews', reviewRouter);
// app.use('/api/v1/bookings', bookingRouter);

// Handling un-handled routes
// ('*') : for any url
// app.all('*', (req, res, next) => {
//   next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404));
// });

// ERROR HANDLING MIDDLEWARE
// app.use(globalErrorHandler);

module.exports = app;
