import React from 'react';
import DisplayComponent from '../Components/DisplayComponent'
import InputComponent from '../Components/InputComponent'
import OrderButtonComponent from '../Components/OrderButtonComponent'

class MachineContainer extends React.Component {


  render() {
    return(
      <div className="machine-wrapper">
        <div className="machine">
          <DisplayComponent />
          <InputComponent />
          <OrderButtonComponent />
        </div>
      </div>
    );
  }
}

export default MachineContainer;
