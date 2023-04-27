// Creation of Web3 class
const Web3 = require("web3");

// Setting up a HttpProvider
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

let abiCode = [{"inputs":[{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"dbCreate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"key","type":"string"}],"name":"dbDelete","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"key","type":"string"}],"name":"dbQuery","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"dbUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"test_db_create","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"key","type":"string"}],"name":"test_db_delete","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"key","type":"string"}],"name":"test_db_query","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"test_db_update","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}];

let binCode = "0x608060405234801561001057600080fd5b506107d8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063779a494a1161005b578063779a494a1461014d578063cd8aeea31461017d578063d4e8eb1e146101ad578063ee4d0c4c146101dd57610088565b80632388cded1461008d5780633a6dd90a146100bd5780633b6baace146100ed578063653614e11461011d575b600080fd5b6100a760048036038101906100a2919061053c565b61020d565b6040516100b491906105cd565b60405180910390f35b6100d760048036038101906100d291906105e8565b61023f565b6040516100e491906106b0565b60405180910390f35b610107600480360381019061010291906105e8565b61027c565b60405161011491906106b0565b60405180910390f35b610137600480360381019061013291906105e8565b61028e565b60405161014491906105cd565b60405180910390f35b6101676004803603810190610162919061053c565b6102a0565b60405161017491906105cd565b60405180910390f35b610197600480360381019061019291906105e8565b6102d2565b6040516101a491906105cd565b60405180910390f35b6101c760048036038101906101c2919061053c565b6102f2565b6040516101d491906105cd565b60405180910390f35b6101f760048036038101906101f2919061053c565b610306565b60405161020491906105cd565b60405180910390f35b600080600080600080602088019450875193506020870192508651915081838587219050809550505050505092915050565b606060008060008060006020870194508651935060405190508385822292509250818101604052610270838361031a565b95505050505050919050565b60606102878261023f565b9050919050565b6000610299826102d2565b9050919050565b600080600080600080602088019450875193506020870192508651915081838587249050809550505050505092915050565b600080600080602085019250845191508183239050809350505050919050565b60006102fe83836102a0565b905092915050565b6000610312838361020d565b905092915050565b606060008267ffffffffffffffff81111561033857610337610411565b5b6040519080825280601f01601f19166020018201604052801561036a5781602001600182028036833780820191505090505b50905060005b838110156103d757600081860151905080838381518110610394576103936106d2565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505080806103cf90610730565b915050610370565b508091505092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61044982610400565b810181811067ffffffffffffffff8211171561046857610467610411565b5b80604052505050565b600061047b6103e2565b90506104878282610440565b919050565b600067ffffffffffffffff8211156104a7576104a6610411565b5b6104b082610400565b9050602081019050919050565b82818337600083830152505050565b60006104df6104da8461048c565b610471565b9050828152602081018484840111156104fb576104fa6103fb565b5b6105068482856104bd565b509392505050565b600082601f830112610523576105226103f6565b5b81356105338482602086016104cc565b91505092915050565b60008060408385031215610553576105526103ec565b5b600083013567ffffffffffffffff811115610571576105706103f1565b5b61057d8582860161050e565b925050602083013567ffffffffffffffff81111561059e5761059d6103f1565b5b6105aa8582860161050e565b9150509250929050565b6000819050919050565b6105c7816105b4565b82525050565b60006020820190506105e260008301846105be565b92915050565b6000602082840312156105fe576105fd6103ec565b5b600082013567ffffffffffffffff81111561061c5761061b6103f1565b5b6106288482850161050e565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561066b578082015181840152602081019050610650565b60008484015250505050565b600061068282610631565b61068c818561063c565b935061069c81856020860161064d565b6106a581610400565b840191505092915050565b600060208201905081810360008301526106ca8184610677565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061073b826105b4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361076d5761076c610701565b5b60018201905091905056fea26469706673582212208560ef95934b79f331d4828599c6fd106076289114fef1058edb5f133cb769ba64736f6c63782c302e382e32302d646576656c6f702e323032332e342e32372b636f6d6d69742e35393562373566382e6d6f64005d";

contract = new web3.eth.Contract(abiCode);

web3.eth.getAccounts().then((accounts) => {
    // Display all Ganache Accounts
    console.log("Accounts:", accounts);

    let mainAccount = accounts[0];

    // address that will deploy smart contract
    console.log("Default Account:", mainAccount);
    contract
        .deploy({ data: binCode })
        .send({ from: mainAccount, gas: 4700000 })
        .on("receipt", (receipt) => {

            // Contract Address will be returned here
            console.log("Contract Address:", receipt.contractAddress);
        })
        .then(async (initialContract) => {
            console.log(initialContract.options.address);
            await initialContract.methods.test_db_create("hello", "world").send({from: mainAccount});
            let res = await initialContract.methods.test_db_query("hello").call();
            console.log(res);
        });
});