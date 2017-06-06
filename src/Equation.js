import React, { Component } from 'react';
import './Equation.css';

class Equation extends Component {
  render() {
    return (
      <tr className="Equation">
        <td>{this.props.operand1}</td>
        <td>{this.props.operator}</td>
        <td>{this.props.operand2}</td>
        <td>=</td>
        <td><input className="Answer" id={"ans" + this.props.id} onBlur={this.props.onBlur} /></td>
        <td><img src={this.props.resultImage} className="ResultImage" alt="result"/></td>
      </tr>
    );
  }
}

export default Equation;