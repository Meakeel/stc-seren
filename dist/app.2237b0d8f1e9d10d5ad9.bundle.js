!function(n){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)i=s[u],a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(n[r]=l[r]);for(p&&p(e);d.length;)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,s=1;s<t.length;s++){var l=t[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),n=i(i.s=t[0]))}return n}var r={},a={0:0},o=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)i.d(t,r,function(e){return n[e]}.bind(null,r));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;o.push([141,5,3,4,2,1]),t()}({141:function(n,e,t){t(142),t(313),n.exports=t(316)},app:function(n,e,t){"use strict";t.r(e),t.d(e,"App",function(){return r});t("aurelia-framework"),t(16);var r=function(){function n(){}return n.prototype.configureRouter=function(n,e){this.router=e,n.title="Talk to seren",n.map([{route:["","home"],name:"home",moduleId:"pages/home",nav:0,title:"Home"},{route:"map",name:"map",moduleId:"pages/map",nav:1,title:"Speak to Someone"},{route:"get-involved",name:"get-involved",moduleId:"pages/volunteer",nav:2,title:"Volunteer"},{route:"donate",name:"donate",moduleId:"pages/donate",nav:3,title:"Get Involved"}])},n}()},"app.html":function(n,e,t){n.exports='<template>\r\n    <require from=\'./resources/sass/main.scss\'></require>\r\n    <compose view-model="./navbar"></compose>\r\n\r\n    <router-view></router-view>\r\n\r\n    <footer class="page-footer font-small bg-primary">\r\n\r\n        <div class="footer-copyright text-center py-3">\r\n             <img src="/greater-anglia.png" alt="greater anglia funded" />\r\n             <img src="/national-lottery.jpg" alt="national lottery applied" />\r\n        </div>\r\n\r\n    </footer>\r\n</template>'},main:function(n,e,t){"use strict";t(143);var r={debug:!1,testing:!1},a=(t(1),t(13));function o(n){return n.use.standardConfiguration().feature("resources/index").plugin("aurelia-google-maps",function(n){n.options({apiKey:"AIzaSyCd7jxKp9WakRTwH2gHkrB9UEghJptCQsQ",clientId:!1,apiLibraries:"drawing,geometry",options:{panControl:!0,panControlOptions:{position:9}},language:0,region:0,markerCluster:{enable:!1,src:"https://cdn.rawgit.com/googlemaps/v3-utility-library/99a385c1/markerclusterer/src/markerclusterer.js",imagePath:"https://cdn.rawgit.com/googlemaps/v3-utility-library/tree/master/markerclusterer/images/m",imageExtension:"png"}})}),n.use.developmentLogging(r.debug?"debug":"warn"),r.testing&&n.use.plugin("aurelia-testing"),n.start().then(function(){return n.setRoot("app")})}t.d(e,"configure",function(){return o}),a.config({warnings:{wForgottenReturn:!1}})},navbar:function(n,e,t){"use strict";t.r(e),t.d(e,"Navbar",function(){return i});var r,a=t("aurelia-framework"),o=t(16),i=Object(a.b)(o.c)(r=function(n){this.router=n,this.message="Hello World!"})||r},"navbar.html":function(n,e){n.exports='<template>\r\n    <nav class="navbar navbar-expand-md navbar-dark bg-primary">\r\n        <a class="navbar-brand" href="#"><img class="logo" src="/seren-logo.png" alt="seren logo" /></a>\r\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\r\n            <span class="navbar-toggler-icon"></span>\r\n        </button>\r\n\r\n        <div class="collapse navbar-collapse" id="navbarSupportedContent">\r\n            <ul class="navbar-nav mr-auto">\r\n                <li repeat.for="nav of router.navigation" class="nav-item ${nav.isActive ? \'active\' : \'\'}">\r\n                    <a href.bind="nav.href" class="nav-link">${nav.title}</a>\r\n                    <span if.bind="nav.isActive" class="sr-only">(current)</span></a>\r\n                </li>            \r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</template>'},"pages/donate":function(n,e,t){"use strict";t.r(e),t.d(e,"Donate",function(){return r});var r=function(){}},"pages/donate.html":function(n,e){n.exports="<template>\n  <div class=\"page donate\">\n    <div class=\"container-fluid\">\n      <div class=\"row header\">\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\n          <h1>Connecting sufferers with survivors</h1>\n          <p>Seren brings people together to talk about their mental health problems discretely and safely alongside volunteer listeners that have recovered from similar situations themselves.</p>\n        </div>\n      </div>\n\n      <div class=\"row home-buttons\">\n        <div class=\"col-sm-12\">\n          <button class='btn btn-primary' text='Speak to Someone' click.trigger='goToMap()'><span class='text-center'>I need someone<br />to listen to me</span></button>\n          <button class='btn btn-primary' text='Volunteer Your Help' click.trigger='gotoVolunteer()'><span class='text-center'>I want to help</span></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>"},"pages/home":function(n,e,t){"use strict";t.r(e),t.d(e,"Home",function(){return i});var r,a=t("aurelia-framework"),o=t(16),i=Object(a.b)(o.c)(r=function(){function n(n){this.router=n,this.message="Hello World!"}var e=n.prototype;return e.goToMap=function(){this.router.navigateToRoute("map")},e.gotoVolunteer=function(){this.router.navigateToRoute("volunteer")},n}())||r},"pages/home.html":function(n,e){n.exports="<template>\r\n  <div class=\"page home\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row header\">\r\n        <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n          <h1>Connecting sufferers with survivors</h1>\r\n          <p>Seren brings people together to talk about their mental health problems discretely and safely alongside volunteer listeners that have recovered from similar situations themselves.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row home-buttons\">\r\n        <div class=\"col-sm-12\">\r\n          <button class='btn btn-primary' text='Speak to Someone' click.trigger='goToMap()'><span class='text-center'>I need someone<br />to listen to me</span></button>\r\n          <button class='btn btn-primary' text='Volunteer Your Help' click.trigger='gotoVolunteer()'><span class='text-center'>I want to help</span></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>"},"pages/map":function(n,e,t){"use strict";t.r(e);var r,a=t("aurelia-framework"),o=t(140),i=(t("aurelia-event-aggregator"),function(){function n(){this.http=new o.a}return n.prototype.loadMapData=function(n,e){this.cb=e;var t=this;fetch(n).then(function(n){return n.json()}).then(function(n){t.cb(n)})},n}());t.d(e,"Map",function(){return s});var s=Object(a.b)(i)(r=function(){function n(n){this.dataaccess=n,this.map=null,this.markers=[]}var e=n.prototype;return e.attached=function(){console.log("init maps"),this.initMap()},e.initMap=function(){console.log("loading map"),this.markers.push({latitude:52.63023379346856,longitude:1.297386894984811,myLatlng:{lat:52.63023379346856,lng:1.297386894984811},title:"Title",description:"description",date:"78234764",category:"Cafe"}),this.markers.push({latitude:52.629397,longitude:1.295842,myLatlng:{lat:52.63023379346856,lng:1.297386894984811},title:"Costa Coffee",description:"description",date:"78234764",category:"Cafe"}),this.markers.push({latitude:52.725345,longitude:1.03975,myLatlng:{lat:52.63023379346856,lng:1.297386894984811},title:"Random Location",description:"description",date:"78234764",category:"Cafe"}),this.markers.push({latitude:52.931155,longitude:1.302305,title:"Random Location",custom:{lat:52.63023379346856,lng:1.297386894984811,description:"description",date:"78234764",category:"Cafe"}})},e.showPopup=function(n){var e=n.detail.marker.title,t=n.detail.marker.custom.description,r=n.detail.marker.custom.category;console.log("popupclicked"),document.getElementsByClassName("title")[0].Text=e,document.getElementsByClassName("description")[0].Text=t,document.getElementsByClassName("catagory")[0].Text=r,document.getElementsByClassName("popup")[0].style.display="visable"},e.mapdatacallback=function(n){console.log("mapdatacallback"),console.log(n),this.markers.push(n)},n}())||r},"pages/map.html":function(n,e){n.exports='<template>\r\n    <google-map markers.bind="markers" latitude="52.63023379346856" longitude="1.297386894984811"></google-map>\r\n\r\n    <div class="popup" style="display: hidden">\r\n        <span class="title"></span>\r\n        <span class="description"></span>\r\n        <span class="catagory"></span>\r\n    </div>\r\n</template>'},"pages/volunteer":function(n,e,t){"use strict";t.r(e),t.d(e,"Volunteer",function(){return r});var r=function(){this.message="Hello World!"}},"pages/volunteer.html":function(n,e){n.exports="<template>\n    <div class=\"page volunteer\">\n      <div class=\"container-fluid\">\n        <div class=\"row header\">\n          <div class=\"col-sm-12 col-md-6 col-lg-4\">\n            <h1>Connecting sufferers with survivors</h1>\n            <p>Seren brings people together to talk about their mental health problems discretely and safely alongside volunteer listeners that have recovered from similar situations themselves.</p>\n          </div>\n        </div>\n  \n        <div class=\"row home-buttons\">\n          <div class=\"col-sm-12\">\n            <button class='btn btn-primary' text='Speak to Someone' click.trigger='goToMap()'><span class='text-center'>I need someone<br />to listen to me</span></button>\n            <button class='btn btn-primary' text='Volunteer Your Help' click.trigger='gotoVolunteer()'><span class='text-center'>I want to help</span></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </template>"},"resources/index":function(n,e,t){"use strict";function r(n){}t.r(e),t.d(e,"configure",function(){return r})},"resources/sass/main.scss":function(n,e,t){(n.exports=t(312)(!1)).push([n.i,'.bg-primary {\n  background-color: #414141 !important; }\n\n.btn-primary {\n  background-color: #89C4F4 !important;\n  border-color: #89C4F4 !important; }\n\n.donate {\n  height: calc(100% - 70px) !important;\n  background-image: url("/twopeople.png");\n  background-size: cover;\n  -ms-background-size: cover;\n  -o-background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover; }\n  .donate .container-fluid {\n    padding-left: 20px; }\n    @media screen and (min-width: 768px) {\n      .donate .container-fluid {\n        padding-left: 50px; } }\n  .donate .header h1 {\n    margin-top: 20px;\n    color: #000000; }\n  .donate .header p {\n    margin-top: 20px;\n    color: #000000;\n    font-size: 1.2rem; }\n  @media screen and (min-width: 768px) {\n    .donate .header h1 {\n      margin-top: 70px; }\n    .donate .header p {\n      margin-top: 35px; } }\n  .donate button {\n    width: 200px;\n    height: 100px; }\n    @media screen and (min-width: 768px) {\n      .donate button span {\n        font-size: 1.3rem;\n        font-weight: 200;\n        line-height: 1.1; } }\n    @media screen and (min-width: 460px) {\n      .donate button + button {\n        margin-left: 20px; } }\n\n.home {\n  height: calc(100% - 70px) !important;\n  background-image: url("/coffehands.png");\n  background-size: cover;\n  -ms-background-size: cover;\n  -o-background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover; }\n  .home .container-fluid {\n    padding-left: 20px; }\n    @media screen and (min-width: 768px) {\n      .home .container-fluid {\n        padding-left: 50px; } }\n  .home .header h1 {\n    margin-top: 20px;\n    color: #ffffff; }\n  .home .header p {\n    margin-top: 20px;\n    color: #ffffff;\n    font-size: 1.2rem; }\n  @media screen and (min-width: 768px) {\n    .home .header h1 {\n      margin-top: 70px; }\n    .home .header p {\n      margin-top: 35px; } }\n  .home button {\n    width: 200px;\n    height: 100px; }\n    @media screen and (min-width: 768px) {\n      .home button span {\n        font-size: 1.3rem;\n        font-weight: 200;\n        line-height: 1.1; } }\n    @media screen and (min-width: 460px) {\n      .home button + button {\n        margin-left: 20px; } }\n\ngoogle-map {\n  height: calc(100% - 58px) !important; }\n\n.volunteer {\n  height: calc(100% - 70px) !important;\n  background-image: url("/games.png");\n  background-size: cover;\n  -ms-background-size: cover;\n  -o-background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover; }\n  .volunteer .container-fluid {\n    padding-left: 20px; }\n    @media screen and (min-width: 768px) {\n      .volunteer .container-fluid {\n        padding-left: 50px; } }\n  .volunteer .header h1 {\n    margin-top: 20px;\n    color: #ffffff; }\n  .volunteer .header p {\n    margin-top: 20px;\n    color: #ffffff;\n    font-size: 1.2rem; }\n  @media screen and (min-width: 768px) {\n    .volunteer .header h1 {\n      margin-top: 70px; }\n    .volunteer .header p {\n      margin-top: 35px; } }\n  .volunteer button {\n    width: 200px;\n    height: 100px; }\n    @media screen and (min-width: 768px) {\n      .volunteer button span {\n        font-size: 1.3rem;\n        font-weight: 200;\n        line-height: 1.1; } }\n    @media screen and (min-width: 460px) {\n      .volunteer button + button {\n        margin-left: 20px; } }\n\n.navbar .navbar-brand {\n  margin-right: 2rem; }\n\n@media (min-width: 768px) {\n  .navbar .navbar-nav .nav-link {\n    padding-right: 1rem;\n    padding-left: 1rem;\n    font-size: 1.5rem; } }\n\n.navbar .logo {\n  max-width: 150px; }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \'Comfortaa\', cursive, Arial, Helvetica, sans-serif; }\n\n.page {\n  height: calc(100% - 70px) !important; }\n\n.page-footer img {\n  max-height: 100px; }\n  .page-footer img + img {\n    margin-left: 50px; }\n',""])}});
//# sourceMappingURL=app.2237b0d8f1e9d10d5ad9.bundle.map