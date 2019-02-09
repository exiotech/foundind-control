const FoundingControl = artifacts.require("FoundingControl");

module.exports = function(deployer) {
  deployer.deploy(FoundingControl, '0x6026c3cc92b9f7067ef6c1f10dfe848a5defe3b0', '0xd69d8109f8be72f7346e3e018607b2610dc44da2');
};
