import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import places from './points.js';
import './style.css';


class Map extends Component {

  handleClick = (map, evt) => {
    console.log(map, evt);
  }

  render() {
    const filtered_points = places[2018];
    const previous_year = places[2017];
    const current_year = places[2019];
    
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiamtyaXNobmEiLCJhIjoiY2lwODMyOTRlMDE2ZHRjbHl0cjdrOHY1YyJ9.EfSggaPaoVi_jUm82n8gZg"
    });

    return (
      <>
        <Map
          style="mapbox://styles/mapbox/dark-v9" //eslint-disable-line
          containerStyle={{
              width: "100%",
              display: "inline-flex"
          }}
          center={[78.9629, 20.5937]}
          zoom={[4]}
          scrollZoom="false"
          onClick={this.handleClick}
        >
          <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
          </Layer>
          {filtered_points.map((item) => {
            return (
              <Marker 
                coordinates={item.points}
                anchor="top"
                >
                <div className="mapMarkerStyle"></div>
              </Marker>
            );
          })}
          {previous_year.map((item) => {
            return (
              <Marker 
                coordinates={item.points}
                anchor="top"
                >
                <div
                  style={{ 'backgroundColor': 'red' }}
                  className="mapMarkerStyle"
                ></div>
              </Marker>
            );
          })}
          {current_year.map((item) => {
            return (
              <Marker 
                coordinates={item.points}
                anchor="top"
                >
                <div
                  style={{ 'backgroundColor': 'rgb(93, 208, 155)' }}
                  className="mapMarkerStyle"
                ></div>
              </Marker>
            );
          })}
        </Map>
      </>
    );
  }
    

}

export default Map