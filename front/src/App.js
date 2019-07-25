import React, { Component } from "react";
import AddCustomerCms from "./components/Add-new-customer-cms/Add-new-customer-cms.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <AddCustomerCms />
      </div>
    );
  }
}
export default App;
