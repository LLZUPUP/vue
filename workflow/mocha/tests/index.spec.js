const expect = require('chai').expect
const { add } = require('../index')

describe('hello-npm-script',()=> {
  // 方方面面都考虑进去
  describe('#add',()=> {
    it('should return sum when param are numbers',()=>{
      expect(add(0,1)).to.equal(1);
      expect(add(2,3)).to.equal(5);
    })
    it('should return NaN when param are not numbers',()=>{
      expect(isNaN(add(1,'2'))).to.equal(true)
    })
  })
})