import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';

class Item extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
   	
	}

	render() {
		return(
			<div>
                <Card>
                <Card.Body>
                    <Card.Title>Item</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{this.props.itemName}</Card.Subtitle>
                    <Card.Text>
                    {this.props.timeLast}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
            </div>
		)
	}
}

export default Item