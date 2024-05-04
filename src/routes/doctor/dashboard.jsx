import React from 'react'
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";
import appointment from "../../../MedLink-Icons/DoctorDashboard/appointment.png"
import patientlog from "../../../MedLink-Icons/DoctorDashboard/patientlogs.png"


const submitButtonStyle = {
    width:"250%",
    backgroundColor:"rgba(10, 10 , 10, 0.43)",
    color:"white",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '800',
    fontStyle: 'normal',
    padding:"1em"
  };

  const textColor = {
    color:"#10B3A0",
    padding:"1rem",
    // margin:"7% 20%",
    // display:"flex",
    justifyContent:"space-evenly"
  }

  const cardstyle={
    // gap:"1em",
    border: "1px solid #10B3A0",
    borderRadius:"2em",
    margin:"0%",
    fontSize: "25px",
    width:"75%",
    height:"75%",
    display:"flex",
    justifyContent:"center"
  }





function DashboardDoctor() {

    return (
        <div className="column-center" style={{margin:"4em 3em", gap:"1em"}}>
                <div className="row-center" style={{display:"inline-grid",gridTemplateColumns:"auto auto",justifyContent:"center",gap:"3em"}}>
                <Link to="/doctor/patientlogs">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={patientlog} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>Patient Logs</h6>
                    </div>
                    </Card>
               </Link>
               <Link to="/doctor/appointment">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={appointment} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>Appointment</h6>
                    </div>
                    </Card>
               </Link>
            </div>
        </div>
    )
}

export default DashboardDoctor