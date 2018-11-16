import {inject} from 'aurelia-framework';
import {DataAccess} from 'resources/data-access/dataaccess'

@inject(DataAccess)
export class Map {
  constructor(dataaccess) {
    this.dataaccess = dataaccess;
  }

  attached() {
    console.log('init maps');
    this.initMap();  
  }

  initMap() {
    console.log('loading map');
    
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 52.63023379346856, lng: 1.297386894984811},
      zoom: 8
    });

    let url = '/data.json';
    var cleanData = this.dataaccess.loadMapData(url, this.mapdatacallback);
  }

  mapdatacallback(data) {
    console.log('mapdatacallback');
    console.log(data);
  }
}
