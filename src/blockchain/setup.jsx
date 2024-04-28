import Web3 from "web3";
import { useState } from "react";

const ADDRESS = "0x94e681e74A30D4862a22C412d8992cb1B440d86A";
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
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  const accounts = await web3.eth.getAccounts();

  console.log({ accounts });
  const _registrations = new web3.eth.Contract(ABI, ADDRESS);
  return {contract:_registrations,accounts:accounts};
}

export async function register(contract,account, details) {
  console.log("contract register",contract,account,details)
  const taskCount = await contract.methods.register(
    details.name,
    details.dob,
    details.place,
    details.sex,
    details.aadhaar
  ).send({ from: account })
  .once('receipt', (receipt) => {
    console.log(receipt)
  });

  console.log(taskCount);
}
