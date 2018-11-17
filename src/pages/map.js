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
  
    let url = '/data.json';
    this.dataaccess.loadMapData(url, this.mapdatacallback, this.markers);
    }

    register()
    {
      let contact = prompt("Enter email/number");
      alert("Thanks for regestering your interest!");
    }

    mapdatacallback(data, markers) {
      console.log('mapdatacallback');
      console.log(data);
      
    // this.markers.push(data);

    var i;
    for (i = 0; i < data.length; i++)
    {
      markers.push({
        "latitude": data[i].latitude,
        "longitude": data[i].longitude,
        "title": `${data[i].title}`,
        "custom": {
        "date" : `${data[i].custom.date}`,
        "category": `${data[i].custom.category}`},
        "infoWindow" : {content: `
          <div id='content'>
            <div id='siteNotice'>
              <h1 id="firstHeading" class="firstHeading">${data[i].custom.name}</h1>
              <div id="bodyContent">
                <p>${data[i].custom.date}, ${data[i].custom.time} @ ${data[i].title}</p>
                <p>${data[i].custom.description}</p>
                <button class='btn btn-primary' onclick="register()">Join Event</button>
              </div>
            </div>
          <div>
          `}
      });
    }
  }
}