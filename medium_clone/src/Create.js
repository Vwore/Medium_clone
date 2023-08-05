import React from "react";
import { useHistory } from "react-router";
import Top_bar from "./top_bar";
import { useState } from "react";
import axios from 'axios';
import jwtDecode from "jwt-decode";


const Create=()=>{
    const history=useHistory();
    const data=JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(data!=null);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [topic, setTopic] = useState('');


    const handleTitleChange = (event) => {
       setTitle(event.target.value);
     };
   
     const handleBodyChange = (event) => {
       setBody(event.target.value);
     };
     
     const handleTopicChange = (event) => {
      setTopic(event.target.value);
    };

     const handleSubmit = (event) => {
       event.preventDefault();
       axios.post('http://127.0.0.1:3001/create',{
        "title": title,
        "description": body,
        "topics": topic
    } ,{
        headers: {
          'Authorization': `Bearer ${data.auth_token}` // Include the token as a Bearer token in the header
        }
      })
        .then(response => {
          // Handle the API response here
          console.log(response.data);
          alert('article added succefully');
          history.push('/');
          // user
        })
        .catch(error => {
          // Handle any errors that occurred during the API request
          console.error('Error:', error);
        });
       // Here you can perform any action with the title and body data
       // For example, save the article to the backend or display it on the screen
       console.log('Title:', title);
       console.log('Body:', body);
     };


    return(
        <>
        <Top_bar user={user} setUser={setUser}/>
        <form className="container mt-4">
      <div className="form-group row">
        <label htmlFor="title" className="col-sm-2 col-form-label">Title:</label>
        <div className="col-sm-10">
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
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
            value={topic}
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
    </form>

        </>
    )
}

export default Create;