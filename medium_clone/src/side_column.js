import React from "react";


const Side_column = () => {
    const login=true;
    return (
        <div className="d-flex justify-content-center">
            {(login)?<button className=" border-3-primary rounded bg-info text-light px-3 py-1">
                Add new post
            </button>:<p>you need to login to add new post</p>}
        </div>
    );
}

export default Side_column;