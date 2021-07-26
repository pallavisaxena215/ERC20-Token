pragma solidity 0.5.0;
import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
contract SocialToken is StandardToken, DetailedERC20{
constructor(string memory _name, string memory _symbol, uint8 _decimals)
  DetailedERC20(_name,_symbol,_decimals)

  public{

  }
}