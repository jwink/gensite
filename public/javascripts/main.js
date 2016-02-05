
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

//var basic_components = require('./basic_components');

var CtrlTextBox = require('ctrlTextBox');



var LoginForm = React.createClass({
  handleChange: function (e) {
    console.log(e.target.value);
  },	
  render:  function() {
    return(
        <CtrlTextBox handleChange={this.handleChange}/>    
    );
  }
});

ReactDOM.render(
  <LoginForm />,
    document.getElementById('global-div')
);

