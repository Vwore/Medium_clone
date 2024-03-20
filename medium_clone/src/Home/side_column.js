import React,{useContext,useState} from "react";
import { useHistory } from "react-router-dom";
import { MyContext } from "../Mycontext";

const Side_column = () => {
    const [formData, setFormData] = useState({
        bio: '',
        name: '',
        interestedTopics: [],
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // create profile request and 
        setProfile(false);
        console.log(formData);
      };
    
    
    const history=useHistory();
    const {user,profile,setProfile}=useContext(MyContext);
    return (
    <div className="d-flex align-item-center justify-content-center">
        <div className="d-flex flex-column justify-contents-center align-items-center">
            {user && profile && <div className="profile-form mb-5">
            <form onSubmit={handleSubmit} className="align-item-center ">
        <label>
          Bio: 
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Interested Topics:
          <input
            type="text"
            name="interestedTopics"
            value={formData.interestedTopics}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>}
            {(user)?<button className=" border-3-primary rounded bg-white text-black px-3 py-1" onClick={() => {history.push('/create');}}>
                Add new post
            </button>:<p>you need to login to add new post</p>}
        </div>
        </div>
    );
}

export default Side_column;