// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.18;

// File for handling Transactions


//contract is equivalent to class
contract Transactions{
  uint256 transactionCount;


//event may be reffered equivalent to function
  event Transfer(address from , address reciever, uint amount, string message, uint256 timeStamp, string keywords);


//Struct eqv obj
  struct TransferStruct{
    address sender;
    address reciever;
    uint amount;
    string message;
    uint256 timeStamp;
    string keywords;
  }

  TransferStruct[] transactions; // transctions is an array of object transferSTruct



//This function is public with no return type
  function addToBlockchain(address payable reciever, uint amount ,string memory message, string memory keywords) public{
    //first increase transaction count
    transactionCount += 1;
    // push transferobject to array
    transactions.push(TransferStruct(msg.sender,reciever,amount,message, block.timestamp,keywords));

    // actually make transaction
    emit Transfer(msg.sender,reciever,amount,message, block.timestamp,keywords);

  }


//This function is public with a array return type
  function getAllTransactions() public view returns (TransferStruct[] memory){

  }


//This function is public with a int256 return type
  function getTransactionCount() public view returns (uint256){

  }


}
