import React from "react";


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: '',
      num2: '',
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  setNum1(e) {
    const num1 = parseInt(e.target.value) || '';
    this.setState({
      num1
    })
  }

  setNum2(e) {
    const num2 = e.target.value || '';
    this.setState({
      num2
    })
  }



  render() {
      const { num1, num2, result } = this.state;
    return (

      <div>
        <h1>{result}</h1>
        <div>
          <input onChange={this.setNum1} type="text" value={this.state.num1} />
          <input onChange={this.setNum2} type="text" value={this.state.num2} />
        </div>
        <div>
          <button 
            onClick={ () => this.setState( {result: ((parseInt(num1) || 0) + (parseInt(num2) || 0))})}
          >
              +
          </button>
          <button 
            onClick={ () => this.setState( {result: parseInt(num1) || 0 - parseInt(num2) || 0})}
          >
              -
          </button>
          <button onClick={() => this.setState({
            result: 0,
            num2: '',
            num1: ''
          })}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;