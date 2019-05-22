import React from "react";
import TodoItems from "./TodoItems";
import "./App.css";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit" className="submitClass">
              add
            </button>
          </form>
          <TodoItems entries={this.props.items} />
        </div>
      </div>
    );
  }
}

export default TodoList;
