import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./component/TodoList";

import Todoitem from "./component/Todoitems";
import React, { Component } from "react";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

//import styled from "styled-components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, items: "ashish" },
        { id: 2, items: "mahima" },
        { id: 3, items: "rojwol" }
      ]
    };
  }

  handleFormData = FormData => {
    console.log(FormData);
    this.setState({ items: [FormData, ...this.state.items] });
  };

  handleEditing = data => {
    let items = this.state.items.map(function(items) {
      if (items.id === data.id) {
        return data;
      }
      return items;
    });
    this.setState({ items });
  };
  render() {
    return (
      <div>
        <Todoitem FormData={this.handleFormData} />
        {this.state.items.map(items => {
          return (
            <TodoList
              key={items.id}
              items={items}
              delete={this.handleDelete}
              edit={this.handleEditing}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
