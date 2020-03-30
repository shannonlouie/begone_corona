import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";


function Map(props) {
  const [selectedPark, setSelectedPark, center] = useState(null);
  
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
		
      window.removeEventListener("keydown", listener);
    };
  }, []);
  const getLocation = () => {
    let x = document.getElementById("demo")
    console.log('this is:', this);
  
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  const showPosition = (position) => {
    let x = document.getElementById("demo")
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    return position
  }

  return (
    <div>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 38.5052, lng: -122.4704 }}
    >
	{props.people.map(loc => (
		<Marker
		key={JSON.parse(loc["text"])["properties"]["ID"]}
		position={{
			lat:JSON.parse(loc["text"])["geometry"]["coordinates"][1],
			lng:JSON.parse(loc["text"])["geometry"]["coordinates"][0]
		}}
          onClick={() => {
			setSelectedPark(JSON.parse(loc["text"]));
          }}

            icon={{
              url: "/green.png",
              scaledSize: new window.google.maps.Size(25,45)
            }}
		/>
	))}
	{props.crs.map(loc => (
		<Marker
		key={JSON.parse(loc["text"])["properties"]["ID"]}
		position={{
			lat:JSON.parse(loc["text"])["geometry"]["coordinates"][1],
			lng:JSON.parse(loc["text"])["geometry"]["coordinates"][0]
		}}
	    onClick={() => {
            setSelectedPark(JSON.parse(loc["text"]));
          }}
            icon={{
              url: "/red.png",
              scaledSize: new window.google.maps.Size(25,45)
            }}
	
		/>
	))}
	{props.type.map(loc => (
		<Marker
		key={JSON.parse(loc["text"])["properties"]["ID"]}
		position={{
			lat:JSON.parse(loc["text"])["geometry"]["coordinates"][1],
			lng:JSON.parse(loc["text"])["geometry"]["coordinates"][0]
		}}
	onClick={() => {
		setSelectedPark(JSON.parse(loc["text"]));
          }}
            icon={{
              url: "/blue.png",
              scaledSize: new window.google.maps.Size(45,45)
            }}
		/>
	))}
	{props.responders.map(loc => (
		<Marker
		key={JSON.parse(loc["text"])["properties"]["ID"]}
		position={{
			lat:JSON.parse(loc["text"])["geometry"]["coordinates"][1],
			lng:JSON.parse(loc["text"])["geometry"]["coordinates"][0]
		}}
onClick={() => {
	setSelectedPark(JSON.parse(loc["text"]));
          }}
            icon={{
              url: "/yellow.png",
              scaledSize: new window.google.maps.Size(45,45)
            }}
		/>
	))}
	
	{

	props.safeloc.map(loc => (
		<Marker
			key={JSON.parse(loc["text"])["properties"]["ID"]}
			position={{
				lat:JSON.parse(loc["text"])["geometry"]["coordinates"][1],
				lng:JSON.parse(loc["text"])["geometry"]["coordinates"][0]
			}}
onClick={() => {
            setSelectedPark(JSON.parse(loc["text"]));
          }}
            icon={{
			  url: "/white.png",
              scaledSize: new window.google.maps.Size(45,45)
            }}
		/>
	))}


      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <div>
            <p>LATITUDE: {selectedPark.geometry.coordinates[0]}</p>
            <p>LONGITUDE: {selectedPark.geometry.coordinates[1]}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
    {false && <p id="demo"></p>}
    </div>
  );
}

export default Map;

