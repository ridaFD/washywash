import React, { Component } from "react";
import "./Customer-list-cms.css";
class CustomerListCms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="customer-list-cms">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Middle Name</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Saaed</td>

              <td>
                <button type="button" class="btn btn-outline-primary">
                  Edit
                </button>
                <button type="button" class="btn btn-outline-primary">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CustomerListCms;
