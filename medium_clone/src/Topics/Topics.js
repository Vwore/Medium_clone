import React,{useContext, useState} from "react";
import Top_bar from "../TopBar/top_bar";
import './Topics.css'
import { MyContext } from "../Mycontext";  
import { useHistory } from "react-router";

const Topics=()=> {
    const history=useHistory();
    const [searchTerm, setSearchTerm] = useState('');
    const {catergory,setCurr_cat,fetchAllPosts} = useContext(MyContext);
    const filteredTopics = catergory.filter(topic =>
    topic.toLowerCase().includes(searchTerm.toLowerCase()));
    function handle_click() {
      history.push('/');
    }
    return(
        <>
        <Top_bar />
        <div className="container">
      <h1>Explore Topics</h1>
      <input
        className="topic_search"
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul className="topic-list">
        {filteredTopics.map((topic, index) => (
          <li key={index} data-topic={topic} onClick={(e) => { fetchAllPosts(); setCurr_cat(e.target.getAttribute('data-topic')); handle_click(); }}>{topic}</li>
        ))}
      </ul>
    </div>
        </>
    )
}

export default Topics;