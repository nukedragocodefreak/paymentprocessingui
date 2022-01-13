import React, { Component } from "react";
import $ from 'jquery';
import {SERVER_URL} from '../Constants/Constants';
 
class CoverSheet extends Component {

  state = {
    departments: [],
    managers: [],
    suppliers: []
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

   fetch(SERVER_URL+'/Employee/GetEmployees')
   .then(function(res) {
       return res.json();
   }).then((json)=> {
       this.setState({
        managers: json.responseObject
       })
   });

   fetch(SERVER_URL+'/Supplier/GetSupplier')
   .then(function(res) {
       return res.json();
   }).then((json)=> {
       this.setState({
        suppliers: json.responseObject
       })
   });
}
HideFormcover = () => {   
  $("#cover").css("display", "none");

 }
 ShowFormcover = () => {   
  $("#cover").css("display", "inherit");
 }

 HideFormuplod = () => {   
  $("#uploader").css("display", "none");
 }
 ShowFormupload = () => {   
  $("#cover").css("display", "inherit");
 }

  render() {
    return (
      <div>
       <h2>Process Payment</h2>
      <form>    
      <div id = "cover">
      <p align="right">
      <button type="button" className="button button2" onClick={this.HideFormcover}>Next</button>
      </p>
      <h4>Cover Sheet Information</h4>
      <br/> <br/>
      <label htmlFor="FirstName"><b>FirstName</b></label> <br/>
      <input type="text" placeholder="Enter FirstName" name="firstname" required/> <br/>

      <label htmlFor="LastName"><b>LastName</b></label> <br/>
      <input type="text" placeholder="Enter LastName" name="lastname" required/> <br/>

      <label htmlFor="Department"><b>Department name</b></label> <br/>
       <select name="department" id="department">
         <option>Select Department</option>
                {
                 this.state.departments.map((obj, key) => {
                     return <option key={key} value={obj.departmentID}>{obj.departmentName}</option>
                    
                 })
              }</select> <br/>
       <label htmlFor="dateofinv"><b>Date Of Invoice</b></label> <br/>
      <input type="date" placeholder="" name="dateofinvoice" required/> <br/>

      <label htmlFor="dateofpayment"><b>Date Of Payment</b></label> <br/>
      <input type="date" placeholder="" name="dateofpayment" required/> <br/>

      <label htmlFor="manager"><b>Manager</b></label> <br/>
      <select name="department" id="department">
         <option>Select Manager</option>
                {
                 this.state.managers.map((obj, key) => {
                     return <option key={key} alue={obj.employeeID}>{obj.firstName} {obj.lastName}</option>
                    
                 })
              }</select>
       <br></br>
      
       </div>
       <div id = "uploader">
       <p align="right">
      <button type="button" className="button button2" onClick={this.HideFormuplod}>Next</button>
      <button type="button" className="button" onClick={this.ShowFormcover}>Back</button>
      </p>

       <h2>Upload Invoice Informaiton</h2>
      <br/><br/>
     <b><label htmlFor="myfile">Upload an Invoice:</label></b> <br/>
      <input type="file" id="myfile" name="myfile" />
      <br/> <br/>
       <select name="supplier" id="supplier">
         <option>Select supplier</option>
                {
                 this.state.suppliers.map((obj, key) => {
                     return <option key={key} value={obj.supplierID}>{obj.name}</option>
                    
                 })
              }</select> <br/>
      <label htmlFor="BranchCode"><b>Branch Code</b></label> <br/>
      <input type="text" placeholder="Enter Branch Code" name="branchcode" required/> <br/>

      <label htmlFor="AccountNumber"><b>Account Number</b></label> <br/>
      <input type="text" placeholder="Enter AccountNumber" name="accountnumber" required/> <br/>

      <div className="clearfix">
        <button type="submit" className="savebtn">Save</button>
      </div>
      </div>
      </form>
    </div>
    );
  }
}
 
export default CoverSheet;
