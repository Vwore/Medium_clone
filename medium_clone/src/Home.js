import Posts from "./posts.js"
import Side_column from "./side_column.js"
import { useEffect, useState } from "react";
import React from "react";
import Top_bar from "./top_bar.js";


const Home=() => {
    const [user, setUser] = useState(false);
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('profile'));
        setUser(data!=null);
    });
    return(
        <div>
            <Top_bar user={user} setUser={setUser} />
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                   <    Posts user={user} setuser={setUser} />
                    </div>
                    <div className="col-3">
                        <Side_column user={user} setuser={setUser}/>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default Home;