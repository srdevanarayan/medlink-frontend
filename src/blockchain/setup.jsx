import Web3 from "web3";
import { useState } from "react";

const ADDRESS = "0xd34ff8CC35A78a2B192eb7b35D7318070b2f13DD";
const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newStatus",
        type: "string",
      },
    ],
    name: "RegistrationStatusChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_dob",
        type: "string",
      },
      {
        internalType: "string",
        name: "_place",
        type: "string",
      },
      {
        internalType: "string",
        name: "_sex",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_aadhaarNumber",
        type: "uint256",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getUnverifiedAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "verifyRegistration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "rejectRegistration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export async function loadBlockchain() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545", null, {
    vmErrorsOptions: {
      onVmError: (error) => {
        console.error("VM Error:", error.message);
        console.error("Revert Reason:", error.reason);
      },
    },
  });
  const accounts = await web3.eth.getAccounts();

  console.log({ accounts });
  const _registrations = new web3.eth.Contract(ABI, ADDRESS);
  return { contract: _registrations, accounts: accounts };
}

// export async function register(contract, account, details) {
//   console.log("contract register", contract, account, details);
//   const taskCount = await contract.methods
//     .register(
//       details.name,
//       details.dob,
//       details.place,
//       details.sex,
//       details.aadhaar
//     )
//     .send({ from: account })
//     .once("receipt", (receipt) => {
//       console.log(receipt);
//     });

//   console.log(taskCount);
// }
export async function register(contract, account, details) {
  try {
    console.log("contract register", contract, account, details);

    // Convert Aadhaar number to number type
    const aadhaarNumber = parseInt(details.aadhaar, 10); // Assuming Aadhaar number is represented as a string

    // Check data types of arguments
    console.log("Name data type:", typeof details.name);
    console.log("DOB data type:", typeof details.dob);
    console.log("Place data type:", typeof details.place);
    console.log("Sex data type:", typeof details.sex);
    console.log("Aadhaar data type:", typeof aadhaarNumber); // Check Aadhaar number data type

    const transactionReceipt = await contract.methods
      .register(
        details.name,
        details.dob,
        details.place,
        details.sex,
        aadhaarNumber // Pass Aadhaar number as a number type
      )
      .send({ from: account, gas: 3000000 });

    console.log("Transaction receipt:", transactionReceipt);
  } catch (error) {
    console.error("Error registering:", error);
  }
}
