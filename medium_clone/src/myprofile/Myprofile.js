import React, { useState } from 'react';
import Top_bar from '../top_bar';
import Post from '../post';



const profileStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f6f6f6',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const bioStyles = {
  margin: '10px 0',
  color: '#333',
  fontSize: '18px',
};

const sectionStyles = {
  margin: '20px 0',
  color: '#444',
  width: '100%',
  maxWidth: '500px',
};

const headingStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333', // Heading color
};

const listStyles = {
  listStyle: 'none',
  padding: '0',
  fontSize: '16px',
};

const listItemStyles = {
  marginBottom: '8px',
  color: '#555', // List item color
};

function Myprofile() {
  const[topic,setTopic]=useState("");

  const data=JSON.parse(localStorage.getItem('users'));
  const id=localStorage.getItem('curuser');
  const index= data.findIndex(value => value[0]==id);
  const data1=JSON.parse(localStorage.getItem('article'));
  const articles=data1.filter((element)=>(id==element[11]));

  const profileData = {
    // Your profile data object here
    "id": data[index][0],
      "bio": data[index][4],
      "name": data[index][1],
      "interested_topics": data[index][5],
      
  };

  function handleclick(){
      data[index][5].push(topic);
      localStorage.setItem('users',JSON.stringify(data));
      window.location.reload();
    }
    
  return (
    <>
      <Top_bar />
      <div style={profileStyles}>
        <h1 style={{ color: '#222' }}>{profileData.name}</h1>
        <p style={bioStyles}>{profileData.bio}</p>
        <div style={sectionStyles}>
          <h2 style={headingStyles}>Interested Topics</h2>
          <ul style={listStyles}>
            {profileData.interested_topics.map((topic, index) => (
              <li key={index} style={listItemStyles}>
                {topic}
              </li>
            ))}
          </ul>
          <input className='' value={topic} onChange={(e)=> {setTopic(e.target.value)}}></input>
          <button className='btn-sm' onClick={handleclick}>+</button>
        </div>
        <h1 className='mt-5 mx-3 display-4 align-self-start'>{profileData.name}'s Post</h1>
        {articles.map((element)=> (<Post data={element}/>))}
      </div>
    </>
  );
}

export default Myprofile;

;