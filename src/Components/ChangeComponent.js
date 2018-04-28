import React from 'react';

class ChangeComponent extends React.Component {

  generateChange(change) {
    var htmlChange = []
    for(var i = 0; i < change.length; i++) {
      htmlChange.unshift(this.generateCoin(change[i]))
    }
    console.log(change);
    return htmlChange
  }

  generateCoin(coin) {
    switch(coin) {
      case "PENNY":
      return <li><p className="coinValue change">{coin.toString()}$0.01<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
      case "NICKEL":
      return <li><p className="coinValue change">{coin.toString()}$0.05<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
      case "DIME":
      return <li><p className="coinValue change">{coin.toString()}$0.10<button className="coin silver" onClick={ () => this.updateBalance(0.05) }></button></p></li>
      case "QUARTER":
      return <li><p className="coinValue change">{coin.toString()}$0.25<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
      case "DOLLAR":
      return <li><p className="coinValue change">{coin.toString()}$1.00<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
    }
  }

  render() {
    var change;
    if ((typeof this.props.changeTotal) == "number") {
      change = this.generateChange(ConvertToChange(this.props.changeTotal))
    } else {
      change = this.generateChange(this.props.changeTotal)
    }
    return(
      <div className="change-box">
        { change }
      </div>
    );
  }
}

export default ChangeComponent;