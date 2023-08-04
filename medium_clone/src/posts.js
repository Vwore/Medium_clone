import Post from "./post.js"
import React from "react";

const Posts = ({user,setuser}) => {
    const article ={1:["Could Gene-Edited Hens Stop the Great Chicken Massacre", "Researchers have designed a light-activated genetic kill switch to prevent male chicks from hatching", "since they have no economic value,protlife","2023-05-04","2023-05-04","prot-life",25,12,"vanshaj"],2:["Could Gene-Edited Hens Stop the Great Chicken Massacre", "Researchers have designed a light-activated genetic kill switch to prevent male chicks from hatching", "since they have no economic value,protlife","2023-05-04","2023-05-04","prot-life",25,12,"vanshaj"]};
    const users=user;
    console.log(users);
    setuser('hulk');
    console.log(user);
    return (

        <div className="container-fluid ">
        <div className="row pl-5">
            <div className="col-12">
                {
                    Object.entries(article).forEach(([key, value]) => {
                        // console.log(key, value);
                    })
                }
                <Post />
                <Post />
                <Post />
            </div>
           

          

        </div>
    </div>
    );
}

export default Posts;

// {title,description,topic,created_at,updated_at,topics,likesCount,viewCount,authoir_id,img}