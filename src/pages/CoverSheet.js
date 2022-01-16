import React, { Component } from "react";
import $ from 'jquery';
import Notifications, {notify} from 'react-notify-toast';
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

 let coverid = Math.floor((Math.random() * 1000000) + 1);
document.getElementById("coversheetid").value = coverid;

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

 onFormSubmit(e) {
  const coversheetid= e.target.coversheetid.value;
  const firstname= e.target.firstname.value;
  const lastname= e.target.lastname.value;
  const department= e.target.department.value;
  const dateofinvoice= e.target.dateofinvoice.value;
  const dateofpayment= e.target.dateofpayment.value;
  const manager= e.target.manager.value;


  const myfile= e.target.myfile.value;  
  const supplier= e.target.supplier.value;
  const invoicenumber= e.target.invoicenumber.value;

  //  console.log('Password:', bankname);
  const myObject = {
    coverSheetID: coversheetid,
    firstName: firstname,
    lastName: lastname,
    departmentID: department,
    dateOfInvoce: dateofinvoice,
    dateOfPayment: dateofpayment,
    managerID: manager,
    companyID: 0,
    fK_PaymentStatusID: 2
};
console.log(myObject);
const myObjectFile = {
    invoiceNumber: invoicenumber,
    date: new Date(),
    location: myfile,
    fIleName: myfile,
    fK_CoverSheetID: coversheetid,
    fK_SupplierID: supplier
};
//coversheet
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(myObject)
  
};
  //invoice
const requestOptionsInv = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(myObjectFile)
};

fetch(SERVER_URL+'/CoverSheet', requestOptions)
.then(response => {
  if(response.status == 200){
    notify.show('Coversheet Details saved successfully ', 'success');
  }
  else
  {
    notify.show('Failed to Coversheet Details : ' + response.status, 'error');
  }
});
//clear form
 let coverid = Math.floor((Math.random() * 1000000) + 1);
 e.target.coversheetid.value = coverid;
 e.target.firstname.value= '';
 e.target.lastname.value= '';
 e.target.department.value= '';
 e.target.dateofinvoice.value= '';
 e.target.dateofpayment.value= '';
  e.target.manager.value= '';


e.target.myfile.value= '';  
e.target.supplier.value= '';
e.target.invoicenumber.value= '';
 e.preventDefault();
};
  render() {
    return (
      <div>
      <Notifications />
       <h2>Process Payment</h2>
      <form onSubmit={ this.onFormSubmit }>     
      <div id = "cover">
      <p align="right">
      <button type="button" className="button button2" onClick={this.HideFormcover}>Next</button>
      </p>
      <h4>Cover Sheet Information</h4>
      <br/> <br/>
      <label htmlFor="FirstName"><b>CoverSheetID</b></label> <br/>
      <input type="text" placeholder="" name="coversheetid" id="coversheetid" required disabled/> <br/>

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
      <label htmlFor="invoicenumber"><b>Invoice Number</b></label> <br/>
      <input type="text" placeholder="" name="invoicenumber" id="invoicenumber" required/> <br/>
       <label htmlFor="dateofinv"><b>Date Of Invoice</b></label> <br/>
      <input type="date" placeholder="" name="dateofinvoice" id="dateofinvoice"  required/> <br/>

      <label htmlFor="dateofpayment"><b>Date Of Payment</b></label> <br/>
      <input type="date" placeholder="" name="dateofpayment"  id="dateofpayment" required/> <br/>

      <label htmlFor="manager"><b>Manager</b></label> <br/>
      <select name="manager" id="manager">
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
