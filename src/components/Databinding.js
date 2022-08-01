import React, { Component } from 'react';

class Databinding extends Component {
	
constructor() {
	super();
	this.state = {
	brand: "Mercedes Benz",
    color: 'Navy blue',
    year: '2021',
    subject: ''
	};
}
handleChange = event => {
    this.setState({
      subject: event.target.value
    })
  }

render() {
	return (
	<div style={{ textAlign: "center" }}>
		<h4 style={{ color: "#68cf48" }}>Input Registered Course:</h4>
        <input style={{ width: '25%', height: '40px', borderRadius: '5px' }}type='text' placeholder='course' onChange={this.handleChange}/>
        <p>I Registered for {this.state.subject}</p>
	</div>
	)
}
}

export default Databinding;
