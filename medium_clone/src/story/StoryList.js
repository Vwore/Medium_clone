import React from 'react';

function StoryList({ stories }) {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.id} className="story">
          <h2>{story.title}</h2>
          <p>{story.description}</p>
          <p>Author: {story.author}</p>
          <p>Likes: {story.post_likes}</p>
          <p>Comments: {story.post_comments}</p>
          <p>Minutes to Read: {story.minutes_to_read}</p>
          {/* Render other story details here */}
        </div>
      ))}
    </div>
  );
}

export default StoryList;
