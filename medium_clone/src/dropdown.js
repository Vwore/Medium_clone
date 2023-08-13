import React, { useContext, useState } from 'react';
import './dropdown.css'; // You'll create this CSS file later
import { MyContext } from './Mycontext';


const DropdownButton = () => {
    const {instance, setUser,setProfile}=useContext(MyContext);
    const options =['User_name','create profile','logout'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if(option=='logout')
    {
        localStorage.clear(); 
        instance.delete('/logout').then(response=> {console.log('logged out '+response)}).catch(error=> { console.log(error)});
        setUser(false);
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
