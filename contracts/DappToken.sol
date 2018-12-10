pragma solidity ^0.4.2;

contract DappToken{
	//Constructor 
	//set the total number of token
	// Read The Total Number Token 
	uint256 public totalSupply;

	function DappToken()public{
		totalSupply = 1000000;

	}
}
