import blog from "./img/blog_logo.png"
import styles from "./top_bar.css"
import {useContext, useEffect, useState} from "react"
import axios from 'axios';
import React from "react";
import { useHistory } from "react-router-dom";
import { MyContext } from "./Mycontext";
import DropdownButton from "./dropdown";
import Posts from "./posts";


const Top_bar =() => {
  const [data,setData]=useState(localStorage.getItem('profile'));
  const history=useHistory();
  const [search_value,setSearch_value]=useState("");

  const {user,setUser,fetchAllPosts,posts,setPosts,instance,catergory,getlist} = useContext(MyContext);

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
  setData(localStorage.getItem('profile'));
  fetchAllPosts();
  console.log('gohome');
  e.preventDefault();
  console.log(catergory);

  // instance.get('/articles').then(response=> {console.log(response)}).then(response=> console.log(response)).catch(error => console.log(error));
  // instance.get('/top_posts').then(response=> {console.log(response)}).then(response=> console.log(response)).catch(error => console.log(error));
  // instance.get('/profiles/my_profile').then(response=> {console.log(response)}).then(response=> console.log(response)).catch(error => console.log(error));
  getlist();

  history.push('/')
}

function handle_search(e)
{
  const search=(e.target.value).toLowerCase();
  setSearch_value(e.target.value);  
  const data=JSON.parse(localStorage.getItem('article'));
  const data2=data.filter((value)=>(((value[1].toLowerCase()).includes(search)) || ((value[2].toLowerCase()).includes(search)) || ((value[3].toLowerCase()).includes(search)) || ((value[4].toLowerCase()).includes(search))));
  setPosts(data2);
}

// function mypost(){
//     axios.get('http://127.0.0.1:3001/articlebylogeduser', {
//         headers: {
//           'Authorization': `Bearer ${data.auth_token}` // Include the token as a Bearer token in the header
//         }
//       } )
//         .then(response => {
//           // Handle the API response here
//           console.log('mypost');
//           setPosts(response.data);
//         })
//         .catch(error => {
//           // Handle any errors that occurred during the API request
//           console.error('Error:', error);
//         });
//   }
  useEffect(()=>{
    if(localStorage.getItem('profile')){
      setUser(true);
    }
  },[])
    
    return (
        <div>
        <div className="top-bar">
            <div className="container-fluid">
            <div className="row">
                <div className="col-9 d-flex align-items-center">
                        <img src={blog} className="px-1" alt="logo" style={ {height: 70 } } onClick={gohome} ></img>
                        <div className="text-center text-light fw-bold fs-5 pr-4">Blogs</div>
                        <input onChange={handle_search} value={search_value} type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                        <button className="btn mx-3" onClick={()=> { history.push('/topic') }}> Explore topics</button>
                        <button className="btn mx-3" onClick={()=> { history.push('/subscribe') }}> Subscribe</button>
                </div>
                   {(user)?(
                   <div className="col-3 d-flex align-items-center justify-content-center">
                    <DropdownButton />                         
                    </div>): 
                    <div className="col-2 d-flex justify-content-end">
                        <button className="m-1 btn btn-info" type="button" onClick={signin}>sign in </button>
                        <button className="m-1 btn btn-success" type="button" onClick={signup} >sign up</button>
                    </div>}

            </div> 
            </div> 
            
        </div>
            <div  style={{height:50}}></div>
        </div>
    );
}

export default Top_bar;