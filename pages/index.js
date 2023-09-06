import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";
import DepositModal from './components/DepositModal'
import WithdrawModal from './components/WithdrawModal'
import ownerModal from './components/ownerModal'

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [ownerModal, setOwnerModal] = useState(false);
  const [ownerName, setwhoisOwner] = useState(undefined);
 
  // const [showModal, setShowModal] = useState(false);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
 
    setATM(atmContract);
  }

  const getBalance = async() => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  }

  const deposit = async() => {
    if (atm) {
      let tx = await atm.deposit(1);
      await tx.wait()
      getBalance();
      setShowDepositModal(true);
      console.log("shown");
    }
  }

  const withdraw = async() => {
    if (atm) {
      let tx = await atm.withdraw(1);
      await tx.wait()
      getBalance();
      setShowWithdrawModal(true);
    }
  }

  const whoisOwner = async () => {
    if (atm) {
      const ownerName = await atm.whoisOwner();
      setwhoisOwner(ownerName);
      //setOwnerModal(true);
    }
  }

  function handleState1(newValue) {
    setShowDepositModal(false);
  }

  function handleState2(newValue) {
    setShowWithdrawModal(false);
  }

  function handleState3(newValue) {
    setOwnerModal(false);
  }

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Your Balance: {balance}</p>
        <p>Owner Name: {ownerName}</p>
        <button onClick={deposit}>Deposit 1 ETH</button>
        <button onClick={withdraw}>Withdraw 1 ETH</button>
        <button onClick={whoisOwner}>who is Owner</button>
        {showDepositModal && <DepositModal change={handleState1} showDepositModal/>}
        {showWithdrawModal && <WithdrawModal change={handleState2} showWithdrawModal/>}
        {/* {ownerModal && <ownerModal change={handleState3} ownerModal/>} */}
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header><h1><b><i>Welcome to the Metacrafters ATM!</i></b></h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
          width: 500%;
          height: 900px;
          background-image: url(https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg);
          background-repeat: no-repeat, no-repeat, no-repeat;
          background-position:
            center;
            
        
        }
      `}
      </style>
    </main>
  )
}
