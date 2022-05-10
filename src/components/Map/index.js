import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Marker, Popup } from 'react-mapbox-gl'
import places from './points.json'
import './style.css'

const MapBox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamtyaXNobmEiLCJhIjoiY2lwODMyOTRlMDE2ZHRjbHl0cjdrOHY1YyJ9.EfSggaPaoVi_jUm82n8gZg',
})
class Map extends Component {
  state = {
    pin: null
  }

  render() {
    const { pin } = this.state
    return (
      <>
        <MapBox
          style="mapbox://styles/mapbox/dark-v10" //eslint-disable-line
          containerStyle={{
            width: '100%',
            display: 'inline-flex',
          }}
          center={[78.9629, 20.5937]}
          zoom={[4]}
          scrollZoom="false"
          onClick={this.handleClick}
        >
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}></Layer>
          {pin && pin.name && (
             <Popup coordinates={pin.points} anchor="top" closeOnClick={true}>
             <div style={{ color: 'black'}}>{pin.name}</div>
           </Popup>
          )}
          {places.map((item, index) => {
            return (
              <div key={index}>
              <Marker key={`marker-${index}`} coordinates={item.points} anchor="bottom">
                <div onClick={() => {
                  this.setState({ pin: item })
                }} 
                className="mapMarkerStyle" 
                ></div>
              </Marker>
              </div>
            )
          })}
        </MapBox>
      </>
    )
  }
}

export default Map
