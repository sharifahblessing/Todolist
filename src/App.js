import React from "react";
import "./App.css";
import Example from "./Example";
import Todolist from "./Todolist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value === "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }
    console.log(this.state.items);

    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <Example />
        <Todolist items={this.state.items} onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
