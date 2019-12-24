import React, { Component } from "react";
import uuid from "uuid";

class Todoitems extends Component {
  constructor() {
    super();
    this.state = {
      items: ""
    };
  }
  handleChange = e => {
    this.setState({ items: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { items } = this.state;
    this.props.FormData({ items: items, id: uuid() });
    this.setState({ items: "" });
  };
  render() {
    return (
      <div className="container">
        <form
          className="w-50 mx-auto mt-50"
          style={{
            boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.2)",
            padding: "20px",
            marginTop: "30px"
          }}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>enter</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.items}
              placeholder="add items"
            ></input>
          </div>

          <button type="submit" className="btn btn-sm btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Todoitems;
