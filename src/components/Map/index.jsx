import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Marker, Popup } from 'react-mapbox-gl';
import places from './points.json';
import './style.css';

const MapBox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamtyaXNobmEiLCJhIjoiY2lwODMyOTRlMDE2ZHRjbHl0cjdrOHY1YyJ9.EfSggaPaoVi_jUm82n8gZg',
  interactive: false
});
class Map extends Component {
  state = {
    pin: null
  };

  render() {
    const { pin } = this.state;
    return (
      <>
        <MapBox
          style={
            window && window.matchMedia('(prefers-color-scheme:dark)').matches
              ? 'mapbox://styles/mapbox/dark-v10'
              : 'mapbox://styles/mapbox/light-v10'
          }
          containerStyle={{
            width: '100%',
            display: 'inline-flex'
          }}
          center={[15, 35]}
          zoom={[2]}
          scrollZoom="false"
          onClick={this.handleClick}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ 'icon-image': 'marker-15' }}
          ></Layer>
          {pin && pin.name && (
            <Popup coordinates={pin.points} anchor="top" closeOnClick={true}>
              <div style={{ color: 'black' }}>{pin.name}</div>
            </Popup>
          )}
          {places.map((item, index) => {
            return (
              <div key={index}>
                <Marker
                  key={`marker-${index}`}
                  coordinates={item.points}
                  anchor="bottom"
                >
                  <div
                    onClick={() => {
                      this.setState({ pin: item });
                    }}
                    className="mapMarkerStyle"
                  ></div>
                </Marker>
              </div>
            );
          })}
        </MapBox>
      </>
    );
  }
}

export default Map;
