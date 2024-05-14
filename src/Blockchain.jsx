import './css/blockchain.css';

function Blockchain() {

    return (
        <div>
            <h2>Blockchain Course</h2>

            <div className="blockchain-content">
                <h3>Things we will cover in this course: </h3>
                <p className="blockchaincourse-content">
                    Week 1: Distributed Systems and Alternative Consensus
                    Blockchain architecture is built on the foundation of decades of computer science and distributed
                    systems literature.
                </p>
                <p className="blockchaincourse-content">
                    Week 2: Cryptoeconomics and Proof-of-Stake
                    We examine the meaning and properties of cryptoeconomics as
                    it relates to its two compositional fields: cryptography and economics.
                </p>
                <p className="blockchaincourse-content">
                    Week 3: Enterprise Blockchain: Real-World Applications
                    We look at various existing enterprise-level blockchain
                    implementations, such as JP Morgan’s Quorum, Ripple, Tendermint, and HyperLedger.
                </p>
                <p className="blockchaincourse-content">
                    Week 4: Scaling Blockchain: Cryptocurrencies for the Masses
                    One major obstacle to widespread blockchain adoption is the problem of scalability.
                    We define scaling first as it relates to
                    Bitcoin as a payment method, and compare it to more traditional forms of payment such as credit
                    cards.
                </p>

            </div>
        </div>
    );
};

export default Blockchain;