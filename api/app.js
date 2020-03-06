import express from 'express';

import morgan from 'morgan';
import helmet from 'helmet';
import xss from 'xss-clean';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';

const userRoutes = require('./routes/userRoute');
const todolistRoute = require('./routes/todolistRoute');

const app = express();

//  GLOBAL MIDDLEWARE
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.static(`${__dirname}/public`));
app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
    'Authorization',
  );
  next();
});

// ROUTES
app.use('/', userRoutes);
app.use('/panel', todolistRoute);
// app.use(errorHandler);

module.exports = app;
