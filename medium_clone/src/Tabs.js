import React, { useContext, useEffect, useState } from 'react';
import './Tabs.css'; // You'll create this CSS file later
import Posts from './posts';
import { MyContext } from './Mycontext';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const {catergory,user,curr_cat,setCurr_cat,fetchAllPosts}=useContext(MyContext);
  

  const handleTabClick = (index) => {
    if(tabItems[index]!='..')
    {setActiveTab(index);
    fetchAllPosts();
    setCurr_cat(tabItems[index]);}
  };

  const [tabItems,setTabItems] = useState([]);

  useEffect(()=>{
    var x=['All post','Top post'];
    if(user){
      x.push('Recommended');
    }
    catergory.map((element)=> {
      if(x.length<5){
        x.push(element)
      }
    })
    x.push('..');
     setTabItems([...x]);
    },[catergory,user]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabItems.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {<Posts catergory={curr_cat}/>} 
      </div>
    </div>
  );
};

export default Tabs;
