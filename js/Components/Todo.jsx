let React = require("react");

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };
    console.log(props);
  }

  render() {
    let data = this.props.data;

    let completed = this.state.completed;

    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed ? "checked" : ""} />
            <label>{data.title}</label>
            <button className="destroy"></button>
        </div>
        <input className="edit" value={data.title} />
      </li>
    );
  }
}

module.exports = {Todo : Todo}
