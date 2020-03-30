import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button, Alert, ListGroup, ListGroupItem} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import Item from './Item';
import Image from 'react-bootstrap/Image';
import emailPic from '../images/email-icon1.png';
import phonePic from '../images/phone-icon1.png';
import urgentNeedsPic from '../images/list-icon1.png';

class CalloutCard extends Component {
	constructor(props) {
    super(props);
    this.state={show: true}
   	
	}

	render() {
		return(
			<div>
				<Card>
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem><Image src={emailPic} thumbnail />{this.props.email}</ListGroupItem>
            <ListGroupItem><Image src={phonePic} thumbnail />{this.props.phoneNumber}</ListGroupItem>
            <ListGroupItem><Image src={urgentNeedsPic} thumbnail /><Card.Link href="#">List of Urgent Needs</Card.Link></ListGroupItem>
          </ListGroup>
          <Card.Body>
        <Card.Link href="#">Google Maps Location</Card.Link>
        <Card.Link href="#">Sign up to donate</Card.Link>
  </Card.Body>
</Card>
        </Card>
      </div>
		)
	}
}

export default CalloutCard