import React, { Component } from "react";
import CustomerListCms from "./components/Customer-list-cms/Customer-list-cms.js";
import "../src/App.css";
import AddCustomerCms from "./components/Add-new-customer-cms/Add-new-customer-cms.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <CustomerListCms />
        <AddCustomerCms />
      </div>
    );
  }
}
export default App;
