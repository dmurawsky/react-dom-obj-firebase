var firebase = require('firebase');
var ReactDOM = require('react-dom');
var Redomo = require('react-dom-obj');

function start(path) {
  firebase.database().ref(path).on('value', cb);
}

function stop(path) {
  firebase.database().ref(path).off('value', cb);
}

function cb(snap) {
  var val = snap.val();
  ReactDOM.render(Redomo(val.dom), document.getElementById(val.id));
}

module.exports = {
  init: firebase.initializeApp,
  start: start,
  stop: stop
};
