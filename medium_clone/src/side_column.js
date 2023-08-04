import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Side_column = ({user,setUser}) => {
    const history=useHistory();
    const data=JSON.parse(localStorage.getItem('profile'));
    // const [user,setUser] = useState(data != null);
    return (
        <div className="d-flex justify-content-center">
            {(user)?<button className=" border-3-primary rounded bg-info text-light px-3 py-1" onClick={() => {history.push('/create');}}>
                Add new post
            </button>:<p>you need to login to add new post</p>}
        </div>
    );
}

export default Side_column;