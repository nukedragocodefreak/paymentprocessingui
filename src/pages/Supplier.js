import React, { Component } from "react";
 
class Supplier extends Component {
  render() {
    return (
      <div>
      <h2>Add Supplier Details</h2>
      <br/>
      <form>
      
      <label for="name"><b>Name</b></label>
       <input type="text" placeholder="Enter Name" name="name" required/>
               <label for="email"><b>Email</b></label>
       <input type="text" placeholder="Enter Email" name="email" required/>

       <label for="psw"><b>Address</b></label>
       <input type="text" placeholder="Enter Address" name="address" required/>

       <label for="psw-repeat"><b>Phone numbers</b></label>
       <input type="text" placeholder="Enter Phone numbers" name="phones" required></input>


       <div class="clearfix">
         <button type="submit" className="savebtn">Save</button>
       </div>
       </form>
   </div>
    );
  }
}
 
export default Supplier;
