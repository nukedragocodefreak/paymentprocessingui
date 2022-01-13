import React, { Component } from "react";
import Notifications, {notify} from 'react-notify-toast';
import {SERVER_URL} from '../Constants/Constants';

class Supplier extends Component {
  onFormSubmit(e) {
    const name= e.target.name.value;
    const email= e.target.email.value;
    const address= e.target.address.value;
    const phones= e.target.phones.value;
    //  console.log('Password:', bankname);
    const myObject = {
    name: name,
    email: email,
    address: address,
    phonenumbers: phones
  };
  //console.log('Password:', myObject);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(myObject)
  };
  fetch(SERVER_URL+'/Supplier', requestOptions)
  .then(response => {
    if(response.status == 200){
      notify.show('Supplier Details saved successfully ', 'success');
    }
    else
    {
      notify.show('Failed to save Supplier Details : ' + response.status, 'error');
    }
  });
  //clear form
   e.target.name.value = '';
   e.target.email.value = '';
   e.target.address.value = '';
   e.target.phones.value = '';
   e.preventDefault();
};
  render() {
    return (
      <div>
         <Notifications />
      <h3>Add Supplier Details</h3>
      <br/>
      <form onSubmit={ this.onFormSubmit }>
      
      <label htmlFor="name"><b>Name</b></label> <br/>
       <input type="text" placeholder="Enter Name" name="name" required/> <br/>
               <label htmlFor="email"><b>Email</b></label> <br/>
       <input type="text" placeholder="Enter Email" name="email" required/> <br/>

       <label htmlFor="psw"><b>Address</b></label> <br/>
       <input type="text" placeholder="Enter Address" name="address" required/> <br/>

       <label htmlFor="psw-repeat"><b>Phone numbers</b></label> <br/>
       <input type="text" placeholder="Enter Phone numbers" name="phones" required></input> <br/>


       <div className="clearfix">
         <button type="submit" className="savebtn">Save</button>
       </div>
       </form>
   </div>
    );
  }
}
 
export default Supplier;
