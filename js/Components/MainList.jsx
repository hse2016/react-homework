let React = require("react");

var components = require('Components');
let TodoList = require('./TodoList').TodoList;

class MainList extends React.Component {

  addTodoList() {
    this.props.data.push({todos:[], completed: false});
    this.setState({data: this.props.data});
  }

  render() {
    let mainList, data=this.props.data,
        show = data.show;

    if (data.length > 0) {
      mainList = data.map(function(item, index) {
        return (
          <TodoList key={index} data={item}/>
        );
      });
    } else {
      mainList = <p>No todo lists</p>;
    }

    return (
      <div className="mainlist">
        <div className="list-wrapper">
          {mainList}
        </div>
        <center>
          <button
             className="add"
             onClick={this.addTodoList.bind(this)}>
            +
          </button>
        </center>
      </div>
    );
  }
}

module.exports = {
  MainList: MainList
};
