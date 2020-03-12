// import 'core-js/stable';
// import { expect } from 'chai';
// import jwt from 'jsonwebtoken';
// import request from 'supertest';
// import mongoose from 'mongoose';
// import 'regenerator-runtime/runtime';

// import userData from './data/userData';
// import { clearDb } from '../utils/db';
// import app from '../app';

// const User = mongoose.model('User');

// describe('authentication', () => {
//   let user;
//   let token;

//   before(async () => {
//     // this.enableTimeouts(false);
//     await clearDb([User]);
//     user = await User.create(userData);
//     token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: process.env.JWT_EXPIRES_IN,
//     });
//   });

//   it('should throw error if request have no headers - should fail', async done => {
//     request(app)
//       .post('/panel')
//       .set('Authorization', `Bearer ${token}`)
//       .expect(res => {
//         expect(res.body.error).to.exist;
//         expect(res.body.error).to.equal('Unauthorized user!');
//       })
//       .expect(401, done);
//   });
// });
