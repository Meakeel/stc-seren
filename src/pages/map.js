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
  
    // let url = '/data.json';
    // this.dataaccess.loadMapData(url, this.mapdatacallback);
  }

  showPopup() {
    console.log('popupclicked');
  }

  mapdatacallback(data) {
    console.log('mapdatacallback');
    console.log(data);
    
  this.markers.push(data);

    // let marker = new google.maps.Marker({
    //   position: data.myLatlng,
    //   map: map,
    //   title: data.title
    // });

    
    marker.addListener('click', function() {
      // see what we have to get the right marker.
      this.showPopup();
    });
  }
}
