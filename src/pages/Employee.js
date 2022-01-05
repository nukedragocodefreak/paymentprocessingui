import React, { Component, useRef } from "react";
import SignaturePad from 'react-signature-canvas'
class Employee extends Component {
  constructor(props) {
    super(props);
    this.sigPad = React.createRef();
    this.state = {
     
    }; 
  }
  
  render() { 
    function clear()
    {
     this.sigPad.current.clear();
    }     
    return (
      
      <div>
      <h2>Add Employee</h2>
       <br/>
      <form>
      <label htmlFor="department"><b>Department</b></label>
       <select>
         <option>Select Department</option>
       </select>
      <label htmlFor="FirstName"><b>FirstName</b></label>
      <input type="text" placeholder="Enter FirstName" name="firstname" required/>

      <label htmlFor="LastName"><b>LastName</b></label>
      <input type="text" placeholder="Enter LastName" name="lastname" required/>

      <label htmlFor="Position"><b>Position</b></label>
      <select>
         <option>Select Position</option>
       </select>

      <label htmlFor="Signature"><b>Signature</b></label>
      <br/>
      <SignaturePad  ref = {this.sigPad}/>
      <br/>
      <br/>
      <button type="button" onClick={clear}>Clear signature</button>
      <div className="clearfix">
        <button type="submit" className="savebtn">Save</button>
      </div>
      </form>
    </div>
    
    );
  }
}

export default Employee;
