// Write your code here
import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawFifty = () => {
    this.setState(prevState => ({balance: prevState.balance - 50}))
  }

  withdrawHundred = () => {
    this.setState(prevState => ({balance: prevState.balance - 100}))
  }

  withdrawTwoHundred = () => {
    this.setState(prevState => ({balance: prevState.balance - 200}))
  }

  withdrawFiveHundred = () => {
    this.setState(prevState => ({balance: prevState.balance - 500}))
  }

  render() {
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="name-container">
            <p className="icon">S</p>
            <p className="name">Sarah Williams</p>
          </div>

          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <div>
              <p className="balance-amount">{balance}</p>
              <p className="balance-currency">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-title">Withdraw</p>
          <p className="denomination-title">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-buttons-container">
            <li type="button" className="button" onClick={this.withdrawFifty}>
              50
            </li>
            <li type="button" className="button" onClick={this.withdrawHundred}>
              100
            </li>
            <li
              type="button"
              className="button"
              onClick={this.withdrawTwoHundred}
            >
              200
            </li>
            <li
              type="button"
              className="button"
              onClick={this.withdrawFiveHundred}
            >
              500
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
