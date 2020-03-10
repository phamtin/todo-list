import express from 'express';

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

import userRoutes from './routes/userRoute';
import todolistRoute from './routes/todolistRoute';

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
  res.header('Access-Control-Allow-Headers', 'Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Authorization',
    'Access-Control-Allow-Methods ',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// ROUTES
app.use('/', userRoutes);
app.use('/panel', todolistRoute);
// app.use(errorHandler);

export default app;
