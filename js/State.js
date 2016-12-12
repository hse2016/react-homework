"use strict";

let stateObject;


/**
 * Load state from local Storage
 */
function get() {
  let state = window.localStorage.getItem("#State");
  try {
    state = JSON.parse(state);
  } catch (error) {
    return undefined;
  }

  return state;
};


/**
 * Set state object as application main object
 * Then this object could be by State.save function.
 */
function set(state) {
  stateObject = state;
};


function save() {
  if (!stateObject) {
    throw new Error('ValueError: default state is undefined.');
  }
  window.localStorage["#State"] = JSON.stringify(stateObject);
}


module.exports = {
  get: get,
  set: set,
  save: save
};
