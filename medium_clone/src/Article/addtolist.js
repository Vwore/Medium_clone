import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { MyContext } from "../Mycontext";
const Listdrop=({articleid,setislist}) => {
    const [selectedValue, setSelectedValue] = useState('default');
    const {list,updatelist}=useContext(MyContext);
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      updatelist(list[event.target.value][2],articleid);
      setislist(false)
    };

    console.log(list);
    return (
        <select value={selectedValue} onChange={handleChange}>
            <option value='default'>select an option</option>
            {list.map((element,index)=> (
                <option value={index}>{element[0]}</option>
            ))}
        </select>
    );
  
}

export default Listdrop;