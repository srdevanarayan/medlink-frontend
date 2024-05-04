import React from "react";
import {Card,Button} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";
import adddoctors from "../../../MedLink-Icons/HospitalDashboard/adddoctors.png"
import adddept from "../../../MedLink-Icons/HospitalDashboard/adddepartments.png"
import slots from "../../../MedLink-Icons/HospitalDashboard/manageappointmentslots.png"
import patientlogs from "../../../MedLink-Icons/HospitalDashboard/patientlogs.png"
import view from "../../../MedLink-Icons/HospitalDashboard/viewappointments.png"


const submitButtonStyle={
    width:"150%",
    backgroundColor:"rgba(10, 10, 10, 0.43)",
    color:"#10B3A0",
    fontFamily: "'PT Sans', sans-serif",
    fontWeight: '400',
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
     justifyContent:"center",
     width:"100px"
   }



export const DashboardHospital=({children})=>{
    return(
        <div className="column-center" style={{margin:"5em 3em", gap:"3em"}}>
            <div className="row-center" style={{display:"inline-grid",gridTemplateColumns:"auto auto",justifyContent:"center",gap:"3em"}}>
            <Link to="/adddoctor">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={adddoctors} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>Add Doctors</h6>
                    </div>
                    </Card>
               </Link>
               <Link to="/adddepartment">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={adddept} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>Add Departments</h6>
                    </div>
                    </Card>
               </Link>
            </div>
            <div className="row-center" style={{display:"inline-grid",gridTemplateColumns:"auto auto auto",justifyContent:"center",gap:"3em"}}>
            <Link to="/patientlog">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={patientlogs} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>Patient Logs</h6>
                    </div>
                    </Card>
               </Link>
               <Link to="/appointments">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={view} height="40px" width="25px" alt="" />
                    </div>
                    <div style={{width:"50px",display:"flex"}}>
                         <h6 style={textColor}>View Appointments</h6>
                    </div>
                    </Card>
               </Link>
               <Link to="/appointments/slot">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={slots} height="40px" width="25px" alt="" />
                    </div>
                    <div style={{width:"50px",display:"flex"}}>
                         <h6 style={textColor}>Manage Appointment Slots</h6>
                    </div>
                    </Card>
               </Link>
            </div>
        </div>
    )
}