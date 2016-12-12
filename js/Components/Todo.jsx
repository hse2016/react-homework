let React = require("react");
let state = require('State');

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  toggleCompleted() {
    let data = this.props.data;
    data.completed = !data.completed;
    this.setState({data: data});
    this.props.handlers.calculateTodos();
    state.save();
  }

  startEdit() {
    this.setState({editing: true});
  }

  finishEdit(event) {
    if (event.type === 'keypress' && event.key !== 'Enter') return;

    let title = event.target.value;
    let data = this.props.data;
    data.title = title;
    this.setState({editing: false, data: data});
    state.save();
  }

  render() {
    let editing = this.state.editing;
    let data = this.props.data;

    let completed = data.completed;

    return (
      <li className={(editing ? "editing" : "") + (completed ? " completed" : "")}>
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={completed ? "checked" : ""}
                 onChange={this.toggleCompleted.bind(this)}/>
          <label onDoubleClick={this.startEdit.bind(this)}>
            {data.title}
          </label>
          <button
             className="destroy"
             onClick={this.props.handlers.removeTodo}>
          </button>
        </div>
        <input
           className="edit"
           defaultValue={data.title}
           onKeyPress={this.finishEdit.bind(this)}
           onBlur={this.finishEdit.bind(this)}/>
      </li>
    );
  }
}

module.exports = {Todo : Todo};
