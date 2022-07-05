const { ethers, getNamedAccounts, network } = require("hardhat")
const { BigNumber } = require("@ethersproject/bignumber")
const { getWeth } = require("../scripts/getWeth")

async function main() {
    await getWeth()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
