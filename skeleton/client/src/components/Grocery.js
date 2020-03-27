import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import Item from './Item'
class Grocery extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
   	
	}

	render() {
		return(
			<div>
                <Card>
                <Card.Body>
                    <Card.Title>Groceries:</Card.Title>
                    
                    <Item itemName="shatatoes" timeLast="38 days"/>
                    <Item itemName="soup" timeLast="8 days"/>
                    <Item itemName="chicken" timeLast="28 days"/>
                </Card.Body>
                </Card>
            </div>
		)
	}
}

export default Grocery