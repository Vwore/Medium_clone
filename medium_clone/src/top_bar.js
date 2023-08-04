import blog from "./img/blog_logo.png"
import styles from "./top_bar.css"
import {useState} from "react"
import axios from 'axios';
import React from "react";


const Top_bar =() => {
    function signin(e){
        axios.post('http://127.0.0.1:3001/userlogin', {
            "email" : "car@gmail.com",
            "password": "newpassword",
  
    })
        .then((response) => {
          // Handle the response data here
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors here
          console.error('error aayaa '+error);
        });
    }
    
function checking(e) {
    axios.post('http://127.0.0.1:3001/create',{
        "title": "vanshaj",
        "description": "dsodsdjopasjds",
        "topics": "Tech"
    } ,{
        headers: {
          'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMCwiZXhwIjoxNjkxMjQxNjAyfQ.xc32n4e7nf9poianzGnRY7TYBIob_Rw15LuIk9hnXk4'}` // Include the token as a Bearer token in the header
        }
      })
        .then(response => {
          // Handle the API response here
          console.log(response.data);
        })
        .catch(error => {
          // Handle any errors that occurred during the API request
          console.error('Error:', error);
        });
      
}

function getdata(){
    axios.get('http://127.0.0.1:3001/articlebylogeduser', {
        headers: {
          'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMCwiZXhwIjoxNjkxMjQxNjAyfQ.xc32n4e7nf9poianzGnRY7TYBIob_Rw15LuIk9hnXk4'}` // Include the token as a Bearer token in the header
        }
      })
        .then(response => {
          // Handle the API response here
          console.log(response.data);
        })
        .catch(error => {
          // Handle any errors that occurred during the API request
          console.error('Error:', error);
        });
}
    const [search_value,setSearch_value]=useState("");
    return (
        <div>
        <div className="top-bar">
            <div className="container-fluid">
            <div className="row">
                <div className="col-10 d-flex align-items-center">
                    {/* <div className="row "> */}
                        <img src={blog} className="px-1" alt="logo" style={ {height: 70 }} ></img>
                        <div className="text-center pr-4">Blogs</div>
                        <input onChange={(e) => {setSearch_value(e.target.value); console.log(search_value)}} value={search_value}></input>
                    {/* </div> */}
                </div>
                <div className="col-2 d-flex align-items-cente">
                    <button className="m-1" onClick={signin}>sign in </button>
                    <button className="m-1" onClick={checking} >sign up</button>
                    <button className="m-1" onClick={getdata} >getallbyuser</button>

                </div>
            </div> 
            </div>
            
        </div>
            <div  style={{height:50}}></div>
        </div>
    );
}

export default Top_bar;