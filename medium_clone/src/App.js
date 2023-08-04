import Top_bar from "./top_bar.js"
import Posts from "./posts.js"
import Home from "./Home.js"
import Auth from "./Auth.js"
import { useState } from "react"
import Side_column from "./side_column.js"
import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App= () => {
    const [user, setUser] = useState("car");
    return(
        <>
    <Router>
        <Top_bar />
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
    </Router> 
      
    </>    )
}

export default App;
