describe('DOM tests', function() {

  it('should display a click button', function(){
    expect(document.getElementById('button')).to.not.equal(undefined);
  });

  it('should not display a warning message', function(){
    expect(document.getElementById('warning').style.display).to.equal('none');
  });
});

describe('View Model tests', function(){

  afterEach(function(){
    viewModel.resetClicks();
  });

  it('click counter should start at zero', function(){
    expect(viewModel.numberOfClicks()).to.equal(0);
  });

  it('2 clicks should increase twice the counter viewModel', function(){
    viewModel.registerClick();
    viewModel.registerClick();
    expect(viewModel.numberOfClicks()).to.equal(2);
  });

  it('3 clicks should disable the button and display a warning', function(){
    viewModel.registerClick();
    viewModel.registerClick();
    viewModel.registerClick();
    expect(viewModel.numberOfClicks()).to.equal(3);
    expect(document.getElementById('button').disabled).to.equal(true);
    expect(document.getElementById('warning').style.display).to.not.equal('none');
  });

  it('button reset should reset the counter viewModel', function(){
    viewModel.registerClick();
    viewModel.registerClick();
    viewModel.registerClick();
    viewModel.resetClicks();
    expect(document.getElementById('button').disabled).to.equal(false);
    expect(document.getElementById('warning').style.display).to.equal('none');
  });

});