const SocialToken = artifacts.require("./SocialToken.sol");

module.exports = function(deployer) {
    const _name="SocialToken";
    const _symbol="ST";
    const _decimals = 18;
  deployer.deploy(SocialToken,_name,_symbol,_decimals);
};
