import React, { Component } from "react";
import {Cities} from './cities';

class BankDetail extends Component {
  
  render() {
    fetch('https://localhost:44398/BankDetail/GetBanks')
  .then(response => response.json())
  .then(data => console.log(data));

    return (
      <div>
        
        <h2>Add Bank Details</h2>
         <br/>
        <form>
        <label htmlFor="BankName"><b> Bank Name</b></label>
         <select>
           <option>Select bank</option>
         </select>
         
         <label htmlFor="BankName"><b> Branch Name</b></label>
         <input type="text" placeholder="Enter Branch Name" name="branchname" required/>

        <label htmlFor="BranchCode"><b>Branch Code</b></label>
        <input type="text" placeholder="Enter Branch Code" name="branchcode" required/>

        <label htmlFor="AccountNumber"><b>Account Number</b></label>
        <input type="text" placeholder="Enter AccountNumber" name="accountnumber" required/>

        <div className="clearfix">
          <button type="submit" className="savebtn">Save</button>
        </div>
        </form>
      </div>
    );
  }
}
 
export default BankDetail;
