import React from 'react';
import Toolbar from './components/Toolbar'
import Window from './components/Window'
import NumberDisplay from './components/NumberDisplay'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  title: "This is the first title : ",
      previousTitle: "",
      currentNumber: "",
      numbers: [1,2,3],
		}
	}

  changeTitle = (value) => {
    this.setState({
      previousTitle: this.state.title,
      title: this.state.title + value,
      currentNumber: this.state.number + value
    })
  }

  addNumber = (newNumber) => {
    const numbersArray = this.state.numbers
    numbersArray.push(newNumber)
    this.setState({
      numbers: numbersArray
    })
  }

	render() {
    return (
      <>
        <Toolbar changeTitle={this.changeTitle} addNumber={this.addNumber} previousTitle={this.state.previousTitle} />
        <h1>{this.state.title}</h1>
        <NumberDisplay numbers={this.state.numbers} />
      </>
    );
  }
}
