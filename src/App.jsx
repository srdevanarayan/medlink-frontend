import React, { useNavigate, useLocation, useState, useEffect } from "react";
import { Navbar } from "./components/components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Intro, Register,Account,Requests,Create,Login } from "./routes/routes";
import { loadBlockchain } from "./blockchain/setup";
import { checkIfUserAlreadyExists, createAccount } from "./blockchain/register";


export function App(props) {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [contract, setContract] = useState();
  const [accounts,setAccounts]=useState([]);
  const [web3,setWeb3]=useState(null);
  const [tempAccount,setTempAcount]=useState(null);

  //componentDidMount
  useEffect(() => {

    loadBlockchain().then(async(eth) => {
      // setContract(eth.contract);
      // setAccounts(eth.accounts);
      setWeb3(eth.web3);
      console.log("contract and registration", contract,accounts,eth);
      const createdAccount=await createAccount(eth.web3);
      const exists=await checkIfUserAlreadyExists("athul",eth.web3,createdAccount.account);
      console.log({createAccount,exists})
      
    })
  
    console.log("component mounted");
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro/>} />
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
          <Route path="/create" element={<Create/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/requests" element={<Requests/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
