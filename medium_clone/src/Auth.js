import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Top_bar from "./top_bar";


const Auth = () =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const data=JSON.parse(localStorage.getItem('profile'));
    const [user,setUser] = useState(data != null);

    const history=useHistory();
    function signin(e){
        e.preventDefault();

        axios.post('http://127.0.0.1:3001/userlogin', {
        "email" : email,
        "password": password,

        })
        .then((response) => {
         // Handle the response data here
        console.log(response.data);
        const data =JSON.stringify(response.data);
        localStorage.setItem('profile',data);
        history.push('/')
        })
         .catch((error) => {
        // Handle any errors here
         console.error('error aayaa '+error);
        });
    }

    function signup(e){
        e.preventDefault();
        axios.post('http://127.0.0.1:3001/usercreate', {
        "email" : email,
        "password": password,
        "name": name

        })
        .then((response) => {
         // Handle the response data here
        console.log(response.data);
        history.push('/');
        })
         .catch((error) => {
        // Handle any errors here
         console.error('error aayaa '+error);
        });

    }

    const location = useLocation();
    const state =location.state?(location.state):true;
    return(<>
            <Top_bar user={user} setUser={setUser} />

        {state.want === true? (
        <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-primary">
              <div className="card-body text-center ">
                <h1 className="card-title text-light">Sign In</h1>
                <p className="card-text">Please enter your email and password</p>
              </div>
            </div>
          </div>
        </div>
    
        {/* <!-- Form --> */}
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form>
                
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=> {setEmail(e.target.value);}}></input>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=> {setPassword(e.target.value);}}></input>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block" onClick={signin}>Sign In</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        ): <div>
            <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-primary">
              <div className="card-body text-center ">
                <h1 className="card-title text-light">Sign Up</h1>
                <p className="card-text">Please Sign up</p>
              </div>
            </div>
          </div>
        </div>
    
        {/* <!-- Form --> */}
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter your name" onChange={(e)=> {setName(e.target.value);}}></input>
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=> {setEmail(e.target.value);}}></input>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=> {setPassword(e.target.value);}}></input>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block" onClick={signup}>Sign up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div> }
    </>   );
}

export default Auth;



