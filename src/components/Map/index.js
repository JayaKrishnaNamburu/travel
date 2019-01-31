import React from 'react';
import ReactMapboxGl, { Layer, Marker, ZoomControl } from "react-mapbox-gl";
import places from './points.js';
import './style.css';

const Map = () => {
    const filtered_points = places[2018];
    const previous_year = places[2017];
    const current_year = places[2019];
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoiamtyaXNobmEiLCJhIjoiY2lwODMyOTRlMDE2ZHRjbHl0cjdrOHY1YyJ9.EfSggaPaoVi_jUm82n8gZg"
    });
    return (
      <div className="map">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
              height: "100vh",
              width: "100%",
              display: "inline-flex"
          }}
          center={[78.9629, 20.5937]}
          zoom={[4]}
        >
          <ZoomControl />
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
                  style={{ 'backgroundColor': '#ca6fe0' }}
                  className="mapMarkerStyle"
                ></div>
              </Marker>
            );
          })}
        </Map>
      </div>
    );
}

export default Map