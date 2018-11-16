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
    "category": "Cafe"}
  });
  
    // let url = '/data.json';
    // this.dataaccess.loadMapData(url, this.mapdatacallback);
  }

  showPopup(nfo) {
    let title = nfo.detail.marker.title;
    let description = nfo.detail.marker.custom.description;
    let category = nfo.detail.marker.custom.category;
    console.log('popupclicked');
    debugger;
    
    let pTitle = document.getElementsByClassName("title")[0];
    pTitle.Text = title;
    let pDesc = document.getElementsByClassName("description")[0];
    pDesc.Text = description;
    let pCat = document.getElementsByClassName("catagory")[0];
    pCat.Text = category;

    document.getElementsByClassName("popup")[0].style.display = "visable";
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

//     marker.addListener('hover', function()
//   {
//     this.showPopup();
//   });

//   marker.addListener('mouseover', function() {
//     infowindow.open(map, this);
//     console.log('hover');
// });

// // assuming you also want to hide the infowindow when user mouses-out
// marker.addListener('mouseout', function() {
//     infowindow.close();
// });

//     // doesn't seem to do anything :(
//     marker.addListener('click', function() {
//       // see what we have to get the right marker.
//       this.showPopup();
//     });
  }
}
