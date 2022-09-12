import { ethers } from "hardhat";

async function main() {
  const Nizi = await ethers.getContractFactory("Nizi");
  const nizi = await Nizi.deploy();
  await nizi.deployed();
  console.log("nizi address:", nizi.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
