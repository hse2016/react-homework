let React = require("react");
var ReactDOM = require('react-dom');
var components = require('Components');
let MainList = components.MainList;
let state = require('State');

(function() {
  "use strict";
  // find elements
  let root = document.querySelector('.mainlist');

  // create models
  let mainList = state.get();
  if (!mainList) {
    mainList = [{todos : []}];
    state.set(mainList);
    state.save();
  } else {
    state.set(mainList);
  }

  ReactDOM.render(<MainList data = {mainList} />, root);

})();
