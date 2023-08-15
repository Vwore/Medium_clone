import React, { useContext, useState } from 'react';
import './dropdown.css'; // You'll create this CSS file later
import { MyContext } from './Mycontext';
import { useHistory } from 'react-router';


const DropdownButton = () => {
    const {instance, setUser,setProfile,setCuruser}=useContext(MyContext);
    const data=JSON.parse(localStorage.getItem('users'));
    const id=localStorage.getItem('curuser');
    const index= data.findIndex(value => value[0]==id);
    const options =[data[index][1],'myprofile','Myarticles','logout'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const history=useHistory();

  const handleOptionClick = (option) => {
    

    setSelectedOption(option);
    setIsOpen(false);
    if(option=='logout')
    {
         
        // instance.delete('/logout').then(response=> {console.log('logged out '+response)}).catch(error=> { console.log(error)});
        setUser(false);
        localStorage.setItem('curuser',"null");
    }
    if(option=='create profile')
    {
        setProfile(true);
    }
    if(option=='User_name')
    {
      console.log('userssss')
        setProfile(false);
    }
    if(option=='myprofile')
    {
      history.push('myprofile');
    }
    if(option=='Myarticles')
    {
      history.push('story');
    }
  };

  return (
    <div className="dropdown-container">
      <button
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
