import Posts from "./posts.js"
import Side_column from "./side_column.js"
import { useEffect, useState } from "react";
import React from "react";
import Top_bar from "./top_bar.js";
import axios from "axios";


const Home=() => {
    const [user, setUser] = useState(false);
    const [data,setData]=useState([]);
    const fetchAllPosts = async () => {
        try {
          const token = JSON.parse(localStorage.getItem("profile")).auth_token;
          const response = await axios.get("http://127.0.0.1:3001", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setData(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('profile'));
        setUser(data!=null);
    });
    
    return(
        <div>
            <Top_bar user={user} setUser={setUser} post_data={data} setPost_data={setData} fetchAllpost={fetchAllPosts}/>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                   <    Posts user={user} setuser={setUser} post_data={data} fetchallpost={fetchAllPosts} />
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