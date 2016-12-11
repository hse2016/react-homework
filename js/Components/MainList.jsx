let React = require("react");

var components = require('Components');
let TodoList = require('./TodoList').TodoList;

class MainList extends React.Component {
  render() {
    let mainList, data=this.props.data;

    if (data.length > 0) {
      mainList = data.map(function(item, index) {
        return (
          <TodoList key={index} data={data}/>
        )
      })
    } else {
      mainList = <p>No todo lists</p>
    }

    return (
      <div className="mainlist">
        <div className="list-wrapper">
          {mainList}
        </div>
        <center><button className="add">+</button></center>
      </div>
    );
  }
}

module.exports = {
  MainList: MainList
};
