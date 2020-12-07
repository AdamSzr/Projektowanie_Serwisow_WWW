import { Button } from 'react-bootstrap';
import React, { Component } from 'react'


// DOCS
// https://react-bootstrap.github.io/components/buttons/

class BootstrapComponent extends Component {
	constructor() {
		super();
	}

	render() {
		return (<div> <Button variant="primary">Bootstrap Primary Button</Button></div>)
	}
}

export default BootstrapComponent;