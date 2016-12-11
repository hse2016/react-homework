let React = require("react");
let Todo = require("./Todo").Todo;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'All'
    };
  }

  addTodo(event) {
    if (event.type === 'keypress' && event.key !== 'Enter') return;

    let title = event.target.value;
    this.props.data.todos.push({title: title, completed: false});
    this.setState({data: this.props.data});
    event.target.value = "";
  }

  removeTodo(key) {
    this.props.data.todos.splice(key, 1);
    this.setState({
      data: this.props.data
    });
  }


  clearCompleted() {
    let active = [],
        todos = this.props.data.todos;
    for (let i = 0, size = todos.length; i < size; ++i) {
      if (!todos[i].completed)
        active.push(todos[i]);
    }

    this.props.data.todos = active;

    this.setState({
      data: this.props.data});
  }

  changeShow(show, e) {
    e.preventDefault();
    this.setState({show: show});
  }

  calculateTodos() {
    this.forceUpdate();
  }

  render() {
    let data = this.props.data,
        show = this.state.show,
        todos = data.todos,
        todosNumber = todos.length,
        completedNumber = 0;

    let todoTemplates,
        calculateTodos = this.calculateTodos.bind(this);

    for (let i = 0, size = todos.length; i < size; ++i) {
      if (todos[i].completed) {
        ++completedNumber;
      }
    }

    let allCompleted = (todosNumber === completedNumber);


    if (todosNumber > 0) {
      todoTemplates = todos.map((item, index) => {
        if (show == 'All' ||
            (item.completed && show == "Completed") ||
            (!item.completed && show == "Active")) {
          return (
            <Todo
               key={index}
               data={item}
               handlers={{
                 calculateTodos: calculateTodos,
                 removeTodo: this.removeTodo.bind(this, index)
               }}/>
          );
        }
        return "";
      });
    } else {
      todoTemplates = "";
    }

    let footer = (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todosNumber - completedNumber}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a className={(show === 'All' ? 'selected': '') + ' btn'}
               onClick={this.changeShow.bind(this, 'All')}>
              All
            </a>
          </li>
          <li>
            <a className={(show === 'Active' ? 'selected': '') + ' btn'}
               onClick={this.changeShow.bind(this, 'Active')}>
              Active
            </a>
          </li>
          <li>
            <a className={(show === 'Completed' ? 'selected': '') + ' btn'}
               onClick={this.changeShow.bind(this, 'Completed')}>
              Completed
            </a>
          </li>
        </ul>
        <button
           className="clear-completed"
           onClick={this.clearCompleted.bind(this)}>
          Clear completed
        </button>
      </footer>);

    return (
      <div className="todoapp todolist">
        <header className="header">
          <input
             className="new-todo"
             placeholder="What needs to be done?"
             onKeyPress={this.addTodo.bind(this)}/>
          <button
             className="destroy-todolist"
             onClick={this.props.handlers.removeTodoList}>
            X
          </button>
        </header>
        <section className="main">
          <input
             className="toggle-all"
             type="checkbox"
             checked={allCompleted}
             onChange={()=>{}}/> {/* костыль */}
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {todoTemplates}
          </ul>
        </section>
        {todoTemplates ? footer : ""}
      </div>
    );
  }
}

module.exports = {TodoList : TodoList};
