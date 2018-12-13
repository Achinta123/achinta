pragma solidity ^0.4.2;

import "./DappToken.sol";

contract vaisen {
	address admin;
	DappToken public tokenContract;
	uint256 public tokenprice;

	function vaisen(DappToken _tokenContract, uint256 _tokenprice) public {
		admin = msg.sender;
		tokenContract = _tokenContract;
		tokenprice = _tokenprice;

	}
}