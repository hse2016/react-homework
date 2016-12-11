let React = require("react");
let Todo = require("./Todo").Todo;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'All',
      completedNumber: 0
    };
  }

  changeShow(show, e) {
    e.preventDefault();
    this.setState({show: show});
  }

  calculateCompleted() {
    let todos = this.props.data.todos,
        completedNumber = 0,
        allCompleted = true;
    for (let i = 0, size = todos.length; i < size; ++i) {
      if (todos[i].completed) {
        ++completedNumber;
      }
    }

    this.setState({completedNumber: completedNumber});
  }

  render() {
    let data = this.props.data,
        show = this.state.show,
        todos = data.todos,
        todosNumber = todos.length,
        completedNumber = this.state.completedNumber;
    let allCompleted = (todosNumber === completedNumber);

    let todoTemplates;
    let todoListHandlers = {
      calculateCompleted: this.calculateCompleted.bind(this)
    };

    if (todosNumber > 0) {
      todoTemplates = todos.map(function(item, index) {
        if (show == 'All' ||
            (item.completed && show == "Completed") ||
            (!item.completed && show == "Active")) {
          return (
            <Todo
               key={index}
               data={item}
               handlers={todoListHandlers}/>
          );
        }
        return "";
      });
    } else {
      todoTemplates = <p>No todo lists</p>;
    }

    return (
      <div className="todoapp todolist">
        <header className="header">
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
          <button className="destroy-todolist">X</button>
        </header>
        <section className="main">
          <input
             className="toggle-all"
             type="checkbox"
             checked={allCompleted}/>
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {todoTemplates}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count"><strong>{completedNumber}</strong> item left</span>
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
          <button className="clear-completed">Clear completed</button>
        </footer>
      </div>
    );
  }
}

module.exports = {TodoList : TodoList}
