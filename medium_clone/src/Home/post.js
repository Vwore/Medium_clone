import imgs from "../img/image.webp"
import saveforlater from '../img/saveforlater.png'
import style from "./post.css"
import React from "react";
import jwtDecode from 'jwt-decode';
import axios from "axios";
import { useHistory } from "react-router";
const Post = ({data}) => {
    var article=data
  //   {
  //     "id":data[0],
  //     "title":data[1],
  //     "topic": data[2],
  //     "description": data[3],
  //     "author": data[4],
  //     "post_likes": data[5],
  //     "post_comments": data[6],
  //     "minutes_to_read": data[7],
  //     "published_at": data[8],
  //     "created_at": data[9],
  //     "updated_at": data[10],
  //     "user_id": data[11]
  // }
    const article_id=article.id;
    const history=useHistory();
    const jwt=localStorage.getItem('profile');
    var token="";
    const date_article= new Date(article.created_at).toLocaleDateString("en-US", {month: "long", day: "numeric" });

    function saveforlater_click(e){
      console.log('save for later');
    }

    function handle_click(e){
        const encodedId = encodeURIComponent(e.currentTarget.id);
        history.push(`/article?id=${encodedId}`);
    
    }
    function deletepost(e)
    {
        // e.preventdefault();
        console.log('delete');
        // axios.delete(`http://127.0.0.1:3001/delete`,{body: {"id":article_id},headers: {'Authorization': `Bearer ${jwt.auth_token}`}})
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //   console.error(error);
        // });
        }
    const truncateWords = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
        }
        return text;
      };

    return (
            <div className="card mb-4 p-3 medium-card border-white border-bottom">
              <div className="card-header medium-card-header bg-white">
                <p className="mb-0 pb-1 author-info">
                  Written by <span className="author-name">{article.author}</span>
                  <span className="dot-divider">•</span>
                  <span className="post-date">
                    {date_article}
                  </span>
                </p>
              </div>
              <div className="row">
                <div className="col-md-10 pl-0 ml-0">
                  <div className="card-body pt-0" id={article.id} onClick={handle_click}>
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{truncateWords(article.description, 30)}</p>
                  </div>
                  <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                    <div>
                    <span className="badge badge-primary topic-badge ml-2">
                      {article.topic}
                    </span>
                    <small className="text-muted ml-2">
                      {article.minutes_to_read} min read
                    </small>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                  <img src={imgs} className="fixed-image" alt="Blog Post Thumbnail" />
                </div>
              </div>
              <hr className="p-0 m-0"/>
            </div>
    );
};

export default Post;