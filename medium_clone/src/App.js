import Top_bar from "./top_bar.js"
import Posts from "./posts.js"
import Home from "./Home.js"
import Auth from "./Auth.js"
import { useState } from "react"
import Side_column from "./side_column.js"
import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Create from "./Create.js"
import Article from "./Article.js"


const App= () => {
    const data=JSON.parse(localStorage.getItem('profile'));
    const [user,setUser] = useState(data != null);

    return(
        <>
    <Router>
        {/* <Top_bar user={user} setUser={setUser} /> */}
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/create" component={Create} />
        <Route path="/article" component={Article} />
    </Router> 
      
    </>    )
}

export default App;
