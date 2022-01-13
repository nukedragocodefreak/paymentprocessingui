import React, { Component } from "react";
import {SERVER_URL} from '../Constants/Constants';
 
class ViewCoverSheet extends Component {
  state = {
    coversheet: []
}
componentDidMount() {
  fetch(SERVER_URL+'/CoverSheet/GetCoverSheet')
   .then(function(res) {
       return res.json();
   }).then((json)=> {
       this.setState({
        coversheet: json.responseObject
       })
   });

}

  render() {
    return (
      <div>
      <tbody id="customers">
          <tr>
            <th>coverSheetID</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>dateOfInvoce</th>
            <th>Transaction Status</th>
            <th>Manage</th>
          </tr>
          {this.state.coversheet.map((item, i) => (
            <tr key={i}>
              <td>{item.coverSheetID}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dateOfInvoce}</td>
              <td>{item.fK_PaymentStatusID}</td>
              <td><button type="button" className="button button2">Edit</button>
                 <button type="button" className="button">View</button>
              </td>
            </tr>
          ))}
    </tbody>
    </div>
    );
  }
}
 
export default ViewCoverSheet;
