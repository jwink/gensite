
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var exports = module.exports = {};


var LogoDiv = React.createClass({
  render:  function() {
    return (
      <img className="logo" src="images/firstkeylogo.png" />
    );
  }
});



var CtrlTextBox = React.createClass({
  render: function() {
  	return (
  	  <input></input>	
  	);
  }
});

exports.LogoDiv = LogoDiv;
exports.CtrlTextBox = CtrlTextBox;

