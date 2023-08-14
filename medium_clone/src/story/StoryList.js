import React from 'react';

function StoryList({ stories }) {
  const title=stories.title;
  const description=stories.description;
  function handclick(){
    
  }
  return (
    <div>
      {
        <div key={stories.id} className="story" onClick={handclick}>
          <h2>{stories.title}</h2>
          <p>{stories.description}</p>
          {/* Render other story details here */}
        </div>
      }
    </div>
  );
}

export default StoryList;
