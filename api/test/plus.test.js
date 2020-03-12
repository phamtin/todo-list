const expect = require('chai').expect;

describe('test', () => {
  describe('/plus', () => {
    it('should plus two number', function() {
      const a = 2;
      const b = 3;
      expect(a + b).to.equal(5);
    });
  });
});
