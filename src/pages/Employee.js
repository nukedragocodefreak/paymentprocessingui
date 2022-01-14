import React, { Component, useRef } from "react";
import SignaturePad from 'react-signature-canvas'
import Notifications, {notify} from 'react-notify-toast';
import {SERVER_URL} from '../Constants/Constants';

class Employee extends Component {

  constructor(props) {
    super(props);
   // this.sigPad = React.createRef();
    this.state = {
     departments: [],
     positions: [],
     sigPad: {},
     DataURL: "dataurl"
    }; 
  }
  
  componentDidMount() {
    fetch(SERVER_URL+'/Department/GetDepartments')
     .then(function(res) {
         return res.json();
     }).then((json)=> {
         this.setState({
          departments: json.responseObject
         })
     });
  
     fetch(SERVER_URL+'/Employee/GetPositions')
     .then(function(res) {
         return res.json();
     }).then((json)=> {
         this.setState({
          positions: json.responseObject
         })
     });
  }
  sigPad = {}
  clear = () => {
    this.sigPad.clear()
   
  }
  createSignature = () => {   
   this.DataURL = this.sigPad.toDataURL()
   document.getElementById("imagedataurl").value = this.DataURL;
  }

  onFormSubmit(e) {
   
    const department= e.target.department.value;
    const empcode= e.target.empcode.value;
    const firstname= e.target.firstname.value;
    const lastname= e.target.lastname.value;
    const position= e.target.position.value;
    const signature= e.target.imagedataurl.value;

    const myObject = {
      employeeCode: empcode,
      firstName: firstname,
      lastName: lastname,
      fK_DepartmentID: department,
      position: position,
      signature: signature
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(myObject)
  };
   fetch('https://localhost:44398/Employee', requestOptions)
    .then(response => {
      if(response.status == 200){
        notify.show('Employee Details saved successfully ', 'success');
      }
      else
      {
        notify.show('Failed to save Employee Details  : ' + response.status, 'error');
      }
    });
    //clear form
     e.target.department.value = 'Select Department';
     e.target.empcode.value = '';
     e.target.firstname.value = '';
     e.target.lastname.value = '';
     e.target.position.value = 'Select Position';
     e.target.imagedataurl.value = '';
     e.preventDefault();
  };
  render() { 
       
    return (
      
      <div>
         <Notifications />
      <h3>Add Employee</h3>
       <br/>
      <form onSubmit={ this.onFormSubmit }>
      <label htmlFor="department"><b>Department</b></label> <br/>
      <select name="department" id="department">
         <option>Select Department</option>
                {
                 this.state.departments.map((obj, key) => {
                     return <option key={key} value={obj.departmentID}>{obj.departmentName}</option>
                    
                 })
              }</select>
 <br/>
       <label htmlFor="EmployeeCode"><b>Employee Code</b></label> <br/>
      <input type="text" placeholder="Enter Employee Code" name="empcode" id="empcode" required/> <br/>
    
      <input type="hidden" placeholder="" name="imagedataurl" id="imagedataurl" required/> <br/>
      <label htmlFor="FirstName"><b>FirstName</b></label> <br/>
      <input type="text" placeholder="Enter FirstName" name="firstname" id="firstname" required/> <br/>

      <label htmlFor="LastName"><b>LastName</b></label> <br/>
      <input type="text" placeholder="Enter LastName" name="lastname" id="lastname" required/> <br/>

      <label htmlFor="Position"><b>Position</b></label>
      <br/>
       <select name="position" id="position">
         <option>Select Position</option>
                {
                 this.state.positions.map((obj, key) => {
                     return <option key={key} value={obj.positionID}>{obj.positionName}</option>
                    
                 })
              }</select>
 <br/>
      <label htmlFor="Signature"><b>Signature</b></label>
      <br/>
      <SignaturePad penColor='black' canvasProps={{ width: 546, height: 200, className: 'sig-canvas' }} ref={(ref) => { this.sigPad = ref }} />
      <br/>

      <button type="button" onClick={this.clear}>Clear signature</button>
      <button type="button" onClick={this.createSignature}>Create signature</button>
      <div className="clearfix">
        <button type="submit" className="savebtn">Save</button>
      </div>
      </form>
    </div>
    
    );
  }
}

export default Employee;
