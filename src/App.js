import React from 'react';
import Toolbar from './components/Toolbar'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  title: "This is the first title : ",
      number: 3,
		}
	}

  changeTitle = (value) => {
   this.setState({number: value})
   console.log('hi')
  }

	render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <h4>{this.state.number}</h4>
        <Toolbar changeTitle={this.changeTitle} />
      </>
    );
  }
}
