import dotenv from 'dotenv';
import mongoose from 'mongoose';

process.on('uncaughtException', error => {
  console.log(error.name, error.message);
  console.log('uncaught Exception, Shutting down...');
  process.exit(1);
});

dotenv.config({ path: './config.env' });
import app from './app';

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connect successfully');
  });

export const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
  console.log('Application is running...');
});

process.on('unhandledRejection', error => {
  console.log(error.name, error.message);
  console.log('unhandled Rejection, Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
