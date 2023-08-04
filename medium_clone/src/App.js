import Top_bar from "./top_bar.js"
import Posts from "./posts.js"
import Add_post from "./Add_post.js"
import { useState } from "react"

const App= () => {
    const [user, setUser] = useState("car");
    return(
        <>
        <Top_bar />
        <div className="container-fluid">
             {/* <div className="row">
             
             </div> */}


        <div className="row">
                <div className="col-9">
                <Posts user={user} setuser={setUser} />
                </div>
                <div className="col-3">
                <Add_post />
                </div>
                
        </div>
    </div>
    </>    )
}

export default App;