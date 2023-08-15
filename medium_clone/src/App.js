import Topics from "./Topics.js";
import Home from "./Home.js"
import Auth from "./Auth.js"
import React, { useEffect } from "react"
import { BrowserRouter as Router, Route,Switch, useLocation } from 'react-router-dom';
import Create from "./Create.js"
import Article from "./Article.js"
import { MyProvider } from "./Mycontext.js"
import axios from "axios";
import Myprofile from "./myprofile/Myprofile.js";
import StoryPage from "./story/StoryPage.js";
import RazorpayComponent from "./razorpay/RazorpayComponent.js";
import "./transitions.css"
import Subscription from "./razorpay/Subscription.js";

const response = [
    [
         1,
        "newwww titlee updated",
        "new topic",
        "Cirque du Soleil is what happens when you give circus people a budge Ka is what happens when you challenge them to tell a story",
        "deepak",
        0,
        0,
        1,
        null,
        "2023-08-12T20:02:34.660Z",
        "2023-08-12T20:02:34.732Z",
        4   
    ],
    [
        2,
       "newwww titlee updatedxs",
       "new topicxsxsx",
       "new descxsxs",
        "deepakxsssx",
         0,
        0,
        1,
        null,
        "2023-08-13T07:24:38.774Z",
        "2023-08-13T07:24:38.940Z",
         4
    
    ],
    [
      3,
    "newwww titlee updated",
    "gaming",
    "Cirque du Soleil is what happens when you give circus people a budge Ka is what happens when you challenge them to tell a story",
    "deepak",
        0,
      0,
      1,
      null,
      "2023-08-12T20:02:34.660Z",
      "2023-08-12T20:02:34.732Z",
      4
    ]
   
];

const userlist=[
  [
    1,
    'vanshaj',
    'vanshaj@gmail.com',
    '12345',
    'avid reader, dancer',
    []
  ]
]

const list=[
  [1,1,'saved',[1]]
]

const App= () => {     
    
    useEffect(()=> {
        // localStorage.setItem('article',JSON.stringify(response));
        localStorage.setItem('users',JSON.stringify(userlist));
        // localStorage.setItem('curuser',null);
        // localStorage.setItem('draft','[]');
        // localStorage.setItem('list',JSON.stringify(list));

    },[]);
    return(
        <>
        <MyProvider>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/create" component={Create} />
          <Route path="/article" component={Article} />
          <Route path="/topic" component={Topics} />
          <Route path="/myprofile" component={Myprofile} />
          <Route path="/story" component={StoryPage} />
          <Route path="/payment" component={RazorpayComponent} />
          <Route path="/subscribe" component={Subscription} />
        </Router> 
    </MyProvider>
      
    </>    )
}
  
export default App;
