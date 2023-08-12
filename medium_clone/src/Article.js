import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
const Article=({id})=>{
    const location = useLocation();
    const state =location.state;
    const local=JSON.parse(localStorage.getItem('profile'));
    const [data,setData]=useState(null);
    let token;

  useEffect(()=> {
    if(local) {
      token = local.auth_token;
      console.log('token is '+ token+' STATE IS '+state);
      axios.post("http://127.0.0.1:3001/byid",{
        "id": state
      } ,{
          headers: {
            'Authorization': `Bearer ${token}`,
          }
          
        }).then(response => {
          console.log(response);
          setData(response.data);
          console.log(data);
        }).catch(error => {
          console.error(error);
        });
  }
  },[]);
  
    return(<><h1>{data && data.title}</h1>
    <h3>{data && data.description}</h3></>);
}

export default Article;