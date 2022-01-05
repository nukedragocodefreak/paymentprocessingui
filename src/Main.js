import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Company from "./pages/Company";
import BankDetail from "./pages/BankDetail";
import Department from "./pages/Department";
import CoverSheet from "./pages/CoverSheet";
import Employee from "./pages/Employee";
import Invoice from "./pages/Invoice";
import Supplier from "./pages/Supplier";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Payment Processing Platform</h1>
          <ul className="header" style={{ width:'150px', float:'left' }}>
            <li><NavLink exact to="/">Welcome</NavLink></li>
            <li><NavLink to="/Company">Company</NavLink></li>
            <li><NavLink to="/BankDetail">Bank Detail</NavLink></li>
            <li><NavLink to="/Department">Department</NavLink></li>
            <li><NavLink to="/Employee">Employee</NavLink></li>
            <li><NavLink to="/Supplier">Supplier</NavLink></li>
            <li><NavLink to="/CoverSheet">Cover sheet</NavLink></li>

          </ul>
          
          <div className="content" style={{ width:'1100px', float:'right' }}>
            <Route exact path="/" component={Home}/>
            <Route path="/Company" component={Company}/>
            <Route path="/BankDetail" component={BankDetail}/>
            <Route path="/Department" component={Department}/>
            <Route path="/Employee" component={Employee}/>
            <Route path="/Invoice" component={Invoice}/>
            <Route path="/Supplier" component={Supplier}/>
            <Route path="/CoverSheet" component={CoverSheet}/>
          </div>
          </div>
      </HashRouter>
    );
  }
}

export default Main;
