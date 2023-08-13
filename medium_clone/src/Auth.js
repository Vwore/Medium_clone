import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Top_bar from "./top_bar";
import { MyContext } from "./Mycontext";


const Auth = () =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const data=localStorage.getItem('profile');
    const {user,setUser} = useContext(MyContext);
    const {instance}=useContext(MyContext);

    const history=useHistory();

    const updateAuthorizationHeader = (token) => {
      if (token) {
        instance.defaults.headers['Authorization'] = `Bearer ${token}`;
        console.log('compe');
      } else {
        delete instance.defaults.headers['Authorization'];
      }
    };
    

    function signin(e){
        e.preventDefault();

        instance.post('/login', {
          "user":{
            "email": email,
            "password": password,
            "password_confirmation": password
        }

        })
        .then((response) => {
         // Handle the response data here
        console.log(response.data);
        const data =JSON.stringify(response.data);
        const customHeader = response.headers.get('Authorization').split(" ")[1]; localStorage.setItem('profile',customHeader);
        console.log(customHeader);
        updateAuthorizationHeader(customHeader);
        console.log(instance.defaults.headers);
        setUser(true);
        history.push('/')
        

        })
         .catch((error) => {
        // Handle any errors here
         console.error('error aayaa '+error);
        });
        
    }

    function signup(e){
        e.preventDefault();
        const url='http://127.0.0.1:3000/signup';
        axios.post(url,{"user":{
      "email": email,
      "password": password
      }}).then(response=> {
         console.log(response); 
         const customHeader = response.headers.get('Authorization').split(" ")[1]; 
         localStorage.setItem('profile',customHeader)
         setUser(true);
         history.push('/')
        }
         )
      .catch(error => {
      // Handle any errors that occurred during the API request
      console.error('Error:', error);
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
            <div className="card bg-info">
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
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=> {setEmail(e.target.value);}}></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=> {setPassword(e.target.value);}}></input>
                  </div>
                  <button type="submit" className="btn btn-info btn-block" onClick={signin}>Sign In</button>
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
            <div className="card bg-success">
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
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter your name" onChange={(e)=> {setName(e.target.value);}}></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=> {setEmail(e.target.value);}}></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=> {setPassword(e.target.value);}}></input>
                  </div>
                  <button type="submit" className="btn btn-success
                   btn-block" onClick={signup}>Sign up</button>
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



