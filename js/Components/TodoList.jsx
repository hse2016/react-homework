let React = require("react");

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'All',
    };
  }

  changeShow(show, e) {
    e.preventDefault();
    this.setState({show: show});
  }

  render() {
    let data = this.props.data,
        show = this.state.show;
    return (
      <div className="todoapp todolist">
        <header className="header">
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
          <button className="destroy-todolist">X</button>
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            render todo here
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item left</span>
          <ul className="filters">
            <li>
              <a
                 className={(show === 'All' ? 'selected': '') + ' btn'}
                 onClick={this.changeShow.bind(this, 'All')}
                 >All</a>
            </li>
            <li>
              <a
                 className={(show === 'Active' ? 'selected': '') + ' btn'}
                 onClick={this.changeShow.bind(this, 'Active')}
                 >Active</a>
            </li>
            <li>
              <a
                 className={(show === 'Completed' ? 'selected': '') + ' btn'}
                 onClick={this.changeShow.bind(this, 'Completed')}
                 >Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </div>
    );
  }
}

module.exports = {TodoList : TodoList}
