import Posts from "./posts.js"
import Side_column from "./side_column.js"
import { useContext, useEffect } from "react";
import React from "react";
import Top_bar from "./top_bar.js";
import { MyContext } from "./Mycontext.js";
import axios from "axios";
import Tabs from "./Tabs.js";

const Home=() => {
  const {user,setUser} =useContext(MyContext);
    const {posts, setPosts,fetchAllPosts,instance} = useContext(MyContext);
    
      
    useEffect(()=>{
        const data=localStorage.getItem('profile');
        setUser(data!=null);
        // fetchAllPosts();
        
    },[]);
    
    return(
        <div>
            <Top_bar user={user} setUser={setUser} post_data={posts} setPost_data={setPosts} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                    <Tabs />
                   {/* <    Posts user={user} setuser={setUser} post_data={posts}  /> */}
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