# 🏛️ Simple DAO with Superfluid.Finanace

> Quickly spin up a DAO smart contract where you choose the initial group of members.

![PowDAO Dashboard](https://adaptiveclaim.s3.amazonaws.com/Screenshot+2021-09-20+114944.png)

## 📘 DAO Specifics

Quickly initiate a DAO by sending an array of address in the constructor of this contract on deploy. DAO proposals can be created by anyone, but only voted on by members. Members can create proposals to add or kick members. Members cannot withdraw their deposited funds once they are deposited. All deposited funds will be used for the good of the DAO.

Public Goods...
This type of DAO can be used by sports teams to pay for field time, equipment, travel, etc. Another use case is for public contruction or maintenance projects. 
A neighborhood/ town/ governoment can deposit a bunch of funds which can be democratically voted on and invoices can be submitted by the contractors.  


[Info on Re-Entrancy Attack](https://quantstamp.com/blog/what-is-a-re-entrancy-attack)

## 🏄‍♂️ Quick Start

Prerequisites: [Node](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> clone/fork 🏗 scaffold-eth:

```bash
git clone https://github.com/binsta/dao-super

cd dao-super
```

> install and start your 👷‍ Hardhat chain:

```bash
cd dao-super
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
cd dao-super
yarn start
```

> in a third terminal window, 🛰 deploy your contract:

```bash
cd dao-super
yarn deploy
```

🔏 Edit your smart contract `PowDAO.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app
