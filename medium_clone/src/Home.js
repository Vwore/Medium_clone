import Posts from "./posts.js"
import Side_column from "./side_column.js"
import { useState } from "react";
import React from "react";


const Home=() => {
    const [user, setUser] = useState("car");

    return(
        <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                   <Posts user={user} setuser={setUser} />
                    </div>
                    <div className="col-3">
                        <Side_column />
                    </div>
                </div>
            </div>
    );
}
export default Home;