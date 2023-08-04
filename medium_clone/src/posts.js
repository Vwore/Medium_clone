import Post from "./post.js"
import React from "react";

const Posts = ({user,setuser}) => {
    const article ={id:1, title:"Could Gene-Edited Hens Stop the Great Chicken Massacre", description:"Calico cats have a distinctive genetic trait that determines their coat colors. They are known for their striking appearance and unique personalities. Calicos are not a specific cat breed. They are members of domestic cat breeds with unique tri-color coats.", topic:"protlife",created_at:"2023-05-04",updated_at:"2023-05-04",viewCount:25,Likescount:12,author_id:"vanshaj"};
    return (

        <div className="container-fluid ">
        <div className="row pl-5">
            <div className="col-12">
                {
                    Object.entries(article).forEach(([key, value]) => {
                        console.log(key, value);
                    })
                }
                <Post article={article} />
                <Post article={article} />
                <Post article={article} />
                <Post article={article} />
                <Post article={article} />
                
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