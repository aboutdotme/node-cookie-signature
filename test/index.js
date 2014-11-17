/**
 * Module dependencies.
 */

var cookie = require('..');

describe('.sign(val, secret)', function(){
  it('should sign the cookie', function(){
    var val = cookie.sign('hello', 'tobiiscool');
    val.should.equal('cbd3d3ca673b961ac18dff67719bd5413a11d384hello');

    var val = cookie.sign('hello', 'luna');
    val.should.not.equal('cbd3d3ca673b961ac18dff67719bd5413a11d384hello');
  })
})

describe('.unsign(val, secret)', function(){
  it('should unsign the cookie', function(){
    var val = cookie.sign('hello', 'tobiiscool');
    cookie.unsign(val, 'tobiiscool').should.equal('hello');
    cookie.unsign(val, 'luna').should.be.false;
  })
})
