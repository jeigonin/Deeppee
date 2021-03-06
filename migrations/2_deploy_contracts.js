const HelloWorld = artifacts.require("HelloWorld");
const SimpleStorage = artifacts.require("SimpleStorage");
const Lottery = artifacts.require("Lottery");
const MyToken = artifacts.require("MyToken");
const ShipBattle = artifacts.require("ShipBattle");
const Deepee = artifacts.require("Deepee");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(SimpleStorage, 42);
  deployer.deploy(Lottery);
  deployer.deploy(MyToken);
  deployer.deploy(Deepee, "First deepee", "ETH");
};
