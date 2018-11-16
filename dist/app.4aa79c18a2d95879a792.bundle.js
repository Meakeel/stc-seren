/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor.bluebird","vendor.aurelia-binding","vendor.aurelia-templating","vendor.aurelia","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/environment.js":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  debug: true,\n  testing: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW52aXJvbm1lbnQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnQuanM/Mzg1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/environment.js\n");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js");


/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-router */ \"./node_modules/aurelia-router/dist/native-modules/aurelia-router.js\");\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    this.message = 'Hello World!';\n  }\n\n  var _proto = App.prototype;\n\n  _proto.configureRouter = function configureRouter(config, router) {\n    this.router = router;\n    config.title = 'Aurelia';\n    config.map([{\n      route: ['', 'home'],\n      name: 'home',\n      moduleId: 'pages/home',\n      nav: 0,\n      title: 'Home'\n    }, {\n      route: 'map',\n      name: 'map',\n      moduleId: 'pages/map',\n      nav: 1,\n      title: 'Speak to Someone'\n    }, {\n      route: 'volunteer',\n      name: 'volunteer',\n      moduleId: 'pages/volunteer',\n      nav: 2,\n      title: 'Volunteer'\n    }, {\n      route: 'donate',\n      name: 'donate',\n      moduleId: 'pages/donate',\n      nav: 3,\n      title: 'Donate'\n    }]);\n  };\n\n  return App;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1cmVsaWEsIFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckNvbmZndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbiAgfVxuICBcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAnaG9tZSddLCAgICAgbmFtZTogJ2hvbWUnLCAgICAgIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKCdwYWdlcy9ob21lJyksIG5hdjogMCwgdGl0bGU6ICdIb21lJyB9LFxuICAgICAgeyByb3V0ZTogJ21hcCcsICAgICAgICAgICAgbmFtZTogJ21hcCcsICAgICAgIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKCdwYWdlcy9tYXAnKSwgbmF2OiAxLCB0aXRsZTogJ1NwZWFrIHRvIFNvbWVvbmUnIH0sXG4gICAgICB7IHJvdXRlOiAndm9sdW50ZWVyJywgICAgICBuYW1lOiAndm9sdW50ZWVyJywgbW9kdWxlSWQ6IFBMQVRGT1JNLm1vZHVsZU5hbWUoJ3BhZ2VzL3ZvbHVudGVlcicpLCBuYXY6IDIsIHRpdGxlOiAnVm9sdW50ZWVyJyB9LFxuICAgICAgeyByb3V0ZTogJ2RvbmF0ZScsICAgICAgICAgbmFtZTogJ2RvbmF0ZScsICAgIG1vZHVsZUlkOiBQTEFURk9STS5tb2R1bGVOYW1lKCdwYWdlcy9kb25hdGUnKSwgbmF2OiAzLCB0aXRsZTogJ0RvbmF0ZScgfVxuICAgIF0pO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFmQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<template>\\n    <compose view=\\\"./navbar\\\"></compose>\\n    \\n    <router-view></router-view>\\n</template>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgICA8Y29tcG9zZSB2aWV3PVxcXCIuL25hdmJhclxcXCI+PC9jb21wb3NlPlxcbiAgICBcXG4gICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxuPC90ZW1wbGF0ZT5cIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ \"./src/environment.js\");\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ \"./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bluebird */ \"./node_modules/bluebird/js/browser/bluebird.js-exposed\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // remove out if you don't want a Promise polyfill (remove also from webpack.config.js)\n\nbluebird__WEBPACK_IMPORTED_MODULE_3__[\"config\"]({\n  warnings: {\n    wForgottenReturn: false\n  }\n});\nfunction configure(aurelia) {\n  aurelia.use.standardConfiguration().feature('resources/index'); // Uncomment the line below to enable animation.\n  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));\n  // if the css animator is enabled, add swap-order=\"after\" to all router-view elements\n  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.\n  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));\n\n  aurelia.use.developmentLogging(_environment__WEBPACK_IMPORTED_MODULE_1__[\"default\"].debug ? 'debug' : 'warn');\n\n  if (_environment__WEBPACK_IMPORTED_MODULE_1__[\"default\"].testing) {\n    aurelia.use.plugin('aurelia-testing');\n  }\n\n  return aurelia.start().then(function () {\n    return aurelia.setRoot('app');\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtQTEFURk9STX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0ICogYXMgQmx1ZWJpcmQgZnJvbSAnYmx1ZWJpcmQnO1xuXG4vLyByZW1vdmUgb3V0IGlmIHlvdSBkb24ndCB3YW50IGEgUHJvbWlzZSBwb2x5ZmlsbCAocmVtb3ZlIGFsc28gZnJvbSB3ZWJwYWNrLmNvbmZpZy5qcylcbkJsdWViaXJkLmNvbmZpZyh7IHdhcm5pbmdzOiB7IHdGb3Jnb3R0ZW5SZXR1cm46IGZhbHNlIH0gfSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ3Jlc291cmNlcy9pbmRleCcpKTtcblxuICAvLyBVbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgdG8gZW5hYmxlIGFuaW1hdGlvbi5cbiAgLy8gYXVyZWxpYS51c2UucGx1Z2luKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJykpO1xuICAvLyBpZiB0aGUgY3NzIGFuaW1hdG9yIGlzIGVuYWJsZWQsIGFkZCBzd2FwLW9yZGVyPVwiYWZ0ZXJcIiB0byBhbGwgcm91dGVyLXZpZXcgZWxlbWVudHNcblxuICAvLyBBbnlvbmUgd2FudGluZyB0byB1c2UgSFRNTEltcG9ydHMgdG8gbG9hZCB2aWV3cywgd2lsbCBuZWVkIHRvIGluc3RhbGwgdGhlIGZvbGxvd2luZyBwbHVnaW4uXG4gIC8vIGF1cmVsaWEudXNlLnBsdWdpbihQTEFURk9STS5tb2R1bGVOYW1lKCdhdXJlbGlhLWh0bWwtaW1wb3J0LXRlbXBsYXRlLWxvYWRlcicpKTtcblxuICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoZW52aXJvbm1lbnQuZGVidWcgPyAnZGVidWcnIDogJ3dhcm4nKTtcblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbihQTEFURk9STS5tb2R1bGVOYW1lKCdhdXJlbGlhLXRlc3RpbmcnKSk7XG4gIH1cblxuICByZXR1cm4gYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2FwcCcpKSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "navbar":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navbar\", function() { return Navbar; });\n/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-router */ \"./node_modules/aurelia-router/dist/native-modules/aurelia-router.js\");\n\nvar Navbar = function Navbar(router) {\n  this.router = router;\n  this.message = 'Hello World!';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL25hdmJhci5qcz81NTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuZXhwb3J0IGNsYXNzIE5hdmJhciB7XG4gIGNvbnN0cnVjdG9yKHJvdXRlcikge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMubWVzc2FnZSA9ICdIZWxsbyBXb3JsZCEnO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///navbar\n");

/***/ }),

/***/ "navbar.html":
/*!*************************!*\
  !*** ./src/navbar.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\r\\n    <nav class=\\\"navbar navbar-expand-lg navbar-dark bg-primary\\\">\\r\\n        <a class=\\\"navbar-brand\\\" href=\\\"#\\\">Logo</a>\\r\\n        <button class=\\\"navbar-toggler\\\" type=\\\"button\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navbarSupportedContent\\\" aria-controls=\\\"navbarSupportedContent\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\">\\r\\n            <span class=\\\"navbar-toggler-icon\\\"></span>\\r\\n        </button>\\r\\n\\r\\n        <div class=\\\"collapse navbar-collapse\\\" id=\\\"navbarSupportedContent\\\">\\r\\n            <ul class=\\\"navbar-nav mr-auto\\\">\\r\\n                <li class=\\\"${nav.isActive ? 'active' : ''}\\\">\\r\\n                    <a href.bind=\\\"nav.href\\\">${nav.title}</a>\\r\\n                    <span if.bind=\\\"nav.isActive\\\" class=\\\"sr-only\\\">(current)</span></a>\\r\\n                </li>                \\r\\n            </ul>\\r\\n        </div>\\r\\n    </nav>\\r\\n</template>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbmF2YmFyLmh0bWw/ZGFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcclxcbiAgICA8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPkxvZ288L2E+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlclxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFxcXCIgYXJpYS1jb250cm9scz1cXFwibmF2YmFyU3VwcG9ydGVkQ29udGVudFxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtbGFiZWw9XFxcIlRvZ2dsZSBuYXZpZ2F0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZXItaWNvblxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcXFwiIGlkPVxcXCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXYgbXItYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiJHtuYXYuaXNBY3RpdmUgPyAnYWN0aXZlJyA6ICcnfVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmLmJpbmQ9XFxcIm5hdi5ocmVmXFxcIj4ke25hdi50aXRsZX08L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZi5iaW5kPVxcXCJuYXYuaXNBY3RpdmVcXFwiIGNsYXNzPVxcXCJzci1vbmx5XFxcIj4oY3VycmVudCk8L3NwYW4+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvbmF2PlxcclxcbjwvdGVtcGxhdGU+XCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///navbar.html\n");

/***/ }),

/***/ "pages/donate":
/*!*****************************!*\
  !*** ./src/pages/donate.js ***!
  \*****************************/
/*! exports provided: Donate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Donate\", function() { return Donate; });\nvar Donate = function Donate() {\n  this.message = 'Hello World!';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZG9uYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RvbmF0ZS5qcz8yYTU4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEb25hdGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pages/donate\n");

/***/ }),

/***/ "pages/donate.html":
/*!*******************************!*\
  !*** ./src/pages/donate.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n    <div class=\\\"container-fluid\\\">\\n      <div class=\\\"row\\\">\\n        <div class=\\\"col-sm\\\">\\n          <h1>Home</h1>\\n        </div>\\n      </div>\\n      <div class=\\\"row\\\">\\n          <div class=\\\"col-sm\\\">\\n              One of three columns\\n            </div>\\n            <div class=\\\"col-sm\\\">\\n              One of three columns\\n            </div>\\n            <div class=\\\"col-sm\\\">\\n              One of three columns\\n            </div>\\n      </div>\\n    </div>\\n</template>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZG9uYXRlLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZG9uYXRlLmh0bWw/NmMxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICA8aDE+SG9tZTwvaDE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICAgICAgT25lIG9mIHRocmVlIGNvbHVtbnNcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICAgICAgT25lIG9mIHRocmVlIGNvbHVtbnNcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICAgICAgT25lIG9mIHRocmVlIGNvbHVtbnNcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pages/donate.html\n");

/***/ }),

/***/ "pages/home":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\nvar Home = function Home() {\n  this.message = 'Hello World!';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9ob21lLmpzPzgwNzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhvbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pages/home\n");

/***/ }),

/***/ "pages/home.html":
/*!*****************************!*\
  !*** ./src/pages/home.html ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n    <div class=\\\"container-fluid\\\">\\n      <div class=\\\"row\\\">\\n        <div class=\\\"col-sm\\\">\\n          <h1>Home</h1>\\n        </div>\\n      </div>\\n      <div class=\\\"row\\\">\\n          <div class=\\\"col-sm\\\">\\n              One of three columns\\n            </div>\\n            <div class=\\\"col-sm\\\">\\n              One of three columns\\n            </div>\\n            <div class=\\\"col-sm\\\">\\n              One of three columns\\n            </div>\\n      </div>\\n    </div>\\n</template>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaG9tZS5odG1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUuaHRtbD9jYmNlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbVxcXCI+XFxuICAgICAgICAgIDxoMT5Ib21lPC9oMT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbVxcXCI+XFxuICAgICAgICAgICAgICBPbmUgb2YgdGhyZWUgY29sdW1uc1xcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbVxcXCI+XFxuICAgICAgICAgICAgICBPbmUgb2YgdGhyZWUgY29sdW1uc1xcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbVxcXCI+XFxuICAgICAgICAgICAgICBPbmUgb2YgdGhyZWUgY29sdW1uc1xcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///pages/home.html\n");

/***/ }),

/***/ "pages/map":
/*!**************************!*\
  !*** ./src/pages/map.js ***!
  \**************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nvar Map =\n/*#__PURE__*/\nfunction () {\n  function Map() {\n    this.message = 'Hello World!';\n  }\n\n  var _proto = Map.prototype;\n\n  _proto.initMap = function initMap() {\n    var map = new google.maps.Map(document.getElementById('map'), {\n      center: {\n        lat: -34.397,\n        lng: 150.644\n      },\n      zoom: 8\n    });\n  };\n\n  return Map;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbWFwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL21hcC5qcz80ODUwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbiAgfVxuXG4gIGluaXRNYXAoKSB7XG4gICAgbGV0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgICBjZW50ZXI6IHtsYXQ6IC0zNC4zOTcsIGxuZzogMTUwLjY0NH0sXG4gICAgICB6b29tOiA4XG4gICAgfSk7XG5cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFaQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pages/map\n");

/***/ }),

/***/ "pages/map.html":
/*!****************************!*\
  !*** ./src/pages/map.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n    <div class=\\\"container-fluid\\\">\\n        <div class=\\\"row\\\">\\n            <div class=\\\"col-sm\\\">\\n                <div id=\\\"map\\\"></div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <script src=\\\"https://maps.googleapis.com/maps/api/js?key= AIzaSyCd7jxKp9WakRTwH2gHkrB9UEghJptCQsQ&callback=initMap\\\" async=\\\"async\\\" defer=\\\"defer\\\"></script>\\n</template>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbWFwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbWFwLmh0bWw/NjdkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJtYXBcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0gQUl6YVN5Q2Q3anhLcDlXYWtSVHdIMmdIa3JCOVVFZ2hKcHRDUXNRJmNhbGxiYWNrPWluaXRNYXBcXFwiIGFzeW5jPVxcXCJhc3luY1xcXCIgZGVmZXI9XFxcImRlZmVyXFxcIj48L3NjcmlwdD5cXG48L3RlbXBsYXRlPlwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///pages/map.html\n");

/***/ }),

/***/ "pages/volunteer":
/*!********************************!*\
  !*** ./src/pages/volunteer.js ***!
  \********************************/
/*! exports provided: Volunteer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Volunteer\", function() { return Volunteer; });\nvar Volunteer = function Volunteer() {\n  this.message = 'Hello World!';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdm9sdW50ZWVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3ZvbHVudGVlci5qcz81ZDhkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWb2x1bnRlZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pages/volunteer\n");

/***/ }),

/***/ "pages/volunteer.html":
/*!**********************************!*\
  !*** ./src/pages/volunteer.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n    <div class=\\\"container-fluid\\\">\\n      <div class=\\\"row\\\">\\n        <div class=\\\"col-sm\\\">\\n          <h1>Home</h1>\\n        </div>\\n      </div>\\n      <div class=\\\"row\\\">\\n          <div class=\\\"col-sm\\\">\\n              One of three columns\\n            </div>\\n            <div class=\\\"col-sm\\\">\\n              One of three columns\\n            </div>\\n            <div class=\\\"col-sm\\\">\\n              One of three columns\\n            </div>\\n      </div>\\n    </div>\\n</template>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdm9sdW50ZWVyLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdm9sdW50ZWVyLmh0bWw/YTYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICA8aDE+SG9tZTwvaDE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICAgICAgT25lIG9mIHRocmVlIGNvbHVtbnNcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICAgICAgT25lIG9mIHRocmVlIGNvbHVtbnNcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiPlxcbiAgICAgICAgICAgICAgT25lIG9mIHRocmVlIGNvbHVtbnNcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///pages/volunteer.html\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.js ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\nfunction configure(config) {//config.globalResources([]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC5qcz85NzVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG4gIC8vY29uZmlnLmdsb2JhbFJlc291cmNlcyhbXSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ })

/******/ });