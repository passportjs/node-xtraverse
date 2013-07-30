var fs = require('fs')
  , $ = require('..');


describe('Collection', function() {
  
  var doc = $('<foo bar="baz">hello</foo>');
  
  it('should alias each to forEach', function() {
    expect(doc.each).to.equal(doc.forEach);
  });
  
  it('should alias up to parent', function() {
    expect(doc.up).to.equal(doc.parent);
  });
  
  it('should alias prev to previous', function() {
    expect(doc.prev).to.equal(doc.previous);
  });
  
  it('should alias ns to namespace', function() {
    expect(doc.ns).to.equal(doc.namespace);
  });
  
});
