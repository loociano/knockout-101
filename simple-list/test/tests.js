describe('DOM tests', function() {
  it('should be a text field', function(){
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++){
      var input = inputs[i];
      if (input.dataset.bind.value){
        break;
      }
    }
    expect(input).to.not.equal(undefined);
  });

  it('should be a add button', function(){
    var buttons = document.getElementsByTagName('button');
    for(var i = 0; i < buttons.length; i++){
      var button = buttons[i];
      if (button.dataset.bind.enable){
        break;
      }
    }
    expect(button).to.not.equal(undefined);
  });

  it('should be a select list', function(){
    var selects = document.getElementsByTagName('select');
    for(var i = 0; i < selects.length; i++){
      var select = selects[i];
      if (select.dataset.bind.options){
        break;
      }
    }
    expect(select).to.not.equal(undefined);
  });

});

describe('viewModel tests', function(){

  it('should add values by default', function(){
    var items = viewModel.items(); 
    expect(items[0]).to.equal('Alpha');
    expect(items[1]).to.equal('Beta');
    expect(items[2]).to.equal('Gamma');
  });

  it('should not add one item if field is empty', function(){
    var items = viewModel.items(); 
    expect(items.length).to.equal(3);
    viewModel.addItem();
    expect(items.length).not.to.equal(4);
  });

});