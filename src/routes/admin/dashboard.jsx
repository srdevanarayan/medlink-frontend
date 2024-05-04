import React from 'react'
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";
import verify from "../../../MedLink-Icons/AdminDashboard/verifyregistration.png";
import addhsopital from "../../../MedLink-Icons/AdminDashboard/addhospital.png";
import blacklist from "../../../MedLink-Icons/AdminDashboard/blacklistaccount.png";
import researcher from "../../../MedLink-Icons/AdminDashboard/researchersrequest.png";


const submitButtonStyle = {
    width:"150%",
    backgroundColor:"rgba(10, 10 , 10, 0.43)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '800',
    fontStyle: 'normal',
    padding:"1em"
  };

  const cardstyle={
     gap:"1em",
     border: "1px solid #10B3A0",
     borderRadius:"2em",
     margin:"0%",
     fontSize: "25px",
     width:"75%",
     height:"75%",
     display:"flex",
     justifyContent:"center"
   }

   const textColor={
     color:"#17EFF4",
     display:"flex",
     justifyContent:"center"
   }

function DashboardAdmin() {

    return (
        <div className="column-center" style={{margin:"5em 3em", gap:"1em"}}>
            <div className="row-center" style={{display:"inline-grid",gridTemplateColumns:"auto auto",justifyContent:"center",gap:"3em"}}>
               <Link to="/verify">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={verify} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>Verify Registration</h6>
                    </div>
                    </Card>
               </Link>
               
               <Link to="/blacklist">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={blacklist} height="40px" width="25px" alt="" />
                    </div>                    <div>
                         <h6 style={textColor}>Blacklist Account</h6>
                    </div>
                    </Card>
               </Link>
               <Link to="/addhospital">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={addhsopital} height="40px" width="25px" alt="" />
                    </div>                    <div>
                         <h6 style={textColor}>Add Hospital</h6>
                    </div>
                    </Card>
               </Link>
               <Link to="/admin/researcher">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={researcher} height="40px" width="25px" alt="" />
                    </div>                    <div>
                         <h6 style={textColor}>Researcher's Request</h6>
                    </div>
                    </Card>
               </Link>
            </div>
            {/* <div className="row-center" style={{display:"flex",justifyContent:"space-evenly"}}>
               <Link to="/appointments">
                    <Button style={submitButtonStyle}>Researchers Requests</Button>
               </Link>
            </div> */}
        </div>
    )
}

export default DashboardAdmin