import React, { useNavigate, useLocation, useState, useEffect } from "react";
import { Navbar } from "./components/components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Intro, Register,Account,Requests } from "./routes/routes";
import { loadBlockchain } from "./blockchain/setup";
// import { Tokens,History,Profile } from "./routes/patientapj/patient";
import { AddDoctor,AddDept,PatientLog,Appointments,Slot,DashboardHospital } from "./routes/hospital/hospital";
import { Appointment,FamilyEmrView,FamilyMembers,AppointmentView } from "./routes/patient/patient";
import { Emr,FamilyEmr,EmrShare,EmrView,AppointmentDetails,DashboardPatient } from "./routes/patient/patient"; 


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
          <Route path="/" element={<Intro />} />
          <Route path="/register" element = {<Register
                props={{contract: contract, accounts:accounts}}/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/requests" element={<Requests/>}/>

          {/**  APJ'S  
          <Route path="/history" element={<History/>}/>
          <Route path="/tokens" element={<Tokens/>}/> 
          <Route path="/profile" element={<Profile/>}/>*/}

          {/** HOSPITAL ROUTING */}
          <Route path="/hospital/dashboard" element={<DashboardHospital/>}/>
          <Route path="/adddoctor" element={<AddDoctor/>}/>
          <Route path="/adddepartment" element={<AddDept/>}/>
          <Route path="/patientlog" element={<PatientLog/>}/>
          <Route path="/appointments" element={<Appointments/>}/>
          <Route path="/appointments/slot" element={<Slot/>}/>

          {/** PATIENT ROUTING */}
          <Route path="/patient/dashboard" element={<DashboardPatient/>}/>
          <Route path="/familymembers" element={<FamilyMembers/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          <Route path="/appointment/view" element={<AppointmentView/>}/>
          <Route path="/familymembers/emr" element={<FamilyEmr/>}/>
          <Route path="/familymembers/emr/view" element={<FamilyEmrView/>}/>
          <Route path="/emr" element={<Emr/>}/>
          <Route path="/emr/share" element={<EmrShare/>}/>
          <Route path="/emr/view" element={<EmrView/>}/>
          <Route path="/appointment/details" element={<AppointmentDetails/>}/>

          {/** DOCTOR ROUTING */}


          {/** ADMIN ROUTING */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
