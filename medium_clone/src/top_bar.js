import blog from "./img/blog_logo.png"
import styles from "./top_bar.css"
import {useState} from "react"
const Top_bar =() => {
    const [search_value,setSearch_value]=useState("");
    return (
        <div>
        <div className="top-bar">
            <div className="container-fluid">
            <div className="row">
                <div className="col-10 d-flex align-items-center">
                    {/* <div className="row "> */}
                        <img src={blog} alt="logo" style={ {height: 70 }} ></img>
                        <div className="text-center">Blogs</div>
                        <input onChange={(e) => {setSearch_value(e.target.value);}} value={search_value}></input>
                    {/* </div> */}
                </div>
                <div className="col-2 d-flex align-items-cente">
                    <button className="m-1">sign </button>
                    <button className="m-1" >sign up</button>
                </div>
            </div> 
            </div>
            
        </div>
            <div  style={{height:50}}></div>
        </div>
    );
}

export default Top_bar;