import React,{useState} from "react";
import {Card} from "../../components/components";
import '../../styles/routes.css';
import '../../styles/fonts.css';

const newcardStyle={
    gap:"1em",
    width:"100%",
    display:"flex",
    justifyContent:"center",
}

const History=({children})=>{

const dateForHistory=[
    "date1","date2","date3",
];
const dataPerDate=[
    "dsasdshfddfkjfkjghdfkgjhdfkgjhdfdsasdshfddfkjfkjghdfkgjhdfkgjhdf",
    "sdfsdfsssssssssssssdsasdshfddfkjfkjghdfkgjhdfkgjhdf"
]

    return(
        <div>
            {dateForHistory.map((data,key)=>{
                return(
                    <Card className="column-center" style={newcardStyle}>
                        <h5 style={{display:"flex",justifyContent:"center"}}>{data}</h5>
                        <div className="column-center">
                        {dataPerDate.map((ele,k)=>{
                            return (<p>{k+1}. {ele}</p>);
                        })}
                        </div>
                        
                    </Card>
                )
            })}
        </div>
    )
}


export default History;