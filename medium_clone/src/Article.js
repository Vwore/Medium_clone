// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router";
// import axios from "axios";
// const Article=({id})=>{
//     const location = useLocation();
//     const state =location.state;
//     const local=JSON.parse(localStorage.getItem('profile'));
//     const [data,setData]=useState(null);
//     let token;

//   useEffect(()=> {
//     if(local) {
//       token = local.auth_token;
//       console.log('token is '+ token+' STATE IS '+state);
//       axios.post("http://127.0.0.1:3001/byid",{
//         "id": state
//       } ,{
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           }
          
//         }).then(response => {
//           console.log(response);
//           setData(response.data);
//           console.log(data);
//         }).catch(error => {
//           console.error(error);
//         });
//   }
//   },[]);
  
//     return(<><h1>{data && data.title}</h1>
//     <h3>{data && data.description}</h3></>);
// }

// export default Article;

import React from 'react';

const Article = () => {
  const article={"id": 1,
  "title": "Spectacle and Story — Thoughts on Cirque du Soleil’s Ka",
  "topic": "new topic",
  "description": "Cirque du Soleil is what happens when you give circus people a budge Ka is what happens when you challenge them to tell a story.  They started in Baie-Sant-Paul, Quebec, with a street show, in the early eighties, and are now a global phenomenon.In Vegas, Cirque du Soleil does six different shows in purpose-built theaters. They include a homage to the Beatles, a homage to Michael Jackson, Mad Apple in New York, New York, and of course, the original Mystere. A friend advised us to choose O or Ka, and we picked Ka because it was the closest to our hotel. The Ka theater is tucked away in the back of the MGM Grand resort, behind the casino floor.It has been running since 2005 and on the topic of budget? It has the distinction of being the most expensive theatrical production in history. It also has the sad distinction of the first on stage fatality in Cirque’s history. In 2013, during the final battle scene, a 31-year-old acrobat named Sarah Guillot-Gayard, fell to her death when her safety line failed. The accident was investigated and presumably precautions were taken. There have been no other deaths. Injuries, however, come with the territory of circus work.Its worth remembering that these performers are doing something dangerous, five days a week, twice a night.",
  "author": "deepak",
  "post_likes": 0,
  "post_comments": 0,
  "minutes_to_read": 1,
  "published_at": null,
  "created_at": "2023-08-12T20:02:34.660Z",
  "updated_at": "2023-08-12T20:02:34.732Z",
  "user_id": 4}
  const { title, topic, description, author, post_likes, post_comments, minutes_to_read, created_at } = article;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title" style={{fontSize:40}}>{title}</h1>
          <div className='d-flex'>
          <span className='m-2'>by:{author}</span>
          <button className='btn bg-grey-500 bg-opacity-1 btn-sm'>Follow</button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="badge bg-secondary m-2 " >{topic}</span>
              <span className="m-2">{new Date(created_at).toLocaleDateString()}</span>
              <span className="m-2">{minutes_to_read} min read</span>
            </div>
            <hr></hr>
          </div>
          <p className="card-text mt-3">{description}</p>
          <div>
              <span className="m-3 text-muted rounded-pill">{post_likes} likes</span>
              <span className="text-muted">{post_comments} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Article;