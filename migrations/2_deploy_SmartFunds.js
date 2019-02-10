const SmartFunds = artifacts.require("SmartFunds");

module.exports = function(deployer) {
  deployer.deploy(SmartFunds, '0x04122226F11d4d802a6e52F2af5d3Bcd0C2d38cF', '0x78210D78646C165af7575A8020C1480a22614EB2');
};
