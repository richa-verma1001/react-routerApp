var React = require('React');

var Main = React.createClass({
  render: function() {
    return (
      <div className="banner">
        This is Main
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
