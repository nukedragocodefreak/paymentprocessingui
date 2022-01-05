import React, { Component } from "react";
 
class CoverSheet extends Component {
  render() {
    return (
      <div>
      <h2>Process Payment</h2>
       <br/>
      <form>
      <label for="FirstName"><b>FirstName</b></label>
      <input type="text" placeholder="Enter FirstName" name="firstname" required/>

      <label for="LastName"><b>LastName</b></label>
      <input type="text" placeholder="Enter LastName" name="lastname" required/>

      <label for="Department"><b>Department name</b></label>
      <select>
         <option>Select Department</option>
       </select>
       <label for="dateofinv"><b>Date Of Invoice</b></label>
      <input type="date" placeholder="" name="dateofinvoice" required/>

      <label for="dateofpayment"><b>Date Of Payment</b></label>
      <input type="date" placeholder="t" name="dateofpayment" required/>

      <label for="manager"><b>Manager</b></label>
       <select>
         <option>Select Manager</option>
       </select>
     <b><label for="myfile">Upload an Invoice:</label></b>
      <input type="file" id="myfile" name="myfile" />
      <br/> <br/>
      <label for="BankName"><b> Bank Name</b></label>
       <select>
         <option>Select bank</option>
       </select>
      <label for="BranchCode"><b>Branch Code</b></label>
      <input type="text" placeholder="Enter Branch Code" name="branchcode" required/>

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
 
export default CoverSheet;
