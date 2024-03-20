import React, { useState, useContext } from 'react';
import Top_bar from '../TopBar/top_bar.js';
import { useHistory, useLocation} from 'react-router-dom';
import saveforlater from '../img/saveforlater.png'
import Listdrop from './addtolist.js';
import { MyContext } from "../Mycontext.js";


const Article = () => {
  const history=useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  var isdelete=false;
  const {posts} = useContext(MyContext);

  console.log(id);

  const[liked,setLiked]=useState(false);
  const[likecount,setLikecount]=useState(0);
  const[isedit,setIsedit]=useState(false);
  const[issaved,setIssaved]=useState(false);
  const[addlist,setAddlist]=useState(false);

  const data1=posts;
  console.log('123', data1)
  const data2=data1.filter(value=> (value.id==id));
  console.log(data2)

  // editform
  const [title2, setTitle2] = useState(data2[0].title);
  const [body, setBody] = useState(data2[0].body);
  const [topic2, setTopic2] = useState(data2[0].topic);
  const handleTitleChange = (event) => {
    event.preventDefault();
    setTitle2(event.target.value);
  };

  const handleBodyChange = (event) => {
    event.preventDefault();
    setBody(event.target.value);
  };
  
  const handleTopicChange = (event) => {
    event.preventDefault();
   setTopic2(event.target.value);
 };

 function calculateReadingTime(text, wordsPerMinute = 100) {
    const words = text.split(' ').length;
    const readingTimeInMinutes = words / wordsPerMinute;

    return Math.ceil(readingTimeInMinutes); // Round up to the nearest whole minute
  }
  
  //cur date time
  const currentDateTime = new Date();

  // Formatting options
  const options = {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  };

  const formattedDateTime = currentDateTime.toLocaleString('en-US', options);

  const handleSubmit = (event) => {
    event.preventDefault();
    const index= data1.findIndex(value => value[0]==id);

    const curdat=[(data1[index][0]),title2,topic2,body,data1[index][4],data1[index][5],data1[index][6],calculateReadingTime(body),data1[index][8],data1[index][8],formattedDateTime,data1[index][11]];
    data1[index]=curdat;
    localStorage.setItem('article',JSON.stringify(data1));
    setIsedit(false);
  };

  isdelete=(data2[0].user_id==localStorage.getItem('curuser'));
  const article=data2[0]
  console.log(article);

  const { title, topic, description, author, post_likes, post_comments, minutes_to_read, created_at } = article;

  function increase_like()
  {
    if(liked){
      setLikecount(likecount-1);
    }
    else{
      setLikecount(likecount+1);
    }
    setLiked(!liked);
  }

  function increase_comment()
  {
    console.log('increase comment');
  }

  function handledelete(){
    const index= data1.findIndex(value => value[0]==id);
    console.log(index);
    data1.splice(index,1);
    console.log(data1);
    localStorage.setItem('article',JSON.stringify(data1));
    history.push('/');
  }
  function handleedit(){
    setIsedit(true);
  }

  function saveforlater_click()
  {
      const data=JSON.parse(localStorage.getItem('list'));
      const curuser=localStorage.getItem('curuser');
      const index=data.findIndex(value=> (value[2]=='saved' && value[1] == curuser));
      data[index][3].push((Number)(id));
      localStorage.setItem('list',JSON.stringify(data));
      setIssaved(true);
  }

  return (
    <>
    <Top_bar />
    {isedit?<form className="container mt-4">
      <div className="form-group row">
        <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
        <div className="col-sm-10">
          <input
            type="text"
            id="title"
            className="form-control"
            value={title2}
            onChange={handleTitleChange}
            required
          />
        </div>
      </div>
      <div className="form-group row mb-3"> {/* Add mb-3 class here */}
        <label htmlFor="topic" className="col-sm-2 col-form-label">Topic:</label>
        <div className="col-sm-10">
          <input
            type="text"
            id="topic"
            className="form-control"
            value={topic2}
            onChange={handleTopicChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          className="form-control"
          value={body}
          onChange={handleBodyChange}
          rows={10} // Specify the number of rows for the textarea
          required
        />
      </div>
      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>:
    <div className="container ">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title" style={{fontSize:40}}>{title}</h1>
          <div className='d-flex'>
          <span className='m-2 display'>by:{author}</span>
          <button className='btn bg-grey-500 bg-opacity-1 btn-sm'>Follow</button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="badge bg-secondary m-2 " >{topic}</span>
              <span className="m-2">{new Date(created_at).toLocaleDateString()}</span>
              <span className="m-2">{minutes_to_read} min read</span>
            </div>
            <hr></hr>
          </div>
          <p className="card-text mt-3">{description}</p>
          <div>
              {liked?<span className="m-3 hover-effect  text-muted rounded-pill click-cursor" onClick={increase_like}>liked {likecount}</span>:<span className="m-3 text-muted rounded-pill click-cursor" onClick={increase_like}>like {post_likes}</span>}
              <span className="text-muted" onClick={increase_comment}>comment {post_comments}</span>
              {!issaved?<img src={saveforlater} className="save-for-later" alt="save for later" value={id} onClick={saveforlater_click} />:<></>}
              {isdelete?<button className='btn mx-2 ' onClick={handleedit}>Edit</button>:<></>}
              {isdelete?<button className='btn mx-2 ' onClick={handledelete}>delete</button>:<></>}
              {!addlist?<button className='btn mx-2 ' onClick={()=> {setAddlist(true)}}>add to a list</button>:<Listdrop articleid={id} setislist={setAddlist}/>}
            </div>
        </div>
      </div>

    </div>}

    </>
  );
};

export default Article;