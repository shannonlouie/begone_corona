// /client/App.js
import React, { Component } from 'react';
import axios from 'axios';
import { blockStatement } from '@babel/types';
import { delay } from 'q';
import UWUForm from './components/UWUForm';
import style from 'bootstrap/dist/css/bootstrap.css';
import Warning from './components/Warning';
import Item from './components/Item';
import Family from './components/Family';
import {Card, Form, Button, Nav, FormControl, Alert, Navbar} from 'react-bootstrap';

 
 
 
class App extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };
  speed=2
 
 
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
  //  if (!this.state.intervalIsSet) {
    if (this.state.intervalIsSet) {
        let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }
 
  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
 
  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries
 
  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };
 
  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
 
    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };
 
  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });
 
    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };
 
  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });
 
    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };
 
  showChangeColor = (color, time) => {
    let x = document.getElementById("block")
    x.style.backgroundColor=color
    delay(time)
    x.style.backgroundColor="#F000"
  }
 
  parseMessageAndDoThing = (message,id) => {
    const note_list = JSON.parse(message);
    const x = document.getElementById(`block-${id}`);
    const clear_ratio = 0.75;
    let i = 1;
    const next_color = () => {
        if (i >= note_list.length) {
            return;
        }
        const val = note_list[i];
        console.log(val.color);
        x.style.backgroundColor = val.color;
        ++i;
        setTimeout(()=>show_clear(val), (1-clear_ratio) * val.duration*1000*this.speed);
    };
    const show_clear = (val) => {
        x.style.backgroundColor = "#0000";
        setTimeout(next_color, clear_ratio * val.duration*1000*this.speed);
    };
   
    next_color();
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
    const { data } = this.state;
    return (
      <div>
        
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

        <Family/>
      </div>
    );
  }
}
 
export default App;