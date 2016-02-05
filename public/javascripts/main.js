
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var CtrlTextBox = require('ctrlTextBox');

var LoginForm = React.createClass({
  handleUserName: function (e) {
    console.log(e.target.value);
  },
  handlePassword: function (e) {
    console.log(e.target.value);
  },
  handleKeyPress: function(e) {
    if (e.charCode == 13) {
      console.log("Submitted!");
    }
  },  	
  render:  function() {
    return(
      <div>	
        <CtrlTextBox handleChange={this.handleUserName} handleKeyPress={this.handleKeyPress} />
        <CtrlTextBox handleChange={this.handlePassword} handleKeyPress={this.handleKeyPress} />
      </div>  
    );
  }
});

ReactDOM.render(
  <LoginForm />,
    document.getElementById('global-div')
);

