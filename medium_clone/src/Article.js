import React from "react";
import { useLocation } from "react-router";
import axios from "axios";
const Article=({id})=>{
    const location = useLocation();
    const state =location.state;
    const token=JSON.parse(localStorage.getItem('profile')).auth_token;
    axios.get("http://127.0.0.1:3001/byid", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body:{"id": state}
          }).then(response => {
            console.log(response);
          }).catch(error => {
            console.error(error);
          });

    return(<>{state}</>);
}

export default Article;