import React, { useContext, useState } from 'react';
import StoryList from './StoryList';
import './styles.css'; 
import Top_bar from '../top_bar';
import Post from '../post';
import { MyContext } from '../Mycontext';

const draftStories = [
    {
        "id": 1,
        "title": "The Magic Art of Saying More with Less",
        "topic": "new topic",
        "description": "The unforgettable opening sequence of Sergio Leone’s Once Upon a Time in the West spans ten minutes and captivates viewers with barely a word spoken. We are taken to a remote train station where three leather faces wait. Every detail is meticulously portrayed, from cracked knuckles to an irritating fly, a squeaky windmill, and jangling spurs. Leone uses the power of close-ups to build an air of drama and tension.",
        "author": "deepak",
        "post_likes": '',
        "post_comments": '0',
        "minutes_to_read": 2,
        "published_at": null,
        "created_at": "2023-08-12T20:02:34.660Z",
        "updated_at": "2023-08-12T20:02:34.732Z",
        "user_id": 4
    },
    {
        "id": 2,
        "title": "No exit — every feed is a traffic jam",
        "topic": "new topicxsxsx",
        "description": "In the past few years, we’ve been experiencing a rough fallout from our prolonged honeymoon with social media. The imminent decline of Facebook and the chaos in Twitter opened the appetite for something different. Many of us turned our backs on the X and launched into a promiscuous rebounding period with multiple partners (Mastodon, Bluesky, Threads, even LinkedIn…). Much has been written against big tech and the social dilemma, in praise of decentralized and open source infrastructures, and more recently about the inevitable growing pains of new emerging networks. However, the following words will attempt to address the elephant in the room…",
        "author": "deepakxsssx",
        "post_likes": '',
        "post_comments": '',
        "minutes_to_read": 5,
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
      <div className='container-fluid px-5'>{ activeTab === 'drafts' ? draftStories.map((value)=> (<StoryList stories={value}/>)) : publishedStories.map((value)=> (<Post article={value}/>))}
        </div>
    </div>
  );
}

export default StoryPage;
