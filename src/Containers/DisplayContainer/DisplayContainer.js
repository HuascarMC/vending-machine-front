import React from 'react';

class DisplayContainer extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
    selection: ""
  }

}

setSelection(choice) {
  this.setState({
    selection: choice
  })
  this.updateItem(choice)
}

updateItem(choice) {
  this.props.updateItem(choice)
}

 render() {

  return(

  <div className="display">
    <ul>
      <li><p className="price">$0.65<button className="coke" onClick={() => this.setSelection("coke") } >COKE</button></p></li>
      <li><p className="price">$1.00<button className="pepsi" onClick={() => this.setSelection("pepsi") }>PEPSI</button></p></li>
      <li><p className="price">$1.50<button className="soda" onClick={() => this.setSelection("soda") }>SODA</button></p></li>
      <li><p className="price">$2.00<button className="water" onClick={() =>this.setSelection("water") }>WATER</button></p></li>
    </ul>
 </div>
   );
  }
 }

export default DisplayContainer;
