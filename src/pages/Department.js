import React, { Component } from "react";
 
class Department extends Component {

  onFormSubmit(e) {
    const name= e.target.department.value;
    //  console.log('Password:', bankname);
    const myObject = {
      departmentName: name
  };
  //console.log('Password:', myObject);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(myObject)
  };
  fetch('https://localhost:44398/Department', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h2>Add Departments</h2>
         <br/>
        <form onSubmit={ this.onFormSubmit }>
       
        <label htmlFor="Department"><b>Department name</b></label>
        <input type="text" placeholder="Enter Department Name" name="department" id="department"  required/>
        <div className="clearfix">
          <button type="submit" className="savebtn">Save</button>
        </div>
        </form>
      </div>
    );
  }
}
 
export default Department;
