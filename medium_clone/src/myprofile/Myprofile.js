import React from 'react';
import Top_bar from '../top_bar';

const profileData = {
  // Your profile data object here
  "id": 1,
    "bio": "this is my bio. I am best",
    "name": "deepak patil",
    "user_id": 36,
    "created_at": "2023-08-13T11:12:37.710Z",
    "updated_at": "2023-08-13T11:12:37.710Z",
    "interested_topics": [
        "technology",
        "sports",
        "gym",
        "game"
    ],
    "save_for_later": [
        2,5,6
    ]
};

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
        </div>
        <div style={sectionStyles}>
          <h2 style={headingStyles}>Saved Articles</h2>
          <ul style={listStyles}>
            {profileData.save_for_later.map((id) => (
              <li key={id} style={listItemStyles}>
                Article ID: {id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Myprofile;

;