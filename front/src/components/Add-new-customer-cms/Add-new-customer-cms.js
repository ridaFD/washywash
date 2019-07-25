import React, { Component } from "react";
import "./Add-new-customer-cms.css";
class AddCustomerCms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false
    };
  }

  handleClick = event => {
    this.setState({
      isUser: !this.state.isUser
    });
  };
  render() {
    return (
      <div className="AddFormUser">
        <div className="Seach-for-user">
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="Add-user-button">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={this.handleClick}
          >
            Add User
          </button>
        </div>
        {this.state.isUser ? (
          <div className="Add-User-Form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Last Name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Middle Name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Gender"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Addres"
              />
            </div>
            <div className="Add-user-button">
              <button type="button" class="btn btn-outline-primary">
                Add
              </button>
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default AddCustomerCms;
