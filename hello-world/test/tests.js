describe('DOM tests', function() {

  var form = document.getElementById('myForm');
 
  it('Form exists in the DOM', function() {
    expect(form).to.not.equal(undefined);
  });
 
  it('Input values are bound to the fullname text', function() {

    var firstName = 'Luciano';
    var lastName = 'Rubio';

    var fullName = firstName + ' ' + lastName;

    expect(form.firstName.value).to.equal(firstName);
    expect(form.lastName.value).to.equal(lastName);

    var span = document.getElementById('fullName');

    expect(span.innerText).to.equal(fullName);
  });

});

describe('ViewModel tests', function(){

  it('should set the data model', function(){
    var viewModel = new ViewModel('Luciano', 'Rubio');

    expect(viewModel.firstName()).to.equal('Luciano');
    expect(viewModel.lastName()).to.equal('Rubio');
    expect(viewModel.fullName()).to.equal('Luciano Rubio');
  });

});