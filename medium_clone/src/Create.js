import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import axios from 'axios';
import Top_bar from "./top_bar";


const Create=()=>{
    const history=useHistory();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [topic, setTopic] = useState('');

    //cur date time
    const currentDateTime = new Date();

    // Formatting options
    const options = {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: false
    };

    const formattedDateTime = currentDateTime.toLocaleString('en-US', options);

    //reading time
    function calculateReadingTime(text, wordsPerMinute = 100) {
      const words = text.split(' ').length;
      const readingTimeInMinutes = words / wordsPerMinute;
    
      return Math.ceil(readingTimeInMinutes); // Round up to the nearest whole minute
    }



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
    //     "description": body,
    //     "topics": topic
    // } ,{
    //     headers: {
    //       // 'Authorization': `Bearer ${data.auth_+-+++++++token}` // Include the token as a Bearer token in the header
    //     }
    //   })
    //     .then(response => {
    //       // Handle the API response here
    //       console.log(response.data);
    //       alert('article added succefully');
    //       history.push('/');
    //       // user
    //     })
    //     .catch(error => {
    //       // Handle any errors that occurred during the API request
    //       console.error('Error:', error);
    //     });
    //    // Here you can perform any action with the title and body data
       // For example, save the article to the backend or display it on the screen
       const data=localStorage.getItem('article');
       const data1=JSON.parse(data);
       const data2=localStorage.getItem('users');
       const data3=JSON.parse(data2);
       const x=data3.filter(value => (value[0] == localStorage.getItem('curuser')));
       const curdat=[(data1[data1.length-1][0]+1),title,topic,body,x[0][1],0,0,calculateReadingTime(body),formattedDateTime,formattedDateTime,formattedDateTime,x[0][0]];
       data1.push(curdat);
       localStorage.setItem('article',JSON.stringify(data1));
       console.log('Title:', title);
       console.log('Body:', body);
       history.push('/');
     };

     function handledraft(){
          const data=JSON.parse(localStorage.getItem('draft'));
          var id=1;
          if(data.length!=0)
          {
            id=data[data.length-1][0];
          }
          const cur=[id,title,topic,body,(Number)(localStorage.getItem('curuser'))];
          data.push(cur);
          localStorage.setItem('draft',JSON.stringify(data));
          history.push('/');
     }


    return(
        <>
        <Top_bar />
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
      <button className="btn btn-primary mx-3" type="submit" onClick={handledraft}>
        save as draft
      </button>
    </form>

        </>
    )
}

export default Create;