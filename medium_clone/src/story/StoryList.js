import React, { useState } from 'react';

function StoryList({ stories }) {
  const [isedit,setIsedit]=useState(false);
  const [title2,setTitle2]=useState(stories[1]);
  const [body,setBody]=useState(stories[3]);
  const [topic2,setTopic2]=useState(stories[2]);

  function handleTitleChange(e)
  {
      setTitle2(e.target.value);
  }

  function handleBodyChange(e)
  {
    setBody(e.target.value);
  }

  function handleTopicChange(e){
    setTopic2(e.target.value);
  }

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


  function handleSubmit(e)
  {
    const data=JSON.parse(localStorage.getItem('article'));
    const data2=JSON.parse(localStorage.getItem('users'));
    const x=data2.filter(value => (value[0] == localStorage.getItem('curuser')));
    const curdat=[(data[data.length-1][0]+1),title2,topic2,body,x[0][1],0,0,calculateReadingTime(body),formattedDateTime,formattedDateTime,formattedDateTime,x[0][0]];
    data.push(curdat);
    localStorage.setItem('article',JSON.stringify(data));
    
    const y=JSON.parse(localStorage.getItem('draft'));
    const index = y.findIndex(value=> (value[0]==stories[0]));
    y.splice(index,1);
    console.log(y);
    localStorage.setItem('draft',JSON.stringify(y));
    setIsedit(false);
  }

  function handclick(){
    setIsedit(true);
  }
  return (
    <div>
      {isedit?
      <>
      <form className="container mt-4">
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
    </form>
      </>
        :<div key={stories[0]} className="story" >
          <h2>{stories[1]}</h2>
          <p>{stories[3]}</p>
          <button className='btn' onClick={handclick}>edit draft</button>
          {/* Render other story details here */}
        </div>
      }
    </div>
  );
}

export default StoryList;
