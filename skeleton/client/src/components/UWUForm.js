import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import {Card, Form, Button} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import DisplayPanel from './DisplayPanel';
 
 
 
class UWUForm extends Component {
  constructor(props) {
    super(props);
    this.state={value: '', UWUinatedtext: '', show: false}
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var a = this
    axios.post('http://localhost:3001/api/uwuinate', {
      words: this.state.value,
    })
    .then(function (response) {
      console.log(response);
      alert('A name was submitted: ' + response.data.UWUData);
      a.setState({UWUinatedtext: response.data.UWUData, show:true});
    })
    .catch(function (error) {
      console.log(error);
    });
      event.preventDefault();
  }

  // initialize our state
  state = {
  };
 
 
  componentDidMount() {
  }
 
  componentWillUnmount() {
  }
 
 
  sendUwUText = (message) => {
    axios.post('http://localhost:3001/api/updateData', {
      words: message,
    });
  }
 
  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    //console.log(this.props.propName)
    return (
        <div>
          <Card style = {{
      "padding-left": "10px",
      "padding-right": "10px",
      "padding-top": "10px",
      "padding-bottom": "10px",
      "margin-left": "10px",
      "margin-right": "10px",
      "margin-top": "10px",
      "margin-bottom": "10px",
      "border-bottom-width": "1px"
  }}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" value = {this.state.value} onChange = {this.handleChange}/>
              </Form.Group>
 
              <Button variant="primary" type="submit" href={this.props.propName} onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
            {this.state.show && <DisplayPanel title = "UWUinated Text" > {this.state.UWUinatedtext} </DisplayPanel>}

          </Card>
        </div>
      );
   
    }
}
 
export default UWUForm;