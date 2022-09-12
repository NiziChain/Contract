# NiziChain Contract

![ci](https://github.com/shapeshed/hardhat-boilerplate/workflows/Continuous%20Integration/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/shapeshed/hardhat-boilerplate/branch/master/graph/badge.svg?token=FVXeaaBA3d)](https://codecov.io/gh/shapeshed/hardhat-boilerplate)

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

さらに、別タブで 
    hardhat run scripts/deploy.ts --network localhost

デフォルト設定だとlocalhost:8545でローカルイーサリアムノードが起動します

MetaMaskを開いてネットワークを追加します。

ネットワーク名: Localhost 8545

新しいRPC URL: http://localhost:8545

chainId: 31337

通貨記号: ETH

hardhat nodeをやり直した後、トランザクションを発行させようとするとエラーになる場合があります。
その時はMetaMaskの設定->高度な設定->アカウントのリセット を行うと多分治ります。
