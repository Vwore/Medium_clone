import Post from "./post.js"

const Posts = ({user,setuser}) => {
    const users=user;
    console.log(users);
    setuser('hulk');
    console.log(user);
    return (
        // <div class="container-fluid">
        //     <div class="row">
        //     <div class="rounded col-md-8 bg-secondary ">
        //         <Post />
        //     </div>
        //     </div>
        //     </div>
        <div className="container-fluid ">
        <div className="row pl-5">
            <div className="col-12">
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