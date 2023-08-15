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
    const [bio,setBio]=useState('');
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

        // instance.post('/login', {
        //   "user":{
        //     "email": email,
        //     "password": password,
        //     "password_confirmation": password
        // }

        // })
        // .then((response) => {
        //  // Handle the response data here
        // console.log(response.data);
        // const data =JSON.stringify(response.data);
        // const customHeader = response.headers.get('Authorization').split(" ")[1]; localStorage.setItem('profile',customHeader);
        // console.log(customHeader);
        // updateAuthorizationHeader(customHeader);
        // console.log(instance.defaults.headers);
        // setUser(true);
        // history.push('/')
        

        // })
        //  .catch((error) => {
        // // Handle any errors here
        //  console.error('error aayaa '+error);
        // });
        const data=localStorage.getItem('users');
      var data1=JSON.parse(data);
      const x=data1.filter(value => (value[2] === email));
      console.log(x);
      if(x.length)
      {
        if(x[0][3]==password)
        {
          localStorage.setItem('curuser',x[0][0])
          setUser(true);
          history.push('/');    
        }
        else{
          alert('check your password');
          setPassword('');
        }
      }
      else{
        alert('no user found');
        setName('');
        setEmail('');
        setPassword('');
        setBio('');
      }
      

        
    }

    function signup(e){
        e.preventDefault();
     
      const data=localStorage.getItem('users');
      var data1=JSON.parse(data);
      data1.push([(data1[data1.length-1][0]+1),name,email,password,bio,[]]);
      localStorage.setItem('users',JSON.stringify(data1));
      localStorage.setItem('curuser',data1[data1.length-1][0])
      setUser(true);
      const data2=JSON.parse(localStorage.getItem('list'));
      data2.push([data2[data2.length-1][0]+1,data1[data1.length-1][0],'saved',[]]);
      localStorage.setItem('list',JSON.stringify(data2));
      history.push('/');

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
                    <label htmlFor="bio">bio</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter your Bio" onChange={(e)=> {setBio(e.target.value);}}></input>
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



