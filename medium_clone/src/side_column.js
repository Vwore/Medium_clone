import React,{useContext} from "react";
import { useHistory } from "react-router-dom";
import { MyContext } from "./Mycontext";

const Side_column = () => {
    const history=useHistory();
    const {user}=useContext(MyContext);
    console.log('sidebar '+ user)
    return (
        <div className="d-flex justify-content-center">
            {(user)?<button className=" border-3-primary rounded bg-info text-light px-3 py-1" onClick={() => {history.push('/create');}}>
                Add new post
            </button>:<p>you need to login to add new post</p>}
        </div>
    );
}

export default Side_column;