var vaisen = artifacts.require("./vaisen.sol");

contract('vaisen', function(accounts) {
  var tokenInstance;
  var tokenprice = 1000000000000;

  it('initializes the contract with the correct values', function() {
    return vaisen.deployed().then(function(instance) {
      tokenSaleInstance = instance;
      return tokenSaleInstance.address
    }).then(function(address) {
      assert.notEqual(address, 0x0, 'has contract address');
      return tokenSaleInstance.tokenContract();
    }).then(function(address) {
      assert.notEqual(address, 0x0, 'has token contract address'); // return address of contract 
      return tokenSaleInstance.tokenprice();
     }).then(function(price){
     	assert.equal(price, tokenprice, "token price is correct");
     });
	});
});