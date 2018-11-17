import {inject} from 'aurelia-framework';
import {DataAccess} from 'resources/data-access/dataaccess'

@inject(DataAccess)
export class Map {
  constructor(dataaccess) {
    this.dataaccess = dataaccess;
    this.map = null;
    this.markers = [];
  }

  attached() {
    console.log('init maps');
    this.initMap();
  }

  initMap() {
    console.log('loading map');
  
    this.markers.push({
      "latitude": 52.63023379346856,
      "longitude": 1.297386894984811,
      "myLatlng": {"lat": 52.63023379346856, "lng": 1.297386894984811},
      "title": "Title",
      "description": "description",
      "date" : "78234764",
      "category": "Cafe"
  });

  this.markers.push({
    "latitude": 52.629397,
    "longitude": 1.295842,
    "myLatlng": {"lat": 52.63023379346856, "lng": 1.297386894984811},
    "title": "Costa Coffee",
    "description": "description",
    "date" : "78234764",
    "category": "Cafe"
  });

  this.markers.push({
    "latitude": 52.725345,
    "longitude": 1.039750,
    "myLatlng": {"lat": 52.63023379346856, "lng": 1.297386894984811},
    "title": "Random Location",
    "description": "description",
    "date" : "78234764",
    "category": "Cafe"
  });

  this.markers.push({
    "latitude": 52.931155,
    "longitude": 1.302305,
    "title": "Random Location",
    "custom": {"lat": 52.63023379346856, "lng": 1.297386894984811,
    "description": "description",
    "date" : "78234764",
    "category": "Cafe"},
    "infoWindow" : {content: `
      <div id='content'>
      <div id='siteNotice'>
      <h1 id="firstHeading" class="firstHeading">${title}</h1>
      <div id="bodyContent">
      <p>${catagory}</p>
      <p>${description}</p>
      <p>${date}</p>
      </div>
      </div>
      <div>
      `}

  });
  
    // let url = '/data.json';
    // this.dataaccess.loadMapData(url, this.mapdatacallback);
  }

  mapdatacallback(data) {
    console.log('mapdatacallback');
    console.log(data);
    
  this.markers.push(data);
  }
}
