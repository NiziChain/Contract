# Hardhat Boilerplate

![ci](https://github.com/shapeshed/hardhat-boilerplate/workflows/Continuous%20Integration/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/shapeshed/hardhat-boilerplate/branch/master/graph/badge.svg?token=FVXeaaBA3d)](https://codecov.io/gh/shapeshed/hardhat-boilerplate)

A boilerplate hardhat project with sane defaults.

- [typescript][4]
- [typechain][3]
- [dotenv][7]

## Prerequisities

- [Node.js][5]

## Install

    npm install

## Tasks

Build the project

    npm run build

Run tests

    npm test
    
## goerliテストネットへのデプロイ

hardhat run scripts/deploy.ts --network goerli

## ローカルで起動するには

hardhat node

別タブで hardhat run scripts/deploy.ts --network localhost

デフォルト設定だとlocalhost:8545でローカルイーサリアムノードが起動します

MetaMaskを開いてネットワークを追加します。

ネットワーク名: Localhost 8545

新しいRPC URL: http://localhost:8545

chainId: 31337

通貨記号: ETH
