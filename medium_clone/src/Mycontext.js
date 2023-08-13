// MyContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();

function MyProvider({ children }) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000', // Set your API base URL
    // Add default headers here, including the authorization header
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  const [user, setUser] = useState(false);
  const [posts, setPosts] = useState([]);
    console.log('context ' +user)
//   const x = localStorage.getItem('profile');
//   if(x){setUser(true);}

  const fetchAllPosts = async () => {
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
      }
  ];
  setPosts(response);
  };

  const contextValue = {
    user,
    setUser,
    posts,
    setPosts,
    fetchAllPosts,
    instance
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

export { MyProvider, MyContext };