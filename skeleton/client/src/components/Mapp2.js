import React from "react";
import Map from "./Map.js"
import {
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import fire from './fire';
import CalloutCard from './CalloutCard'

const MapWrapped = withScriptjs(withGoogleMap(Map));


export default class Mapp2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {people: [], safe_areas: [], not_safe_areas: [], responders: [], extra: []};
	}
	componentWillMount(){


		//
		// reference to SAFE in firebase database
		//
		let safe_areas_ref = fire.database().ref('safeloc').orderByKey().limitToLast(100);
		safe_areas_ref.on('child_added', snapshot => {
		  /* Update React state  */
		  let safe_area = { text: JSON.stringify(snapshot.val()), id: snapshot.key };
		  this.setState({ safe_areas: [safe_area].concat(this.state.safe_areas) });
		})

		//
		// reference to RESPONDERS in firebase database
		//
		safe_areas_ref = fire.database().ref('responders').orderByKey().limitToLast(100);
		safe_areas_ref.on('child_added', snapshot => {
		  /* Update React state  */
		  let safe_area = { text: JSON.stringify(snapshot.val()), id: snapshot.key };
		  this.setState({ responders: [safe_area].concat(this.state.responders) });
		})


		//
		// reference to EXTRA in firebase database
		//
		safe_areas_ref = fire.database().ref('type').orderByKey().limitToLast(100);
		safe_areas_ref.on('child_added', snapshot => {
		  /* Update React state  */
		  let safe_area = { text: JSON.stringify(snapshot.val()), id: snapshot.key };
		  this.setState({ extra: [safe_area].concat(this.state.extra) });
		})


		//
		// reference to NOTSAGE in firebase database
		//
		let not_safe_areas_ref = fire.database().ref('crs').orderByKey().limitToLast(100);
		not_safe_areas_ref.on('child_added', snapshot => {
		  /* Update React state e */
		  let not_safe_area = { text: JSON.stringify(snapshot.val()), id: snapshot.key };
		  this.setState({ not_safe_areas: [not_safe_area].concat(this.state.not_safe_areas) });
		})

		//
		// reference to PEOPLE in firebase database
		//
		let people_ref = fire.database().ref('people').orderByKey().limitToLast(100);
		people_ref.on('child_added', snapshot => {
		  /* Update React state */
		  let person = { text: JSON.stringify(snapshot.val()), id: snapshot.key };
		  this.setState({ people: [person].concat(this.state.people) });
		})
  

  
  
	  }

	  

  getLocation = () => {
	let x = document.getElementById("demo")
	console.log('this is:', this);

	if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

showPosition = (position) => {
	let x = document.getElementById("demo")

  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

showError = (error) => {
	let x = document.getElementById("demo")

  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
handleClick = () => {
    console.log('this is:', this);
  }

	render() {
	return (
		<div style={{"backgroundColor":"#B2EADE"}} >
				<div style={{ width: "50vw", height: "100vh" }}>
					
					<MapWrapped
						safeloc = {this.state.safe_areas}
						responders = {this.state.responders}
						type = {this.state.extra}
						crs = {this.state.not_safe_areas}
						people = {this.state.people}
						googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp6libraries=geometry,drawing,places&key=AIzaSyBGW1DRYbhOUcZjsxLUE-pOeVE_6KbFQ20'}
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `100%` }} />}
						mapElement={<div style={{ height: `100%` }} />}
						showLegend={false}
					/>
				</div>




		</div>
		
	);
}
}
