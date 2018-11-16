import {inject} from 'aurelia-framework';
import {DataAccess} from 'resources/data-access/dataaccess'

@inject(DataAccess)
export class Map {
  constructor(dataaccess) {
    this.dataaccess = dataaccess;
    this.map = null;
  }

  attached() {
    console.log('init maps');
    this.initMap();
  }

  initMap() {
    console.log('loading map');
  
    // this.dataaccess.loadMapData(url, this.mapdatacallback);
  }

  showPopup() {
    console.log('popupclicked');
  }

  mapdatacallback(data) {
    console.log('mapdatacallback');
    console.log(data);
    
    let marker = new google.maps.Marker({
      position: data.myLatlng,
      map: map,
      title: data.title
    });

    
    marker.addListener('click', function() {
      // see what we have to get the right marker.
      this.showPopup();
    });
  }
}
