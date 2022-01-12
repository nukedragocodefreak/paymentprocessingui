import React, { Component } from "react";
 
class ViewCoverSheet extends Component {
  state = {
    coversheet: []
}
componentDidMount() {
  fetch('https://localhost:44398/CoverSheet/GetCoverSheet')
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
      <tbody>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
          {this.state.coversheet.map((item, i) => (
            <tr key={i}>
              <td>{item.coverSheetID}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dateOfInvoce}</td>
            </tr>
          ))}
    </tbody>
    </div>
    );
  }
}
 
export default ViewCoverSheet;
