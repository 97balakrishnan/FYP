function getAddress() {
    return '0xd202521d239da2e394c9d9a01bab26e13ae47f39';
}
function getAbi() {
    return '[ { "constant": true, "inputs": [ { "name": "index", "type": "uint256" } ], "name": "getCustomerData", "outputs": [ { "name": "name", "type": "bytes" }, { "name": "email", "type": "bytes" }, { "name": "kycData", "type": "bytes" }, { "name": "oName", "type": "bytes" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getCustomersCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "checkDeployed", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "index", "type": "uint256" } ], "name": "getDataHash", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "name", "type": "bytes" }, { "name": "email", "type": "bytes" }, { "name": "kycData", "type": "bytes" }, { "name": "oName", "type": "bytes" } ], "name": "addCustomer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]';
}