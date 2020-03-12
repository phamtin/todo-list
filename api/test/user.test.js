import 'core-js/stable';
import { expect } from 'chai';
import jwt from 'jsonwebtoken';
import request from 'supertest';
import mongoose from 'mongoose';
import 'regenerator-runtime/runtime';

import userData from './data/userData';
import app from '../app';

const User = mongoose.model('User');

describe('user endpoints', () => {
  const email = {
    newUser: 'new',
    invalid: 'user!$@',
    long: 'a'.repeat(33),
  };
  const password = {
    wrong: 'incorrect',
    short: 'a',
    long: 'a'.repeat(20),
  };

  describe('/login', () => {
    it('login with missing fields - should fail', done => {
      request(app)
        .post('/login')
        .expect(res => {
          expect(res.error).to.exist;
        })
        .expect(401, done);
    });

    it('login with incorrect username - should fail', done => {
      request(app)
        .post('/login')
        .send({ ...userData, email: email.invalid })
        .expect(res => {
          expect(res.body.error).to.exist;
          expect(res.body.error).to.equal('Invalid email or password !');
        })
        .expect(401, done);
    });

    it('login with short password - should fail', done => {
      request(app)
        .post('/login')
        .send({ ...userData, password: password.short })
        .expect(res => {
          expect(res.body.error).to.exist;
          expect(res.body.error).to.equal('Invalid email or password !');
        })
        .expect(401, done);
    });

    it('login with too long password - should fail', done => {
      request(app)
        .post('/login')
        .send({ ...userData, password: password.long })
        .expect(res => {
          expect(res.body.error).to.exist;
          expect(res.body.error).to.equal('Invalid email or password !');
        })
        .expect(401, done);
    });

    // it('login with valid data - should pass', done => {
    // request(app)
    // .post('/login')
    // .send(userData)
    // .expect(res => {
    //   const { user, token } = res.body;
    //   expect(user).to.exist;
    //   expect(user.email).to.equal(userData.email);
    //   expect(token).to.exist;
    //   const payload = jwt.verify(token, process.env.JWT_SECRET);
    //   expect(payload.email).to.equal(userData.email);
    // })
    // .expect(200, done);
    // });
  });
});
