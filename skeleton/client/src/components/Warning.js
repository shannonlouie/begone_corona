import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';

class Warning extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
   	
	}

	render() {
		return(
			<div>
				<Alert show={this.state.show} variant="success">
        		<Alert.Heading>{'Warning cool gifs ahead'}</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => this.setState({show: false})} variant="outline-success">
            CLICK TO CLOSE
          </Button>
        </div>
      </Alert>
      </div>
		)
	}
}

export default Warning