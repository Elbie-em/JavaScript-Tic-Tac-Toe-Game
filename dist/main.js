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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".cell {\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  font-size: 50px;\\r\\n  border: 1px solid #e2e2e2;\\r\\n  margin: -4px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.cell:focus {\\r\\n  outline: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_doman_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/doman.js */ \"./src/modules/doman.js\");\n/* harmony import */ var _modules_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game.js */ \"./src/modules/game.js\");\n/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player.js */ \"./src/modules/player.js\");\n/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_player_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nconst game = Object(_modules_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nconsole.log(game.validatePlayerName('Abdel'));\r\n\r\nconsole.log(game.addPlayer('Abdel'));\r\nconsole.log(game.addPlayer('Elbie'));\r\nconsole.log(game.showPlayers());\r\n\r\nconsole.log\r\n// const selectCell = (cellIdx) => {\r\n//   const currentPlayer = Game.getCurrentPlayer();\r\n//   Game.selectCell(cellIdx, currentPlayer);\r\n//   Doman.updateCell(cellIdx, currentPlayer);\r\n//   const winner = Game.checkWinner();\r\n\r\n//   if (winner || Game.getNumberCellsSelected() === 9) {\r\n//     Doman.showWinner(winner);\r\n//     Doman.disableButtons();\r\n//     Doman.hidePlayerTurn();\r\n//   } else {\r\n//     Game.changePlayerTurn();\r\n//     Doman.displayPlayerTurn(Game.getCurrentPlayer());\r\n//   }\r\n// };\r\n\r\n// const initGame = () => {\r\n//   const playersNames = Doman.getPlayersNames();\r\n\r\n//   Game.addPlayer(playersNames.player1Name);\r\n//   Game.addPlayer(playersNames.player2Name);\r\n//   Game.start();\r\n\r\n//   if(Game.started) {\r\n//     Doman.hidePlayersForm();\r\n//     Doman.assignCells(selectCell);\r\n//     Doman.displayPlayerTurn(Game.getCurrentPlayer());\r\n//     Doman.displayBoard();\r\n//     Doman.enableButtons();\r\n//   } else {\r\n//     Doman.displayError(Game.errors);\r\n//   }\r\n// };\r\n\r\n// window.onload = () => {\r\n//   Doman.assignStartBtn(initGame);\r\n// };\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/doman.js":
/*!******************************!*\
  !*** ./src/modules/doman.js ***!
  \******************************/
/*! exports provided: assignStartBtn, getPlayersNames, displayError, hidePlayersForm, assignCells, displayBoard, enableButtons, updateCell, showWinner, displayPlayerTurn, disableButtons, hidePlayerTurn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignStartBtn\", function() { return assignStartBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlayersNames\", function() { return getPlayersNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayError\", function() { return displayError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hidePlayersForm\", function() { return hidePlayersForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignCells\", function() { return assignCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayBoard\", function() { return displayBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableButtons\", function() { return enableButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateCell\", function() { return updateCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showWinner\", function() { return showWinner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayPlayerTurn\", function() { return displayPlayerTurn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disableButtons\", function() { return disableButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hidePlayerTurn\", function() { return hidePlayerTurn; });\nconst displayBoard = () => {\r\n  const board = document.getElementById('board');\r\n  board.hidden = !board.hidden;\r\n};\r\n\r\nconst hidePlayerTurn = () => {\r\n  const playerTurnLabel = document.getElementById('messages');\r\n  playerTurnLabel.hidden = true;\r\n};\r\n\r\nconst enableButtons = () => {\r\n  const cells = document.getElementsByClassName('cell');\r\n  for (let i = 0; i < cells.length; i += 1) {\r\n    cells[i].disabled = false;\r\n  }\r\n};\r\n\r\nconst disableButtons = () => {\r\n  const cells = document.getElementsByClassName('cell');\r\n  for (let i = 0; i < cells.length; i += 1) {\r\n    cells[i].disabled = true;\r\n  }\r\n};\r\n\r\nconst showWinner = (player = null) => {\r\n  const winnerResult = document.getElementById('game-result');\r\n\r\n  if (player) {\r\n    winnerResult.innerHTML = `${player.name} has won`;\r\n  } else {\r\n    winnerResult.innerHTML = \"It's a draw\";\r\n  }\r\n};\r\n\r\nconst displayPlayerTurn = (currentPlayer) => {\r\n  const msgEl = document.getElementById('messages');\r\n  msgEl.innerHTML = '';\r\n  msgEl.className = 'text-dark';\r\n  msgEl.innerHTML = `${currentPlayer.name}'s turn`;\r\n};\r\n\r\nconst displayError = (error) => {\r\n  const msgEl = document.getElementById('messages');\r\n  msgEl.innerHTML = '';\r\n  const inputError = 'w-75 mx-auto form-control border border-danger';\r\n\r\n  for (let i = 0; i < error.messages.length; i += 1) {\r\n    const input = document.getElementById(error.messages[i].input);\r\n    input.className = inputError;\r\n    const li = document.createElement('li');\r\n    li.className = 'list-group-item border border-0';\r\n    li.innerHTML = error.messages[i].msg;\r\n    msgEl.appendChild(li);\r\n  }\r\n\r\n  const msgError = 'text-danger';\r\n  msgEl.classList.add(msgError);\r\n};\r\n\r\nconst assignCells = (cellSelector) => {\r\n  for (let i = 0; i < 9; i += 1) {\r\n    const cell = document.getElementById(`pos${i}`);\r\n    cell.onclick = () => cellSelector(i);\r\n  }\r\n};\r\n\r\nconst assignStartBtn = (initGame) => {\r\n  const startBtn = document.getElementById('start-game');\r\n  startBtn.onclick = initGame;\r\n};\r\n\r\nconst getPlayersNames = () => {\r\n  const player1Name = document.getElementById('player-one').value;\r\n  const player2Name = document.getElementById('player-two').value;\r\n\r\n  return { player1Name, player2Name };\r\n};\r\n\r\nconst hidePlayersForm = () => {\r\n  const playersForm = document.getElementById('players-form');\r\n  playersForm.hidden = true;\r\n};\r\n\r\nconst updateCell = (cellIdx, player) => {\r\n  const cell = document.getElementById(`pos${cellIdx}`);\r\n  cell.innerHTML = player.symbol;\r\n  cell.disabled = true;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/doman.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction* generateId() {\r\n  let i = 1;\r\n  while(i < 3)\r\n  yield i++;\r\n}\r\n\r\nconst Game = () => {\r\n  let gameBoard = new Array(9);\r\n  let players = [];\r\n  let currentPlayer;\r\n  let numberCellsSelected = 0;\r\n  let winner;\r\n  let numberOfPlayers = generateId();\r\n\r\n  const genPlayerId = () => numberOfPlayers.next().value;\r\n\r\n  const validatePlayerName = (name) => {\r\n    const unique = !players.some(player => player.name === name);\r\n\r\n    return unique && name.trim();\r\n  };\r\n\r\n  const addPlayer = (name) => {\r\n    const validUserName = validatePlayerName(name);\r\n    if(validUserName) {\r\n      const id = genPlayerId();\r\n      const symbol = id === 1 ? 'X' : 'O';\r\n\r\n      players.push({id, name, symbol});\r\n    } else {\r\n      return Error('user not added');\r\n    }\r\n  };\r\n\r\n  const getCurrentPlayer = () => currentPlayer;\r\n\r\n  const getNumberCellsSelected = () => numberCellsSelected;\r\n\r\n  const showPlayers = () => players; // temporal\r\n  \r\n  const checkPlayers = (combination) => {\r\n    const unified = [...new Set(combination)];\r\n\r\n    return (unified.length === 1 && unified[0] !== '') ? unified[0] : false;\r\n  };\r\n\r\n  const checkWinner = () => {\r\n    const diag1 = [];\r\n    const diag2 = [];\r\n\r\n    for (let i = 0; i < 3; i += 1) {\r\n      const row = gameBoard.slice(i * 3, i * 3 + 3);\r\n      if (checkPlayers(row)) {\r\n        winner = currentPlayer;\r\n        return winner;\r\n      }\r\n      const col = [gameBoard[i], gameBoard[i + 3], gameBoard[i + 6]];\r\n      if (checkPlayers(col)) {\r\n        winner = currentPlayer;\r\n        return winner;\r\n      }\r\n\r\n      diag1.push(gameBoard[i * 4]);\r\n      diag2.push(gameBoard[i * 2 + 2]);\r\n    }\r\n\r\n    if (checkPlayers(diag1)) {\r\n      winner = currentPlayer;\r\n      return winner;\r\n    }\r\n    if (checkPlayers(diag2)) {\r\n      winner = currentPlayer;\r\n      return winner;\r\n    }\r\n\r\n    return null;\r\n  };\r\n\r\n  const changeCurrentPlayer = (playerId) => {\r\n    // validate that the user is either 1 or 2\r\n    currentPlayer = playerId;\r\n  };\r\n\r\n  const selectCell = (cellIdx, currentPlayer) => {\r\n    // check cell availability\r\n    gameBoard[cellIdx] = currentPlayer.symbol;\r\n    numberCellsSelected += 1;\r\n  };\r\n\r\n  const start = () => {\r\n    // check if there are players\r\n    changeCurrentPlayer(players[0].id);\r\n  };\r\n\r\n  return {genPlayerId,\r\n          validatePlayerName,\r\n          addPlayer,\r\n          showPlayers};\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function* generateId() {\r\n//   let i = 0;\r\n//   while(i < 1)\r\n//   yield i++;\r\n// }\r\n\r\n// const Player = (name) => {\r\n//    const id: generateId, name, symbol\r\n//    );\r\n\r\n// export default Player;\n\n//# sourceURL=webpack:///./src/modules/player.js?");

/***/ })

/******/ });