import imgs from "./img/image.webp"
import style from "./post.css"
import React from "react";
const Post = () => {

    function handle_click(e){
        console.log('post 1');
    }

    return (
        <div className="card mb-4 p-3" >
            <div className="row">
                    <div className="col-md-10" onClick={handle_click}>
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title</h5>
                                <p className="card-text">Brief description of the blog post content goes here. Brief description of the blog post content goes here.Brief description of the blog post content goes here.Brief description of the blog post content goes here.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Written by: John Doe</small>
                                <span className="mr-2"></span>
                                <span className="badge badge-primary">Category</span>
                            </div>
                    </div>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <img src={imgs} className="fixed-image" alt="Blog Post Thumbnail" />
                </div>
            </div>
        </div>
    );
};

export default Post;