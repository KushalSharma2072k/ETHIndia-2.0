
var Migrations = artifacts.require("./Migrations.sol");
// exports
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
