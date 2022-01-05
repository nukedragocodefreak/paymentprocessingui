import React, { Component } from "react";
 
class Department extends Component {
  render() {
    return (
      <div>
        <h2>Add Departments</h2>
         <br/>
        <form>
       
        <label for="Department"><b>Department name</b></label>
        <input type="text" placeholder="Enter Department Name" name="department" required/>
        <div class="clearfix">
          <button type="submit" className="savebtn">Save</button>
        </div>
        </form>
      </div>
    );
  }
}
 
export default Department;
