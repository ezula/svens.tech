import hash from 'object-hash';

class Block {
    constructor(transactions, prevHash) {
        // En lista av transaktioner (strängar)
        this.transactions = transactions;
        // Det föregående blockets hash
        this.prevHash = prevHash;

        // Detta blocks hash
        this.blockHash = hash({ transactions, prevHash });
    }
}

const transactions = [ 'Första transaktionen!' ];
const genesisBlock = new Block(transactions, 0);

const block2Transactions = [ 'Pelle skickar 2 BC till Anders' ];
const block2 = new Block(block2Transactions, genesisBlock.blockHash);

const block3Transactions = [ 'Anders skickar 50 BC till Jonas' ];
const block3 = new Block(block3Transactions, block2.blockHash);

console.log(`Startblock hash: ${genesisBlock.blockHash}`);
console.log(`Block 2 hash: ${block2.blockHash}`);
console.log(`Block 3 hash: ${block3.blockHash}`);
