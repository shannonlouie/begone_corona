import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import Item from './Item'
import Grocery from './Grocery'
import Toiletries from './Toiletries'

class Family extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
   	
	}

	render() {
		return(
			<div>
                <Card>
                <Card.Body>
                    <Card.Title>Family</Card.Title>
                    <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Number of people in your family</Form.Label>
                        <Form.Control as="textarea" rows="1" />
                    </Form.Group>
                    </Form>
                    <Grocery/>
                    <Toiletries> 
                        <Item itemName="toilet paper" timeLast="282 days"/>
                    </Toiletries>
       
                </Card.Body>
                </Card>
            </div>
		)
	}
}

export default Family