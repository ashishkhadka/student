import React, { Component } from "react";

class Todolist extends Component {
  state = {
    items: this.props.items.items,
    isEditing: false
  };
  handleDelete = () => {
    this.props.delete(this.props.items.id);
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.edit({ id: this.props.items.id });
    this.setState({ isEditing: false });
  };
  handleEditing = () => {
    this.setState({ isEditing: true });
  };

  render() {
    const { items } = this.state;
    if (this.state.isEditing) {
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
                placeholder="add items"
              ></input>
            </div>

            <button type="submit" className="btn btn-sm btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container">
            <div className="card w-50 mx-auto mt-3">
              <div className="card-header">
                <h1>
                  <div className="float-right mx-3 "></div>

                  {this.props.items.items}
                  <div className="float-right">
                    <i className="fas fa-trash" onClick={this.handleDelete}></i>
                    <i className="fas fa-edit" onClick={this.handleEditing}></i>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Todolist;
