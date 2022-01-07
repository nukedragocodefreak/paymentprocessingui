import React, { Component } from "react";
 
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
  fetch('https://localhost:44398/Company', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
    e.preventDefault();
  };
  render() {
    return (
      <div>
      <h2>Add Supplier Details</h2>
      <br/>
      <form onSubmit={ this.onFormSubmit }>
      
      <label htmlFor="name"><b>Name</b></label>
       <input type="text" placeholder="Enter Name" name="name" required/>
               <label for="email"><b>Email</b></label>
       <input type="text" placeholder="Enter Email" name="email" required/>

       <label htmlFor="psw"><b>Address</b></label>
       <input type="text" placeholder="Enter Address" name="address" required/>

       <label htmlFor="psw-repeat"><b>Phone numbers</b></label>
       <input type="text" placeholder="Enter Phone numbers" name="phones" required></input>


       <div className="clearfix">
         <button type="submit" className="savebtn">Save</button>
       </div>
       </form>
   </div>
    );
  }
}
 
export default Supplier;
