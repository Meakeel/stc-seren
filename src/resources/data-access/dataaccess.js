import { inject } from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import { EventAggregator } from 'aurelia-event-aggregator';
// import config from './config/dataaccess';
// import colors from './config/color-palette';

export class DataAccess {
    constructor () {
        this.http = new HttpClient();
    }

    loadMapData(url, cb) {
        this.cb = cb;
        var _this = this;
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) { 
                _this.cb(json);
            });

    }
}