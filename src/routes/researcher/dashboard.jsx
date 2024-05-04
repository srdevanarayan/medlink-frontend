import React from 'react'
import {Card,Button,Alert,Label,SearchBar} from "../../components/components";
import  '../../styles/routes.css';
import '../../styles/fonts.css';
import { Link } from "react-router-dom";
import create from "../../../MedLink-Icons/ResearcherDashboard/createnewrequest.png";
import pending from "../../../MedLink-Icons/ResearcherDashboard/viewpendingrequests.png";
import completed from "../../../MedLink-Icons/ResearcherDashboard/viewcompletedrequests.png";


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

function DashboardResearcher() {

    return(
        <div className="column-center" style={{margin:"5em 3em", gap:"3em"}}>
            <div className="row-center" style={{display:"inline-grid",gridTemplateColumns:"auto auto",justifyContent:"center",gap:"3em"}}>
            <Link to="/researcher/createrequest">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={create} height="40px" width="25px" alt="" />
                    </div>
                    <div>
                         <h6 style={textColor}>Create New Requests</h6>
                    </div>
                    </Card>
               </Link>
            </div>
            <div className="row-center" style={{display:"inline-grid",gridTemplateColumns:"auto auto auto",justifyContent:"center",gap:"3em"}}>
               <Link to="/researcher/completed">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={completed} height="40px" width="25px" alt="" />
                    </div>
                    <div style={{width:"120px",display:"flex"}}>
                         <h6 style={textColor}>View Completed Requests</h6>
                    </div>
                    </Card>
               </Link>
               <Link to="/researcher/pending">
                    <Card className="column-center" style={cardstyle}>
                    <div style={textColor}>
                    <img src={pending} height="40px" width="25px" alt="" />
                    </div>
                    <div style={{width:"120px",display:"flex"}}>
                         <h6 style={textColor}>View Pending Requests</h6>
                    </div>
                    </Card>
               </Link>
            </div>
        </div>
    )
}

export default DashboardResearcher