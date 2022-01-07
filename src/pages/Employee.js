import React, { Component, useRef } from "react";
import SignaturePad from 'react-signature-canvas'
class Employee extends Component {

  constructor(props) {
    super(props);
   // this.sigPad = React.createRef();
    this.state = {
     departments: [],
     positions: [],
     sigPad: {},
     DataURL: "test"
    }; 
  }
  
  componentDidMount() {
    fetch('https://localhost:44398/Department/GetDepartments')
     .then(function(res) {
         return res.json();
     }).then((json)=> {
         this.setState({
          departments: json.responseObject
         })
     });
  
     fetch('https://localhost:44398/Employee/GetPositions')
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
   document.getElementById("no").value = this.DataURL;
  }

  onFormSubmit(e) {
   
    const department= e.target.department.value;
    const empcode= e.target.empcode.value;
    const firstname= e.target.firstname.value;
    const lastname= e.target.lastname.value;
    const position= e.target.position.value;
    const signature= e.target.no.value;
    //  console.log('Password:', bankname);
   // console.log(this.sigPad.getSignaturePad());
    const myObject = {
      employeeCode: empcode,
      firstName: firstname,
      lastName: lastname,
      fK_DepartmentID: department,
      position: position,
      signature: signature
  };
  //console.log('Password:', myObject);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(myObject)
  };
  fetch('https://localhost:44398/Employee', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
    e.preventDefault();
  };
  render() { 
       
    return (
      
      <div>
      <h2>Add Employee</h2>
       <br/>
      <form onSubmit={ this.onFormSubmit }>
      <label htmlFor="department"><b>Department</b></label>
      <select name="department" id="department">
         <option>Select Department</option>
                {
                 this.state.departments.map((obj, key) => {
                     return <option key={key} value={obj.departmentID}>{obj.departmentName}</option>
                    
                 })
              }</select>

       <label htmlFor="EmployeeCode"><b>Employee Code</b></label>
      <input type="text" placeholder="Enter Employee Code" name="empcode" id="empcode" required/>
    
      <input type="text" placeholder="Enter no" name="no" id="no" required/>
      <label htmlFor="FirstName"><b>FirstName</b></label>
      <input type="text" placeholder="Enter FirstName" name="firstname" id="firstname" required/>

      <label htmlFor="LastName"><b>LastName</b></label>
      <input type="text" placeholder="Enter LastName" name="lastname" id="lastname" required/>

      <label htmlFor="Position"><b>Position</b></label>

       <select name="position" id="position">
         <option>Select position</option>
                {
                 this.state.positions.map((obj, key) => {
                     return <option key={key} value={obj.positionID}>{obj.positionName}</option>
                    
                 })
              }</select>

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
