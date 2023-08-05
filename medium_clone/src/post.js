import imgs from "./img/image.webp"
import style from "./post.css"
import React from "react";
import jwtDecode from 'jwt-decode';
import axios from "axios";
import { useHistory } from "react-router";
const Post = ({article}) => {
    const history=useHistory();
    const jwt=JSON.parse(localStorage.getItem('profile'));
    var token="";
    if(jwt){
        token=jwtDecode(jwt.auth_token);
        console.log(token);
    }

    function handle_click(e){
        console.log(e.currentTarget.id);
        const data =e.currentTarget.id;
        history.push('/article',data)
    }
    function deletepost(e)
    {
        axios.delete(`http://127.0.0.1:3001/delete`,{body: {"id":article.id},headers: {Authorization: `Bearer ${token}`}})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
          }
    const truncateWords = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
        }
        return text;
      };

    return (
        <div className="card mb-4 p-3" id={article.id} onClick={handle_click}>
            <div className="row">
                    <div className="col-md-10" >
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">  {truncateWords(article.description,30)}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Written by: {article.author_id}</small>
                                <span className="mr-2"></span>
                                <span className="badge badge-primary">{article.topics}</span>
                                {(token.user_id==article.author_id)?(<button className="btn ml-2" onClick={deletepost}>delete</button>):(<></>)}
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