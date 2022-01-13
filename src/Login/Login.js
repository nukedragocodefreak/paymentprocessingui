import React, { Component } from "react";
import {SERVER_URL} from '../Constants/Constants';
class Login extends Component {
    onFormSubmit(e) {
   
    //     const empcode= e.target.username.value;
    //     const pass= e.target.pass.value;
    //     const myObject = {
    //         employeeCode: empcode
    //   };
    
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(myObject)
    //   };
    //    fetch(SERVER_URL+'/Employee', requestOptions)
    //     .then(response => {
    //       if(response.status == 200){
    //         notify.show('Employee Details saved successfully ', 'success');
    //       }
    //       else
    //       {
    //         notify.show('Failed to save Employee Details  : ' + response.status, 'error');
    //       }
    //     });
    //     //clear form
    //      e.target.pass.value = '';
    //      e.target.username.value = '';
 
         e.preventDefault();
      };
  render() {
    return (
    
        <div>
       <h1>User Login</h1>
        <br/>
       <form onSubmit={ this.onFormSubmit }>
       <div align="center">
       <div align="left">
       <label htmlFor="Department"><b>Username:</b></label>
       </div>
       <input type="text" placeholder="Enter Employee Code" name="username" id="username"  required/>
       </div>
       <div align="center">
       <div align="left">
       <label htmlFor="Department"><b>Password:</b></label>     
       </div>
       <input type="password" placeholder="Enter Password" name="pass" id="pass"  required/>
       </div>

       <div className="clearfix" align="center">
         <button type="submit" className="savebtn">Save</button>
       </div>
       </form>
     </div>
    );
  }
}
 
export default Login;
