import React, { useNavigate, useLocation, useState, useEffect } from "react";
import { Navbar } from "./components/components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Intro, Register,Account,Requests,Create,Login } from "./routes/routes";
import { loadBlockchain,fetchAccount } from "./blockchain/setup";
import { checkIfUserAlreadyExists, createAccount } from "./blockchain/registerUser";
import { BeforeSignIn,DoctorProfile,User } from "./profiles/profiles";



export function App(props) {
 
  const [account,setAccount]=useState({
    address:"",
    type:""
  });
  const [web3,setWeb3]=useState(null);
  const [options,setOptions]=useState([]);

 
  //componentDidMount
  useEffect(() => {
    initialize();
    console.log("component mounted");
  }, []);

  async function initialize(){
    let account={
      type:"",
      address:""
    };
    const web3=await loadBlockchain();
   
    if(web3!=null){
      account=await fetchAccount("","",web3);
      setWeb3(web3);
    }
    setAccount(account);
    //depending on the the accounts split
    setOptions([
      <BeforeSignIn/>,
      <DoctorProfile account={account}/>,
      <User account={account}/>
    ]);
  }

  function getCurrentPage(options,type){
    console.log({options ,type})
    if(type=="user"){
      return options[2];
    }
    else if(type=="doctor"){
      return options[1];
    }
    else if(type=="pharmacist"){
      return options[0];//####
    }
    else if(type=="receptionist"){
      return options[0];//#####
    }
    else{
      return options[0];
    }
  } 

  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={getCurrentPage(options,account.type)} />
          <Route
            path="/register"
            element={
              <Register
                props={{
                  contract: null,
                  accounts:null
                }}
              />
            }
          />
          <Route path="/login" element={<Login/>}/>
          <Route path="/create" element={<Create web3={web3}/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/requests" element={<Requests/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
