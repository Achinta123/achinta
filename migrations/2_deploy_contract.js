var DappToken = artifacts.require("./DappToken.sol");
var vaisen = artifacts.require("./vaisen.sol");


module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000).then(function(){

  	//token price is 0.001 eth
  	var tokenprice = 1000000000000;
  	return deployer.deploy(vaisen, DappToken.address, tokenprice);
  });
};

 