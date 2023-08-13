import Post from "./post.js"
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./Mycontext.js";

const Posts = () => {
    const {fetchAllPosts,posts,setPosts,user,curr_cat} = useContext(MyContext);
    const [topic_filter,setTopic_filter]=useState(false);
    function filterpost()
    {
        const x=posts.filter(value => (value.topic === curr_cat));
        setPosts(x);
    }
    useEffect(()=>{
        console.log(curr_cat);
        if(curr_cat=="" || curr_cat=="All post")
        {
            fetchAllPosts();
        }
        else if(curr_cat=="Recommended")
        {
            // fetch recommended post
        }
        else
        {
            fetchAllPosts();
            filterpost();
            // fetch article by topic
            
        }
    },[curr_cat]);
    console.log(posts)
    return (

        <div className="container-fluid ">
        <div className="row pl-5">
            <div className="col-12">
                {
                    posts.map((elemet)=>( 
                    <Post article={elemet}/>))
                }
                {/* <Post article={article} />
                <Post article={article} /> */}
            </div>
            

        </div>
    </div>
    );
}

export default Posts;

// {title,description,topics,created_at,updated_at,likesCount,viewCount,author_id}
// author_id
// : 
// 11
// created_at
// : 
// "2023-08-04T22:05:09.461Z"
// description
// : 
// "4"
// id
// : 
// 15
// likesCount
// : 
// 0
// title
// : 
// "2"
// topics
// : 
// "3"
// updated_at
// : 
// "2023-08-04T22:05:09.461Z"
// viewCount
// : 
// 1