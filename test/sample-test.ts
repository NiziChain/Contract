import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import chai from "chai";
import { Niji } from "../typechain/Niji";
import { Signer } from "ethers";

chai.use(solidity);
const assert = chai.assert;

describe("Niji", async () => {
  let deployer:Signer, author:Signer, author2: Signer, author3: Signer, author4: Signer;
  let deployerAddress, authorAddress, author2Address, author3Address, author4Address;
  
  let niji: Niji;
  
  beforeEach(async () => {
    const nijiFactory = await ethers.getContractFactory("Niji");
    niji = (await nijiFactory.deploy()) as Niji;
    await niji.deployed();
  
    [deployer, author, author2, author3, author4] = await ethers.getSigners();
    deployerAddress = await deployer.getAddress();
    authorAddress = await author.getAddress();
    author2Address = await author2.getAddress();
    author3Address = await author3.getAddress();
    author4Address = await author4.getAddress();
  });
  
  it("NextContentIdがちゃんとインクリメントされるか", async () => {
    await assert((await niji.functions.getNextContentId()).toString(), "1");
    let parentContentId = await niji.connect(author).functions.registerOriginal("10");
    console.log(parentContentId.value.toString());
    await assert((await niji.functions.getNextContentId()).toString(), "2");
    let childContentId = await niji.connect(author2).functions.registerSecondary(1, {value: 10});
    console.log(await childContentId.wait());
  })
 
})
