var React = require('react');
var AccountInfo = require('./AccountInfo.jsx');

var AccountBox = React.createClass({

changeCss: function(){
  document.getElementById('info').style = "visibility:visible;"
},


  render: function() {
    

    var allAccounts = this.props.accounts.map(function(account){
      return <div key={account.owner}> 
        <p>Owner: {account.owner} </p>
        <p>Amount: £{account.amount} </p>
        <AccountInfo />
        <button onClick={this.changeCss}>details</button>
      </div>
    }.bind(this))

    return (

      <div>

      <h2>{this.props.accounts[0].type}</h2>
      <h4>Total for Account Type: £{this.props.totals}</h4>
      {allAccounts}
      </div>
    );
  }

});

module.exports = AccountBox;

