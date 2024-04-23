import React, { useNavigate, useLocation, useState, useEffect } from "react";
import { Navbar } from "./components/components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Intro, Register,Account,Requests,Create,Login } from "./routes/routes";
import { loadBlockchain } from "./blockchain/setup";

export function App(props) {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [contract, setContract] = useState();
  const [accounts,setAccounts]=useState([]);

  //componentDidMount
  useEffect(() => {
    loadBlockchain().then((eth) => {
      setContract(eth.contract);
      setAccounts(eth.accounts);
      console.log("contract and registration", contract,accounts);
    });

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
                  contract: contract,
                  accounts:accounts
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
