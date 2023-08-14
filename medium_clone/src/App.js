import Topics from "./Topics.js";
import Home from "./Home.js"
import Auth from "./Auth.js"
import React from "react"
import { BrowserRouter as Router, Route,Switch, useLocation } from 'react-router-dom';
import Create from "./Create.js"
import Article from "./Article.js"
import { MyProvider } from "./Mycontext.js"
import axios from "axios";
import Myprofile from "./myprofile/Myprofile.js";
import StoryPage from "./story/StoryPage.js";
import RazorpayComponent from "./razorpay/RazorpayComponent.js";
import "./transitions.css"



const App= () => {     
    

    return(
        <>
        <MyProvider>
        <Router>
                <RoutesWithTransitions />

            </Router> 
    </MyProvider>
      
    </>    )
}

const RoutesWithTransitions = () => {
    const location = useLocation();
  
    return (
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/create" component={Create} />
          <Route path="/article" component={Article} />
          <Route path="/topic" component={Topics} />
          <Route path="/myprofile" component={Myprofile} />
          <Route path="/story" component={StoryPage} />
          <Route path="/payment" component={RazorpayComponent} />
        </Switch>

    );
  };
  

export default App;
