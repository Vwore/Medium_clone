// MyContext.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();

function MyProvider({ children }) {

  const response = [
    {
        "id": 1,
        "title": "newwww titlee updated",
        "topic": "new topic",
        "description": "Cirque du Soleil is what happens when you give circus people a budge Ka is what happens when you challenge them to tell a story",
        "author": "deepak",
        "post_likes": 0,
        "post_comments": 0,
        "minutes_to_read": 1,
        "published_at": null,
        "created_at": "2023-08-12T20:02:34.660Z",
        "updated_at": "2023-08-12T20:02:34.732Z",
        "user_id": 4
    },
    {
        "id": 2,
        "title": "newwww titlee updatedxs",
        "topic": "new topicxsxsx",
        "description": "new descxsxs",
        "author": "deepakxsssx",
        "post_likes": 0,
        "post_comments": 0,
        "minutes_to_read": 1,
        "published_at": null,
        "created_at": "2023-08-13T07:24:38.774Z",
        "updated_at": "2023-08-13T07:24:38.940Z",
        "user_id": 4
    },
    {
      "id": 3,
      "title": "newwww titlee updated",
      "topic": "gaming",
      "description": "Cirque du Soleil is what happens when you give circus people a budge Ka is what happens when you challenge them to tell a story",
      "author": "deepak",
      "post_likes": 0,
      "post_comments": 0,
      "minutes_to_read": 1,
      "published_at": null,
      "created_at": "2023-08-12T20:02:34.660Z",
      "updated_at": "2023-08-12T20:02:34.732Z",
      "user_id": 4
  }
];

  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000', // Set your API base URL
    // Add default headers here, including the authorization header
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const [user, setUser] = useState(false);
  const [posts, setPosts] = useState([]);
  const [profile,setProfile]= useState(false);
  const [curr_cat,setCurr_cat]=useState("");

  // catergory will be added in fetchallpost
  const [catergory,setCatergory]=useState([]);
  console.log('context ' +user)
  // const x = localStorage.getItem('profile');
  // if(x){setUser(true);}

  const fetchAllPosts = async () => {
    console.log('fetch');
    const x=localStorage.getItem('article');
    const response=JSON.parse(x);
    setPosts(response);
  
  };

  const contextValue = {
    user,
    setUser,
    posts,
    setPosts,
    fetchAllPosts,
    instance,
    profile,
    setProfile,
    catergory,
    setCatergory,
    curr_cat,
    setCurr_cat,
  };

  useEffect(()=> {
    setUser((localStorage.getItem('curuser'))!='null')   
    console.log(localStorage.getItem('curuser')!='null');  
    var x=[];
    const data=JSON.parse(localStorage.getItem('article'))
    data.map((element)=>{  
      x.push(element[2])}
      );
    setCatergory([...x]);
    },[]);

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export { MyProvider, MyContext };
