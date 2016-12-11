let React = require("react");
var ReactDOM = require('react-dom');
var components = require('Components');
let MainList = components.MainList;


(function() {
  "use strict";
  // find elements
  let root = document.querySelector('.mainlist');

  // create models
  let mainList = [
    {
      state: "All",
      todos: []
    }, {
      state: "Show",
      todos: []
    },
  ];

  ReactDOM.render(
    <MainList data={mainList}/>,
    root
  );

})();
