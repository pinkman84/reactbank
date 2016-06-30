var React = require('react');
var AccountBox = require('./AccountBox.jsx');
var SampleAccounts = require('../sample_accounts.js')

var BankBox = React.createClass({

  getInitialState: function() {
    return {
      accounts: SampleAccounts 
    };
  },

  filteredAccounts: function(type){
    var accounts = this.state.accounts.filter(function(account){
      return (account.type === type)
    })
    return accounts
  },

  totalMoney: function(accounts){

    return accounts.reduce(function(sum, account) { return sum + parseInt(account.amount) }, 0);

    // var amounts = accounts.map(function(account){
    //   return (account.amount)
    // })
    // return amounts.reduce(function(a, b){return a + parseInt(b)}, 0)
  },

  addInterest: function(){
    var accounts = this.state.accounts.map(function(account){
      account.amount = (account.amount * 1.1).toFixed(2)
      return (account)
    })
    this.setState({accounts: accounts})
  },


  render: function() {
    return (
      <div>
      <h1> React Bank </h1>
      <h2> Total in Bank: £{this.totalMoney(this.state.accounts)}</h2>
      <div className="personal" >
      <AccountBox accounts={this.filteredAccounts('Personal')} totals={this.totalMoney(this.filteredAccounts('Personal'))}/>
      </div>
      <div className="business">
      <AccountBox  accounts={this.filteredAccounts('Business')} totals={this.totalMoney(this.filteredAccounts('Business'))} />
      </div>
      <button onClick={this.addInterest}>10% Interest</button>

      </div>
      );
  }

});

module.exports = BankBox;