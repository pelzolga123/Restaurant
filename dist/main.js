/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\nconst about = () => {\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('h1', 'main', 'aboutHeader');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('div', 'main', 'croissantSection');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('div', 'main', 'macaroonSection');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('div', 'main', 'donutSection');\n\n  document.getElementById('aboutHeader').innerHTML = 'About us';\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/about-croissant.jpg', 'croissantSection', 'croissant');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/line_2.png', 'croissantSection', 'croissant_line');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('p', 'croissantSection', 'croissantInfo');\n  document.getElementById('croissantInfo').innerHTML = \"Known in France as croissants de boulanger, this yeasted dough is layered with butter and given a succession of folds that create the distinctive profile of classic croissants. Light and airy and shatteringly crisp, with a deeply caramelized buttery flavor, these croissants are a labor of love that's absolutely worth the time.\";\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('p', 'macaroonSection', 'macaroonInfo');\n  document.getElementById('macaroonInfo').innerHTML = 'The macaron is considered to be the jewel of French pastries in Europe. Our macarons will delight ... First bite is a surprise. Second bite is the flavor. Third bite is the pleasure ... all adding up to create a mouthful of heaven! Our true French macarons are the perfect delicacy, original and elegant. They can simply be described as: Little luxuries that make people smile.';\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/line_2.png', 'macaroonSection', 'macaroon_line');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/about-macaroon.jpg', 'macaroonSection', 'macaroon');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/about-donut.jpg', 'donutSection', 'donut');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/line_2.png', 'donutSection', 'donut_line');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('p', 'donutSection', 'donutInfo');\n  document.getElementById('donutInfo').innerHTML = 'Delicious, high quality ingredients. Seasonal flavors. Handmade fresh daily. We pride ourself on originality, using the highest quality all natural ingredients, and making everything in-house from scratch — all glazes, fillings, jams and toppings.';\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (about);\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\nconst contact = () => {\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('h1', 'main', 'contactHeader');\n  document.getElementById('contactHeader').innerHTML = 'Contact us';\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('div', 'main', 'formSection');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('form', 'formSection', 'contactForm');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('p', 'contactForm', 'nameP');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('label', 'nameP', 'nameLabel');\n  document.getElementById('nameLabel').innerHTML = 'Name';\n  document.getElementById('nameLabel').setAttribute('for', 'nameInput');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('input', 'nameP', 'nameInput');\n  document.getElementById('nameInput').innerHTML = 'Name';\n  document.getElementById('nameInput').setAttribute('type', 'text');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('p', 'contactForm', 'phoneP');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('label', 'phoneP', 'phoneLabel');\n  document.getElementById('phoneLabel').innerHTML = 'Phone';\n  document.getElementById('phoneLabel').setAttribute('for', 'phoneInput');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('input', 'phoneP', 'phoneInput');\n  document.getElementById('phoneInput').setAttribute('type', 'tel');\n  document.getElementById('phoneInput').setAttribute('pattern', '[0-9]{3}-[0-9]{2}-[0-9]{3}');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('p', 'contactForm', 'emailP');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('label', 'emailP', 'emailLabel');\n  document.getElementById('emailLabel').innerHTML = 'Email';\n  document.getElementById('emailLabel').setAttribute('for', 'emailInput');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('input', 'emailP', 'emailInput');\n  document.getElementById('emailInput').innerHTML = 'Email';\n  document.getElementById('emailInput').setAttribute('type', 'email');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('p', 'contactForm', 'messageP');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('label', 'messageP', 'messageLabel');\n  document.getElementById('messageLabel').innerHTML = 'Message';\n  document.getElementById('messageLabel').setAttribute('for', 'messageInput');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('input', 'messageP', 'messageInput');\n  document.getElementById('messageInput').innerHTML = 'Message';\n  document.getElementById('messageInput').setAttribute('type', 'text');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('input', 'contactForm', 'buttonInput');\n  document.getElementById('buttonInput').setAttribute('type', 'submit');\n  document.getElementById('buttonInput').value = 'Submit';\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('div', 'main', 'infoSection');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('ul', 'infoSection', 'phoneInfo');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('li', 'phoneInfo', 'phoneHeader');\n  document.getElementById('phoneHeader').innerHTML = 'Call us';\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('li', 'phoneInfo', 'phone');\n  document.getElementById('phone').innerHTML = '(032) 3453 456 445';\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('ul', 'infoSection', 'emailInfo');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('li', 'emailInfo', 'emailHeader');\n  document.getElementById('emailHeader').innerHTML = 'Email';\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('li', 'emailInfo', 'email');\n  document.getElementById('email').innerHTML = 'french-restaurant@gmail.com';\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('ul', 'infoSection', 'addressInfo');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('li', 'addressInfo', 'addressHeader');\n  document.getElementById('addressHeader').innerHTML = 'Address';\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('li', 'addressInfo', 'address');\n  document.getElementById('address').innerHTML = 'Somewhere in Paris';\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('ul', 'infoSection', 'timeInfo');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('li', 'timeInfo', 'timeHeader');\n  document.getElementById('timeHeader').innerHTML = 'Opening time';\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('li', 'timeInfo', 'time_1');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('li', 'timeInfo', 'time_2');\n  document.getElementById('time_1').innerHTML = 'Monday - Friday: 08:00 am - 08:30 pm';\n  document.getElementById('time_2').innerHTML = 'Saturday - Sunday: 10:00 am - 16:30 pm';\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('div', 'main', 'imgEnding');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/sweets_1.png', 'imgEnding', 'sweets_1');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/sweets_2.png', 'imgEnding', 'sweets_2');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/sweets_3.png', 'imgEnding', 'sweets_3');\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! exports provided: element, addImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addImg\", function() { return addImg; });\nconst element = (elem, parent, id) => {\n  const newElem = document.createElement(elem);\n  const parentElem = document.getElementById(parent);\n  newElem.setAttribute('id', id);\n  parentElem.appendChild(newElem);\n\n  return id;\n};\n\nconst addImg = (url, divId, imgClass) => {\n  const img = document.createElement('img');\n  const div = document.getElementById(divId);\n  img.setAttribute('src', url);\n  img.setAttribute('class', imgClass);\n\n  div.appendChild(img);\n};\n\n\n\n//# sourceURL=webpack:///./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\n\n\n\n\nconst tabs = (name, divName) => {\n  const btn = document.createElement('button');\n  const div = document.getElementById(divName);\n  btn.innerHTML = name;\n  btn.setAttribute('id', name);\n  div.appendChild(btn);\n};\n\nfunction pages(page) {\n  switch (page) {\n    case 'Contact':\n      Object(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n      break;\n\n    case 'About':\n      Object(_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      break;\n\n    case 'Menu':\n      Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      break;\n\n    default:\n      Object(_about__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      break;\n  }\n}\n\nfunction main(id) {\n  Object(_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  pages(id);\n}\n\nfunction buttons() {\n  const btnMenu = document.getElementById('Menu');\n  const btnAbout = document.getElementById('About');\n  const btnContact = document.getElementById('Contact');\n  const scroll = document.getElementById('main');\n\n  btnMenu.addEventListener('click', () => {\n    main('Menu');\n    scroll.scrollIntoView();\n  });\n\n  btnAbout.addEventListener('click', () => {\n    main('About');\n    scroll.scrollIntoView();\n  });\n\n  btnContact.addEventListener('click', () => {\n    main('Contact');\n    scroll.scrollIntoView();\n  });\n}\n\nfunction start() {\n  Object(_elements__WEBPACK_IMPORTED_MODULE_4__[\"element\"])('div', 'content', 'firstSection');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_4__[\"element\"])('div', 'firstSection', 'layer');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_4__[\"element\"])('div', 'content', 'main');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_4__[\"element\"])('div', 'layer', 'logo_img');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_4__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/logo.png', 'logo_img', 'logo');\n\n  Object(_elements__WEBPACK_IMPORTED_MODULE_4__[\"element\"])('div', 'layer', 'buttons');\n  tabs('About', 'buttons');\n  tabs('Menu', 'buttons');\n  tabs('Contact', 'buttons');\n\n  buttons();\n}\n\nstart();\nmain('About');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst load = () => {\n  const main = document.getElementById('main');\n  while (main.firstChild) {\n    main.removeChild(main.firstChild);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (load);\n\n\n//# sourceURL=webpack:///./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\nconst createTableRow = (parentId, trId, tdImgId, tdNameId, tdPriceId, tdNameV, tdPriceV) => {\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('tr', parentId, trId);\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('td', trId, tdImgId);\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('td', trId, tdNameId);\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('td', trId, tdPriceId);\n  document.getElementById(tdNameId).innerHTML = tdNameV;\n  document.getElementById(tdPriceId).innerHTML = tdPriceV;\n};\n\nconst menu = () => {\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('div', 'main', 'main_menu');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('h1', 'main_menu', 'menuHeader');\n  document.getElementById('menuHeader').innerHTML = 'Menu';\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"element\"])('table', 'main_menu', 'menu_table');\n\n  createTableRow('menu_table', 'menu_tr_head', 'td_img', 'td_name', 'td_price', 'Name', 'Price');\n\n  createTableRow('menu_table', 'menu_tr_1', 'td_img_1', 'td_name_1', 'td_price_1', 'Vanilla croissant with sprinckles', '10$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/croiss_1.png', 'td_img_1', 'croiss_1');\n\n  createTableRow('menu_table', 'menu_tr_2', 'td_img_2', 'td_name_2', 'td_price_2', 'Strawberry croissant with chockolate sprinckles', '10$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/croiss_5.png', 'td_img_2', 'croiss_2');\n\n  createTableRow('menu_table', 'menu_tr_3', 'td_img_3', 'td_name_3', 'td_price_3', 'Raspberry croissant with vanilla cream', '10$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/croiss_3.png', 'td_img_3', 'croiss_3');\n\n  createTableRow('menu_table', 'menu_tr_4', 'td_img_4', 'td_name_4', 'td_price_4', 'Strawberry cheesecake macaron', '7$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/pink_macaroon.png', 'td_img_4', 'macaroon_1');\n\n  createTableRow('menu_table', 'menu_tr_5', 'td_img_5', 'td_name_5', 'td_price_5', 'Mango white chocolate macaron', '7$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/yellow_macaroon.png', 'td_img_5', 'macaroon_2');\n\n  createTableRow('menu_table', 'menu_tr_6', 'td_img_6', 'td_name_6', 'td_price_6', 'Lavender coconut macaron', '7$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/violet_macaroon.png', 'td_img_6', 'macaroon_3');\n\n  createTableRow('menu_table', 'menu_tr_7', 'td_img_7', 'td_name_7', 'td_price_7', 'Lime & Gin coconut macaron', '7$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/green_macaroon.png', 'td_img_7', 'macaroon_4');\n\n  createTableRow('menu_table', 'menu_tr_8', 'td_img_8', 'td_name_8', 'td_price_8', 'Mango coconut donut', '5$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/donut_1.png', 'td_img_8', 'donut_1');\n\n  createTableRow('menu_table', 'menu_tr_9', 'td_img_9', 'td_name_9', 'td_price_9', 'Raspberry pistachio donut', '5$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/donut_2.png', 'td_img_9', 'donut_2');\n\n  createTableRow('menu_table', 'menu_tr_10', 'td_img_10', 'td_name_10', 'td_price_10', 'Triple chocolate donut', '5$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/donut_3.png', 'td_img_10', 'donut_3');\n\n  createTableRow('menu_table', 'menu_tr_11', 'td_img_11', 'td_name_11', 'td_price_11', 'Vanilla cherry donut', '5$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/donut_4.png', 'td_img_11', 'donut_4');\n\n  createTableRow('menu_table', 'menu_tr_12', 'td_img_12', 'td_name_12', 'td_price_12', 'Prosecco donut', '5$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/donut_5.png', 'td_img_12', 'donut_5');\n\n  createTableRow('menu_table', 'menu_tr_13', 'td_img_13', 'td_name_13', 'td_price_13', 'Strawberry chocolate donut', '5$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/donut_6.png', 'td_img_13', 'donut_6');\n\n  createTableRow('menu_table', 'menu_tr_14', 'td_img_14', 'td_name_14', 'td_price_14', 'Blueberry coconut donut', '5$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/donut_7.png', 'td_img_14', 'donut_7');\n\n  createTableRow('menu_table', 'menu_tr_15', 'td_img_15', 'td_name_15', 'td_price_15', 'Champagne panna cotta donut', '5$');\n  Object(_elements__WEBPACK_IMPORTED_MODULE_0__[\"addImg\"])('https://pelzolga123.github.io/Restaurant/img/donut_8.png', 'td_img_15', 'donut_8');\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });