import { expect } from 'chai';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { port } from '../server';

describe('server', () => {
  it('test right port', done => {
    expect(port).to.equal(process.env.PORT || 9000);
    done();
  });
});
