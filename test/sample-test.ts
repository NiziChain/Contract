import { ethers } from "hardhat";
import { solidity } from "ethereum-waffle";
import chai from "chai";
import { Nizi } from "../typechain/Nizi";
import { Signer } from "ethers";

chai.use(solidity);
const assert = chai.assert;
const expect = chai.expect;

async function assertPromiseThrow(p: Promise<any>) {
  let error: Error;
  return p.catch((err) => {
    error = err;
  }).finally(()=> {
    expect(error).to.be.an(`Error`);
  })
}

describe("Nizi", async () => {
  let deployer:Signer, author:Signer, author2: Signer, author3: Signer, author4: Signer, other: Signer;
  let deployerAddress, authorAddress, author2Address, author3Address, author4Address, otherAddress;

  let nizi: Nizi;

  beforeEach(async () => {
    const niziFactory = await ethers.getContractFactory("Nizi");
    nizi = (await niziFactory.deploy({})) as Nizi;
    await nizi.deployed();

    [deployer, author, author2, author3, author4, other] = await ethers.getSigners();
    deployerAddress = await deployer.getAddress();
    authorAddress = await author.getAddress();
    author2Address = await author2.getAddress();
    author3Address = await author3.getAddress();
    author4Address = await author4.getAddress();
    otherAddress = await other.getAddress();
  });

  it("コンテンツidがちゃんとインクリメントされるか", async () => {
    await assert((await nizi.functions.getNumberOfContents()).toString(), "1");
    await nizi.connect(author).functions.registerOriginal("10");
    await assert((await nizi.functions.getNumberOfContents()).toString(), "2");
    await nizi.connect(author2).functions.registerSecondary(1, {value: 10});
  })

  it("コンテンツリストはちゃんと機能しているのか", async () => {
    await nizi.connect(author).functions.registerOriginal("0");
    await nizi.connect(author2).functions.registerOriginal("0");
    await nizi.connect(author).functions.registerOriginal("0");
    await nizi.connect(author2).functions.registerOriginal("0");
    await nizi.connect(author).functions.registerOriginal("0");

    let list1 = await nizi.functions.getContentsList(await author.getAddress());
    assert.equal(list1[0].length, 3);
    // ここいい書き方がわからない
    assert.equal(list1[0][0].toString(), '1');
    assert.equal(list1[0][1].toString(), '3');
    assert.equal(list1[0][2].toString(), '5');

    let list2 = await nizi.functions.getContentsList(await author2.getAddress());
    assert.equal(list2[0].length, 2);
    assert.equal(list2[0][0].toString(), '2');
    assert.equal(list2[0][1].toString(), '4');
  })
  
  it("royalty ちゃんと払えてますか？", async () => {
    await nizi.connect(author).functions.registerOriginal("10");
    let beforeBalance = await author.getBalance();
    await nizi.connect(author2).functions.registerSecondary(1, {value: 10});
    assert.equal((await author.getBalance()).toString(), beforeBalance.add("10").toString());
  })
  
  it("権利の確認と剥奪や付与", async () => {
    await nizi.connect(author).functions.registerOriginal("10");
    assert.equal((await nizi.functions.getRoyalty(1)).toString(), "10");
    await nizi.connect(author2).functions.registerSecondary(1, {value: 10});
    assert.equal((await nizi.functions.checkRight(2))[0], true);
    assert.equal((await nizi.functions.getParent(2)).toString(), "1");
    // 剥奪は一次作者以外はできない
    await assertPromiseThrow(nizi.connect(other).functions.deprive(1, 2));
    assert.equal((await nizi.functions.checkRight(2))[0], true);
    //剥奪する
    await nizi.connect(author).functions.deprive(1, 2);
    assert.equal((await nizi.functions.checkRight(2))[0], false);
    //権利回復も一次作者以外はできない
    await assertPromiseThrow(nizi.connect(other).functions.recover(1, 2));
    assert.equal((await nizi.functions.checkRight(2))[0], false);
    //権利回復
    await nizi.connect(author).functions.recover(1, 2);
    assert.equal((await nizi.functions.checkRight(2))[0], true);
  })
})
