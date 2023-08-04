import imgs from "./img/image.webp"
import style from "./post.css"
import React from "react";
const Post = ({article}) => {

    function handle_click(e){
        console.log('post 1');
    }
    const truncateWords = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
        }
        return text;
      };

    return (
        <div className="card mb-4 p-3" id={article.id}>
            <div className="row">
                    <div className="col-md-10" onClick={handle_click}>
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">  {truncateWords(article.description,30)}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Written by: {article.author_id}</small>
                                <span className="mr-2"></span>
                                <span className="badge badge-primary">{article.topic}</span>
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