import { ethers } from "hardhat";

async function main() {
  const Niji = await ethers.getContractFactory("Niji");
  const niji = await Niji.deploy();
  await niji.deployed();
  console.log("niji address:", niji.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
