import React, { Component } from "react";
import Notifications, {notify} from 'react-notify-toast';
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
  .then(response => {
    if(response.status == 200){
      notify.show('Department Details saved successfully ', 'success');
    }
    else
    {
      notify.show('Failed to saveDepartment Details : ' + response.status, 'error');
    }
  });
  //clear form
   e.target.department.value = '';
   e.preventDefault();
};
  render() {
    return (
      <div>
         <Notifications />
        <h3>Add Departments</h3>
         <br/>
        <form onSubmit={ this.onFormSubmit }>
       
        <label htmlFor="Department"><b>Department name</b></label> <br/>
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
