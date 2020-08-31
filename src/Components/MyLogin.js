import React, { Component } from 'react';
import axios from 'axios';


class MyLogin extends Component {
  constructor(props){
    super(props);
    this.state={Login:false,UserName:'test',Pass:'test'}
  }
  LoginSet(){
    axios.get('http://localhost:8888/login',{params:{
         UserName:this.state.UserName,
         Pass:this.state.Pass
       }}).then((res)=>{
         res.data.map((val,key)=>{
          if(key===0){
            if(val==="OK"){
              console.log("Login Success");
            }else{
              console.log("Login Patates");
            }
          }
         
          
         });
         
       }).catch((err)=>{
         console.log("Error : "+err);
       })
  }
    render() {

      
        return (
            <div>
                <div class="container">

<form class="login-form" onSubmit={this.LoginSet}>
  <div class="login-wrap">
    <p class="login-img"><i class="icon_lock_alt"></i></p>
    <div class="input-group">
      <span class="input-group-addon"><i class="icon_profile"></i></span>
      <input type="text" onChange={(e)=>this.setState({UserName:e.value})} class="form-control" placeholder="Username" autofocus/>
    </div>
    <div class="input-group">
      <span class="input-group-addon"><i class="icon_key_alt"></i></span>
      <input  type="password" onChange={(e)=>this.setState({Pass:e.value})} class="form-control" placeholder="Password"/>
    </div>
    <label class="checkbox">
            <input type="checkbox" value="remember-me"/> Remember me
            <span class="pull-right"> <a href="#"> Forgot Password?</a></span>
        </label>
    <button class="btn btn-primary btn-lg btn-block" type="submit"  >Login</button>
    <button onClick={console.log(this.state.Pass)} class="btn btn-info btn-lg btn-block" type="button">Signup</button>
  </div>
</form>
<div class="text-right">
  <div class="credits">
      minipanel
    </div>
</div>
</div>

            </div>
        );
    }
}

export default MyLogin;