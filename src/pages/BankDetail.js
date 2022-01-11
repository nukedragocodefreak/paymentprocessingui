import React, { Component } from "react";
import Notifications, {notify} from 'react-notify-toast';
class BankDetail extends Component {
  
  state = {
    banks: [],
    companies: []
}
componentDidMount() {
  fetch('https://localhost:44398/BankDetail/GetBanks')
   .then(function(res) {
       return res.json();
   }).then((json)=> {
       this.setState({
          banks: json.responseObject
       })
   });

   fetch('https://localhost:44398/Company/GetCompany')
   .then(function(res) {
       return res.json();
   }).then((json)=> {
       this.setState({
        companies: json.responseObject
       })
   });

}

onFormSubmit(e) {
  const bankname= e.target.bankname.value;
  const branchname= e.target.branchname.value;
  const branchcode= e.target.branchcode.value;
  const accountnumber= e.target.accountnumber.value;
  const company = e.target.company.value;
  //  console.log('Password:', bankname);
  const myObject = {
  fK_BankID: bankname,
  fK_CompanyID: company,
  branchName: branchname,
  branchCode: branchcode,
  accountNumber: accountnumber
};
//console.log('Password:', myObject);
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(myObject)
};
fetch('https://localhost:44398/BankDetail', requestOptions)
.then(response => {
  if(response.status == 200){
    notify.show('Bank Details saved successfully ', 'success');
  }
  else
  {
    notify.show('Failed to save Bank Details : ' + response.status, 'error');
  }
});
//clear form
 e.target.bankname.value = 'Select Bank';
 e.target.branchname.value = '';
 e.target.branchcode.value = '';
 e.target.accountnumber.value = '';
 e.target.company.value = 'Select Company';
 e.preventDefault();
};
  render() {
    return (
      
      <div> 
         <Notifications />           
        <h2>Add Bank Details</h2>
         <br/>
        <form onSubmit={ this.onFormSubmit }>
        <label htmlFor="BankName"><b> Bank Name</b></label>
         <select name="bankname" id="bankname">
         <option>Select Bank</option>
                {
                 this.state.banks.map((obj, key) => {
                     return <option key={key} value={obj.bankID}>{obj.bankName}</option>
                    
                 })
              }</select>

      <label htmlFor="Company"><b> Company Name</b></label> 
        <select name="company" id="company">
         <option>Select Company</option>
                {
                 this.state.companies.map((obj, key) => {
                     return <option key={key} value={obj.companyID}>{obj.name}</option>
                    
                 })
              }</select> 

         <label htmlFor="BankName"><b> Branch Name</b></label>
         <input type="text" placeholder="Enter Branch Name" name="branchname"  id="branchname" required/>

        <label htmlFor="BranchCode"><b>Branch Code</b></label>
        <input type="number" placeholder="Enter Branch Code" name="branchcode" id="branchcode" required/>

        <label htmlFor="AccountNumber"><b>Account Number</b></label>
        <input type="number" placeholder="Enter AccountNumber" name="accountnumber" id="accountnumber" required/>

        <div className="clearfix">
          <button type="submit" className="savebtn">Save</button>
        </div>
        </form>
      </div>
    );
  }
}
 
export default BankDetail;
