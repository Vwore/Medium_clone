import React, { useContext, useState } from 'react';
import StoryList from './StoryList';
import './styles.css'; 
import Top_bar from '../top_bar';
import Post from '../post';
import { MyContext } from '../Mycontext';

const draftStories = [
    {
        "id": 1,
        "title": "newwww titlee updated",
        "topic": "new topic",
        "description": "Cirque du Soleil is what happens when you give circus people a budge Ka is what happens when you challenge them to tell a story",
        "author": "deepak",
        "post_likes": 0,
        "post_comments": 0,
        "minutes_to_read": 1,
        "published_at": null,
        "created_at": "2023-08-12T20:02:34.660Z",
        "updated_at": "2023-08-12T20:02:34.732Z",
        "user_id": 4
    },
    {
        "id": 2,
        "title": "newwww titlee updatedxs",
        "topic": "new topicxsxsx",
        "description": "new descxsxs",
        "author": "deepakxsssx",
        "post_likes": 0,
        "post_comments": 0,
        "minutes_to_read": 1,
        "published_at": null,
        "created_at": "2023-08-13T07:24:38.774Z",
        "updated_at": "2023-08-13T07:24:38.940Z",
        "user_id": 4
    },
    {
      "id": 3,
      "title": "newwww titlee updated",
      "topic": "gaming",
      "description": "Cirque du Soleil is what happens when you give circus people a budge Ka is what happens when you challenge them to tell a story",
      "author": "deepak",
      "post_likes": 0,
      "post_comments": 0,
      "minutes_to_read": 1,
      "published_at": null,
      "created_at": "2023-08-12T20:02:34.660Z",
      "updated_at": "2023-08-12T20:02:34.732Z",
      "user_id": 4
  }
];

const publishedStories = [
    {
        "id": 1,
        "title": "Valorant",
        "topic": "new topic",
        "description": "Cirque du Soleil is what happens when you give circus people a budge Ka is what happens when you challenge them to tell a story",
        "author": "deepak",
        "post_likes": 0,
        "post_comments": 0,
        "minutes_to_read": 1,
        "published_at": null,
        "created_at": "2023-08-12T20:02:34.660Z",
        "updated_at": "2023-08-12T20:02:34.732Z",
        "user_id": 4
    },
    {
        "id": 2,
        "title": "newwww titlee updatedxs",
        "topic": "new topicxsxsx",
        "description": "new descxsxs",
        "author": "deepakxsssx",
        "post_likes": 0,
        "post_comments": 0,
        "minutes_to_read": 1,
        "published_at": null,
        "created_at": "2023-08-13T07:24:38.774Z",
        "updated_at": "2023-08-13T07:24:38.940Z",
        "user_id": 4
    },
    {
      "id": 3,
      "title": "newwww titlee updated",
      "topic": "gaming",
      "description": "Cirque du Soleil is what happens when you give circus people a budge Ka is what happens when you challenge them to tell a story",
      "author": "deepak",
      "post_likes": 0,
      "post_comments": 0,
      "minutes_to_read": 1,
      "published_at": null,
      "created_at": "2023-08-12T20:02:34.660Z",
      "updated_at": "2023-08-12T20:02:34.732Z",
      "user_id": 4
  }
];

function StoryPage() {
  const [activeTab, setActiveTab] = useState('drafts');
  const {user} = useContext(MyContext);

  return (
    <div>
        <Top_bar />
      <div className="tabs">
        <button onClick={() => setActiveTab('drafts')}>Drafts</button>
        <button onClick={() => setActiveTab('published')}>Published</button>
      </div>
      <div className='container-fluid px-5'>{ activeTab === 'drafts' ? draftStories.map((value)=> (<Post article={value}/>)) : publishedStories.map((value)=> (<Post article={value}/>))}
        </div>
    </div>
  );
}

export default StoryPage;
