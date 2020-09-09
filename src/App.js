import React from 'react';
import Toolbar from './components/Toolbar'
import Window from './components/Window'
import NumberDisplay from './components/NumberDisplay'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  title: "This is the first title : ",
      titlesArchive: [],
      numbers: [],
		}
	}

  changeTitle = (value) => {
    this.setState({
      title: this.state.title + value,
    })
  }

  addNumber = (newNumber) => {
    const numbersArray = this.state.numbers
    numbersArray.push(newNumber)
    this.setState({
      numbers: numbersArray
    })
  }

  updateArchive = (title) => {
    const lastTitle = this.state.title
    const titlesArray = this.state.titlesArchive
    titlesArray.push(lastTitle)
    this.setState({
      titlesArchive: titlesArray
    })
  }

  render() {
    const { title, numbers, titlesArchive } = this.state
    return (
      <>
        <Toolbar
          changeTitle={this.changeTitle}
          addNumber={this.addNumber}
          updateArchive={this.updateArchive}
        />
        <div className="main">
          <h1 id="main-title">{title}</h1>
          <NumberDisplay numbers={numbers} titlesArchive={titlesArchive} />
        </div>
      </>
    );
  }
}
