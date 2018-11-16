export class Map {
  constructor() {
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
  }
}
