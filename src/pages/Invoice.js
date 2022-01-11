import React, { Component } from "react";
import Notifications, {notify} from 'react-notify-toast';
class Invoice extends Component {
  render() {
    return (
      <div>
      <h2>Add Departments</h2>
       <br/>
      <form>
      <label for="BankName"><b> Bank Name</b></label>
       <select>
         <option>Select bank</option>
       </select>
      <label for="BranchCode"><b>Ulpoad File</b></label>
      <input type="file" placeholder="Enter Branch Code" name="branchcode" required/>

      <label for="AccountNumber"><b>Account Number</b></label>
      <input type="text" placeholder="Enter AccountNumber" name="accountnumber" required/>

      <div class="clearfix">
        <button type="submit" className="savebtn">Save</button>
      </div>
      </form>
    </div>
    );
  }
}
 
export default Invoice;
