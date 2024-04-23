import React, { useState } from "react";
import Select from "react-select";

export const Dropdown=({options,style,selectedValue})=>{
    const [selectedOption,SetOption]=useState();
    const defaultOptions=[{value:'select',lable:'Select'}]
    console.log(options)
    return (<Select options={options==undefined?defaultOptions:options} onChange={(e)=>{console.log(e)}}/>);
}