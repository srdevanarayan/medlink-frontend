import React, { useState } from "react";
import Select from "react-select";

export const Dropdown=({options,style,selectedValue,defaultValue})=>{
    const [selectedOption,SetOption]=useState();
    const defaultOptions=[{value:'select',lable:'Select'}]
    console.log(options)
    style={style}
    return (<Select placeholder={defaultValue} options={options==undefined?defaultOptions:options} onChange={(e)=>{console.log(e)}}/>);
}