/**
 * Module dependencies.
 */

var cookie = require('..');

describe('.sign(val, secret)', function(){
  it('should sign the cookie', function(){
    var val = cookie.sign('2f323dde2cee4512b3d8e13050532f7f', 'coolsecret');
    val.should.equal('0232b8ce6f993711f9c623ff95969e6454591da22f323dde2cee4512b3d8e13050532f7f');

    var val = cookie.sign('2f323dde2cee4512b3d8e13050532f7f', 'luna');
    val.should.not.equal('0232b8ce6f993711f9c623ff95969e6454591da22f323dde2cee4512b3d8e13050532f7f');
  })
})

describe('.unsign(val, secret)', function(){
  it('should unsign the cookie', function(){
    var val = cookie.sign('hello', 'tobiiscool');
    cookie.unsign(val, 'tobiiscool').should.equal('hello');
    cookie.unsign(val, 'luna').should.be.false;
  })
})
