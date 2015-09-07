describe('DOM tests', function() {

  it('should be a button', function(){
    expect(document.getElementById('button')).to.not.equal(undefined);
  });

});