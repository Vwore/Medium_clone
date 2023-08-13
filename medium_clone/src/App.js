import Topics from "./Topics.js";
import Home from "./Home.js"
import Auth from "./Auth.js"
import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Create from "./Create.js"
import Article from "./Article.js"
import { MyProvider } from "./Mycontext.js"
import axios from "axios";
import Myprofile from "./myprofile/Myprofile.js";
import StoryPage from "./story/StoryPage.js";

const App= () => {
      
    return(
        <>
        <MyProvider>
            <Router>
                {/* <Top_bar user={user} setUser={setUser} /> */}
                <Route exact path="/" component={Home} />
                <Route path="/auth" component={Auth} />
                <Route path="/create" component={Create} />
                <Route path="/article" component={Article} />
                <Route path="/topic" component={Topics} />
                <Route path="/myprofile" component={Myprofile}/>
                <Route path="/story" component={StoryPage}/>
            </Router> 
    </MyProvider>
      
    </>    )
}

export default App;
