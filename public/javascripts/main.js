
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var basic_components = require('./basic_components');

ReactDOM.render(
  <basic_components.LogoDiv />,
    document.getElementById('global-div')
);

