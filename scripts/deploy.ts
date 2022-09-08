import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("hai");
  await greeter.deployed();
  console.log("Greeter address:", greeter.address); // eslint-disable-line no-console
  const Niji = await ethers.getContractFactory("Niji");
  const niji = await Niji.deploy();
  await niji.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  });
