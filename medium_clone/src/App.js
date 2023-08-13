
import Home from "./Home.js"
import Auth from "./Auth.js"
import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Create from "./Create.js"
import Article from "./Article.js"
import { MyProvider } from "./Mycontext.js"
import axios from "axios";


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
            </Router> 
    </MyProvider>
      
    </>    )
}

export default App;
