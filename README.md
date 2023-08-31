# MetaCrafters ATM DApp

Welcome to the MetaCrafters ATM decentralized application (DApp). This DApp empowers users to interact with a smart contract deployed on the Ethereum blockchain. With MetaCrafters ATM, users can conveniently deposit and withdraw Ether using their MetaMask wallets.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Components](#components)
- [Usage](#usage)
- [Important Notes](#important-notes)
- [License](#license)

## Prerequisites

Before you begin using the MetaCrafters ATM DApp, ensure that you have the following:

- *MetaMask*: MetaMask is a widely-used browser extension that operates as an Ethereum wallet. It enables you to manage your Ethereum accounts and interact seamlessly with Ethereum-based decentralized applications (DApps).

## Getting Started

Here's how to set up and start using the MetaCrafters ATM DApp:

1. *Clone the Repository*: Start by cloning this repository to your local machine using your preferred method. You can use Git on the command line or a Git GUI tool.

2. *Navigate to Project Directory*: Open your command-line interface (CLI) and navigate to the project directory:

   bash
   cd metacrafters-atm
   

3. *Install Dependencies*: The MetaCrafters ATM DApp relies on certain external libraries and packages. Install these dependencies by running the following command:

   bash
   npm install
   

4. *Start Development Server*: Launch the development server to run the DApp on your local environment:

   bash
   npm start
   

5. *Access the DApp*: With the development server running, open your web browser and access the DApp by entering the provided URL in the address bar. Make sure your MetaMask wallet is connected to either the Rinkeby or Ethereum test network.

## Components

The MetaCrafters ATM DApp is composed of three main components that work together to provide a seamless and user-friendly experience:

1. *HomePage.js*: This React component serves as the main hub of the DApp's user interface. It establishes a connection to MetaMask, communicates with the Ethereum smart contract, and displays essential user information. Key functionalities include:

   - *Connecting to MetaMask*: The `getWallet` function establishes a connection to the MetaMask wallet. If the wallet is available, it fetches the user's Ethereum account and invokes the `handleAccount` function.

   - *Connecting the Account*: The `connectAccount` function prompts the user to connect their MetaMask wallet to the DApp. Once the connection is established, it retrieves the user's Ethereum accounts and invokes the `getATMContract` function to fetch the deployed smart contract's reference.

   - *Smart Contract Interaction*: Using the `atm` reference obtained, the user's balance is fetched using the `getBalance` function. Additionally, the user can initiate deposit and withdrawal transactions by clicking the respective buttons, which call the `deposit` and `withdraw` functions.

   - *Modal Dialogs*: The DApp utilizes modal dialogs, triggered by successful deposit and withdrawal transactions, to provide visual confirmation. These dialogs are managed through the `showDepositModal` and `showWithdrawModal` states.

2. *Assessment.sol*: This Ethereum smart contract, written in Solidity, underpins the functionality of the MetaCrafters ATM. Its key features include:

   - *Constructor*: The contract's constructor initializes the contract, setting the contract owner and an initial balance. The contract owner is the account that deployed the contract.

   - *getBalance*: This view function allows any user to retrieve the current balance of the smart contract.

   - *deposit*: The `deposit` function allows the contract owner to deposit a specified amount of Ether into the contract's balance. It updates the contract's balance and emits a `Deposit` event.

   - *withdraw*: The `withdraw` function enables the contract owner to withdraw a specified amount of Ether from the contract. It performs checks to ensure that the contract has sufficient balance and emits a `Withdraw` event upon successful withdrawal.

3. *DepositModal.js*: This React component plays a role in providing user feedback after a deposit transaction. It displays a modal dialog that informs the user that 1 ETH has been deposited and provides a "CLOSE" button to dismiss the modal. The dialog is triggered by the `showDepositModal` state.

## Usage

Here's how to effectively use the MetaCrafters ATM DApp:

1. *Open the DApp*: Launch the MetaCrafters ATM DApp in your preferred web browser.

2. *Install MetaMask*: If you haven't installed MetaMask, you'll be prompted to do so. Follow the instructions to add MetaMask as a browser extension.

3. *Connect Your Wallet*: Connect your MetaMask wallet to the DApp by clicking the "Connect your Metamask wallet" button.

4. *View Account Details*: Once connected, your Ethereum account address and balance will be displayed.

5. *Deposit Ether*: To deposit 1 Ether into the smart contract, click the "Deposit 1 ETH" button. This triggers a deposit transaction.

6. *Withdraw Ether*: To withdraw 1 Ether from the smart contract, click the "Withdraw 1 ETH" button. This initiates a withdrawal transaction.

7. *Modal Dialogs*: After a successful transaction, a modal dialog will appear, confirming the action. Click the "CLOSE" button to dismiss the modal.

## Important Notes

Here are some crucial points to keep in mind:

- *Educational Use*: The MetaCrafters ATM DApp is designed for educational purposes and uses the Ethereum Rinkeby test network. Avoid using actual Ether on this platform.

- *Smart Contract*: The smart contract provided in the `Assessment.sol` file is a basic example. For production use, rigorous security audits are necessary before deploying a smart contract.

- *MetaMask*: Ensure that you have MetaMask installed and configured in your web browser. The DApp relies on MetaMask to manage Ethereum accounts and transactions.

- *Customization*: The provided code serves as a starting point. You can customize and enhance it to match your project's requirements and extend its functionality.

## Credits

This project is created by ***[Rajat Verma](https://github.com/thewreckingpanda)***.

## License

This project is licensed under the MIT License. For more details, refer to the [LICENSE](LICENSE) file included in the repository.
