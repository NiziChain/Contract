import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import chai from "chai";
import { Niji } from "../typechain/Niji";

chai.use(solidity);
const { expect } = chai;
//
// describe("Greeter", async () => {
//   let greeter: Greeter;
//   beforeEach(async () => {
//     const greeterFactory = await ethers.getContractFactory("Greeter");
//     greeter = (await greeterFactory.deploy("Hello, world!")) as Greeter;
//     await greeter.deployed();
//   });
//
//   it("should return the greeting", async () => {
//     expect(await greeter.greet()).to.equal("Hello, world!");
//   });
//
//   it("should return the new greeting once changed", async () => {
//     await greeter.setGreeting("Hola, mundo!");
//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

describe("Niji", async () => {
  let niji: Niji;
  
  beforeEach(async () => {
    const nijiFactory = await ethers.getContractFactory("Niji");
    niji = (await nijiFactory.deploy()) as Niji;
    await niji.deployed();
  });
  
  it("should return true", async () => {
    chai.assert.equal(await niji.getRights(10), true);
  })
})
