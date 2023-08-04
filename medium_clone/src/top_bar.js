import blog from "./img/blog_logo.png"
import styles from "./top_bar.css"
import {useEffect, useState} from "react"
import axios from 'axios';
import React from "react";
import { useHistory } from "react-router-dom";



const Top_bar =({user,setUser}) => {
  const [data,setData]=useState(JSON.parse(localStorage.getItem('profile')));
  // const [user,setUser] = useState(data != null);
  const history=useHistory();
  const [search_value,setSearch_value]=useState("");

  function signin(e){
    console.log('sign in');

      const data={want:true}
        history.push('/auth',data)
    }
    
function signup() {
  console.log('signup');

      const data ={want:false};
      history.push('/auth',data);
}

function gohome(e){
  setData(JSON.parse(localStorage.getItem('profile')));
  setUser(data!=null);
  console.log('gohome');
  e.preventDefault();
  history.push('/')
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
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem('profile')));
    setUser(data!=null);
  },[])
    
    return (
        <div>
        <div className="top-bar">
            <div className="container-fluid">
            <div className="row">
                <div className="col-10 d-flex align-items-center">
                    {/* <div className="row "> */}
                        <img src={blog} className="px-1" alt="logo" style={ {height: 70 } } onClick={gohome} ></img>
                        <div className="text-center pr-4">Blogs</div>
                        <input onChange={(e) => {setSearch_value(e.target.value); console.log(search_value)}} value={search_value} type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                    {/* </div> */}
                </div>
                   {(user)?(<div className="col-2 d-flex align-items-cente"><button className="m-1 btn btn-primary" type="button" onClick={(e)=> { e.preventDefault(); localStorage.clear(); setUser(false);}}>Log out </button>
                    </div>): <div className="col-2 d-flex align-items-cente"><button className="m-1 btn btn-info" type="button" onClick={signin}>sign in </button>
                    <button className="m-1 btn btn-success" type="button" onClick={signup} >sign up</button></div>}

            </div> 
            </div> 
            
        </div>
            <div  style={{height:50}}></div>
        </div>
    );
}

export default Top_bar;