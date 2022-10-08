/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\nconst canvas = document.getElementById(\"canvas\");\ncanvas.width = 700;\ncanvas.height = 500;\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBZjtBQUNBSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSU4scURBQUosQ0FBU0MsTUFBVCxDQUFiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2luay1vYXItc3dpbS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNhbnZhcy53aWR0aCA9IDcwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbiJdLCJuYW1lcyI6WyJHYW1lIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bubble.js":
/*!*******************************!*\
  !*** ./src/scripts/bubble.js ***!
  \*******************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idWJibGUuanMuanMiLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5rLW9hci1zd2ltLy4vc3JjL3NjcmlwdHMvYnViYmxlLmpzP2IzOGEiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sIm1hcHBpbmdzIjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/bubble.js\n");

/***/ }),

/***/ "./src/scripts/dead-tree.js":
/*!**********************************!*\
  !*** ./src/scripts/dead-tree.js ***!
  \**********************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kZWFkLXRyZWUuanMuanMiLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5rLW9hci1zd2ltLy4vc3JjL3NjcmlwdHMvZGVhZC10cmVlLmpzPzNmNGMiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sIm1hcHBpbmdzIjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/dead-tree.js\n");

/***/ }),

/***/ "./src/scripts/game-view.js":
/*!**********************************!*\
  !*** ./src/scripts/game-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _rock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rock */ \"./src/scripts/rock.js\");\n\nconst rockImg1 = new Image();\nrockImg1.src = \"./assets/images/solids/rock1.png\";\nconst rockImg2 = new Image();\nrockImg2.src = \"./assets/images/solids/rock2.png\";\nconst rockImg3 = new Image();\nrockImg3.src = \"./assets/images/solids/rock3.png\";\nconst rocks = [rockImg1, rockImg2, rockImg3];\nclass GameView {\n  constructor(canvas) {\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.rocks = [new _rock__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, rocks[Math.floor(Math.random() * rocks.length)], this.rockPositions()[0]), new _rock__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, rocks[Math.floor(Math.random() * rocks.length)], this.rockPositions()[1]), new _rock__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, rocks[Math.floor(Math.random() * rocks.length)], this.rockPositions()[2])];\n    this.objects = [this.rocks];\n  }\n\n  animate() {\n    this.moveObjects();\n    this.rocks.forEach(rock => {\n      rock.animate();\n    });\n  }\n\n  moveObjects() {\n    this.objects[0].forEach(rock => {\n      rock.y += 2;\n    });\n\n    if (this.objects[0][0].y >= 490) {\n      this.rocks.shift();\n      this.rocks.push(new _rock__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, rocks[Math.floor(Math.random() * rocks.length)], this.rockPositions()[Math.floor(Math.random() * 2)]));\n    }\n  }\n\n  rockPositions() {\n    const rockPos = [{\n      x: 100,\n      y: -100\n    }, {\n      x: 300,\n      y: -300\n    }, {\n      x: 500,\n      y: -500\n    }];\n    return rockPos;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxHQUFKO01BQVNKLENBQUMsRUFBRSxDQUFDO0lBQWIsQ0FIZSxDQUFoQjtJQUtBLE9BQU9HLE9BQVA7RUFDQTs7QUFsQzRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2luay1vYXItc3dpbS8uL3NyYy9zY3JpcHRzL2dhbWUtdmlldy5qcz9jNmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb2NrIGZyb20gXCIuL3JvY2tcIjtcblxuY29uc3Qgcm9ja0ltZzEgPSBuZXcgSW1hZ2UoKTtcbnJvY2tJbWcxLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3NvbGlkcy9yb2NrMS5wbmdcIjtcbmNvbnN0IHJvY2tJbWcyID0gbmV3IEltYWdlKCk7XG5yb2NrSW1nMi5zcmMgPSBcIi4vYXNzZXRzL2ltYWdlcy9zb2xpZHMvcm9jazIucG5nXCI7XG5jb25zdCByb2NrSW1nMyA9IG5ldyBJbWFnZSgpO1xucm9ja0ltZzMuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvc29saWRzL3JvY2szLnBuZ1wiO1xuY29uc3Qgcm9ja3MgPSBbcm9ja0ltZzEsIHJvY2tJbWcyLCByb2NrSW1nM107XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuXHRjb25zdHJ1Y3RvcihjYW52YXMpIHtcblx0XHR0aGlzLmRpbWVuc2lvbnMgPSB7d2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0fTtcblx0XHR0aGlzLnJvY2tzID0gW25ldyBSb2NrKGNhbnZhcywgcm9ja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm9ja3MubGVuZ3RoKV0sIHRoaXMucm9ja1Bvc2l0aW9ucygpWzBdKSwgXG5cdFx0bmV3IFJvY2soY2FudmFzLCByb2Nrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcm9ja3MubGVuZ3RoKV0sIHRoaXMucm9ja1Bvc2l0aW9ucygpWzFdKSwgXG5cdFx0bmV3IFJvY2soY2FudmFzLCByb2Nrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcm9ja3MubGVuZ3RoKV0sIHRoaXMucm9ja1Bvc2l0aW9ucygpWzJdKV07XG5cdFx0dGhpcy5vYmplY3RzID0gW3RoaXMucm9ja3NdXHRcdFxuXHR9XG5cblx0YW5pbWF0ZSgpIHtcblx0XHR0aGlzLm1vdmVPYmplY3RzKCk7XG5cdFx0dGhpcy5yb2Nrcy5mb3JFYWNoKChyb2NrKSA9PiB7XG5cdFx0XHRyb2NrLmFuaW1hdGUoKTtcdFx0XHRcblx0XHR9KVx0XHRcblx0fVxuXG5cdG1vdmVPYmplY3RzKCkge1xuXHRcdHRoaXMub2JqZWN0c1swXS5mb3JFYWNoKChyb2NrKSA9PiB7XG5cdFx0XHRyb2NrLnkgKz0gMjtcdFx0XHRcblx0XHR9KVxuXG5cdFx0aWYgKHRoaXMub2JqZWN0c1swXVswXS55ID49IDQ5MCkge1xuXHRcdFx0dGhpcy5yb2Nrcy5zaGlmdCgpO1xuXHRcdFx0dGhpcy5yb2Nrcy5wdXNoKG5ldyBSb2NrKGNhbnZhcywgcm9ja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm9ja3MubGVuZ3RoKV0sIHRoaXMucm9ja1Bvc2l0aW9ucygpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSkpO1xuXHRcdH1cdFx0XG5cdH1cblxuXHRyb2NrUG9zaXRpb25zKCkge1xuXHRcdGNvbnN0IHJvY2tQb3MgPSBbXG5cdFx0XHR7eDogMTAwLCB5OiAtMTAwfSxcblx0XHRcdHt4OiAzMDAsIHk6IC0zMDB9LFxuXHRcdFx0e3g6IDUwMCwgeTogLTUwMH1cblx0XHRdXG5cdFx0cmV0dXJuIHJvY2tQb3M7XG5cdH1cblxufSJdLCJuYW1lcyI6WyJSb2NrIiwicm9ja0ltZzEiLCJJbWFnZSIsInNyYyIsInJvY2tJbWcyIiwicm9ja0ltZzMiLCJyb2NrcyIsIkdhbWVWaWV3IiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJyb2NrUG9zaXRpb25zIiwib2JqZWN0cyIsImFuaW1hdGUiLCJtb3ZlT2JqZWN0cyIsImZvckVhY2giLCJyb2NrIiwieSIsInNoaWZ0IiwicHVzaCIsInJvY2tQb3MiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game-view.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble */ \"./src/scripts/bubble.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bubble__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rock */ \"./src/scripts/rock.js\");\n/* harmony import */ var _turtle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./turtle */ \"./src/scripts/turtle.js\");\n/* harmony import */ var _turtle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_turtle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _dead_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dead-tree */ \"./src/scripts/dead-tree.js\");\n/* harmony import */ var _dead_tree__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dead_tree__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-view */ \"./src/scripts/game-view.js\");\n\n\n\n\n\n\nconst waterImg = new Image();\nwaterImg.src = \"./assets/images/water/water.jpg\";\nclass Game {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.canvas = canvas;\n    this.play();\n    this.eventListeners();\n  }\n\n  animate(ctx) {\n    ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n    console.log(waterImg);\n    this.gameView.animate();\n    this.player.animate();\n    requestAnimationFrame(this.animate.bind(this, ctx));\n  }\n\n  play() {\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas);\n    this.gameView = new _game_view__WEBPACK_IMPORTED_MODULE_5__[\"default\"](canvas);\n    this.playing = true;\n    this.animate(this.ctx);\n  }\n\n  eventListeners() {\n    addEventListener(\"keydown\", e => {\n      if (e.code === \"ArrowLeft\") {\n        this.player.velocityL = -3;\n        this.player.paddling = true;\n      }\n\n      if (e.code === \"ArrowRight\") {\n        this.player.velocityR = 3;\n        this.player.paddling = true;\n      }\n    });\n    addEventListener(\"keyup\", e => {\n      if (e.code === \"ArrowLeft\") {\n        this.player.velocityL = 0;\n        this.player.paddling = false;\n      }\n\n      if (e.code === \"ArrowRight\") {\n        this.player.velocityR = 0;\n        this.player.paddling = false;\n      }\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTSxRQUFRLEdBQUcsSUFBSUMsS0FBSixFQUFqQjtBQUNBRCxRQUFRLENBQUNFLEdBQVQsR0FBZSxpQ0FBZjtBQUdlLE1BQU1DLElBQU4sQ0FBVztFQUN6QkMsV0FBVyxDQUFDQyxNQUFELEVBQVM7SUFDbkIsS0FBS0MsR0FBTCxHQUFXRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtJQUNFLEtBQUtDLFVBQUwsR0FBa0I7TUFBRUMsS0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQWhCO01BQXVCQyxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7SUFBdEMsQ0FBbEI7SUFDQSxLQUFLTCxNQUFMLEdBQWNBLE1BQWQ7SUFDRixLQUFLTSxJQUFMO0lBQ0EsS0FBS0MsY0FBTDtFQUNBOztFQUVEQyxPQUFPLENBQUNQLEdBQUQsRUFBTTtJQUNaQSxHQUFHLENBQUNRLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUtOLFVBQUwsQ0FBZ0JDLEtBQXBDLEVBQTJDLEtBQUtELFVBQUwsQ0FBZ0JFLE1BQTNEO0lBQ0FLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsUUFBWjtJQUdBLEtBQUtpQixRQUFMLENBQWNKLE9BQWQ7SUFFQSxLQUFLSyxNQUFMLENBQVlMLE9BQVo7SUFDQU0scUJBQXFCLENBQUMsS0FBS04sT0FBTCxDQUFhTyxJQUFiLENBQWtCLElBQWxCLEVBQXdCZCxHQUF4QixDQUFELENBQXJCO0VBQ0E7O0VBRURLLElBQUksR0FBRztJQUNOLEtBQUtPLE1BQUwsR0FBYyxJQUFJeEIsK0NBQUosQ0FBVyxLQUFLVyxNQUFoQixDQUFkO0lBQ0EsS0FBS1ksUUFBTCxHQUFnQixJQUFJbEIsa0RBQUosQ0FBYU0sTUFBYixDQUFoQjtJQUNBLEtBQUtnQixPQUFMLEdBQWUsSUFBZjtJQUNBLEtBQUtSLE9BQUwsQ0FBYSxLQUFLUCxHQUFsQjtFQUNBOztFQUVETSxjQUFjLEdBQUc7SUFDaEJVLGdCQUFnQixDQUFDLFNBQUQsRUFBYUMsQ0FBRCxJQUFPO01BQ2xDLElBQUlBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLFdBQWYsRUFBNEI7UUFDM0IsS0FBS04sTUFBTCxDQUFZTyxTQUFaLEdBQXdCLENBQUMsQ0FBekI7UUFDQSxLQUFLUCxNQUFMLENBQVlRLFFBQVosR0FBdUIsSUFBdkI7TUFDQTs7TUFFRCxJQUFJSCxDQUFDLENBQUNDLElBQUYsS0FBVyxZQUFmLEVBQTZCO1FBQzVCLEtBQUtOLE1BQUwsQ0FBWVMsU0FBWixHQUF3QixDQUF4QjtRQUNBLEtBQUtULE1BQUwsQ0FBWVEsUUFBWixHQUF1QixJQUF2QjtNQUNBO0lBQ0QsQ0FWZSxDQUFoQjtJQVlBSixnQkFBZ0IsQ0FBQyxPQUFELEVBQVdDLENBQUQsSUFBTztNQUNoQyxJQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxXQUFmLEVBQTRCO1FBQzNCLEtBQUtOLE1BQUwsQ0FBWU8sU0FBWixHQUF3QixDQUF4QjtRQUVBLEtBQUtQLE1BQUwsQ0FBWVEsUUFBWixHQUF1QixLQUF2QjtNQUNBOztNQUNELElBQUlILENBQUMsQ0FBQ0MsSUFBRixLQUFXLFlBQWYsRUFBNkI7UUFDNUIsS0FBS04sTUFBTCxDQUFZUyxTQUFaLEdBQXdCLENBQXhCO1FBQ0EsS0FBS1QsTUFBTCxDQUFZUSxRQUFaLEdBQXVCLEtBQXZCO01BRUE7SUFDRCxDQVhlLENBQWhCO0VBWUE7O0FBcER3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Npbmstb2FyLXN3aW0vLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBCdWJibGUgZnJvbSBcIi4vYnViYmxlXCI7XG5pbXBvcnQgUm9jayBmcm9tIFwiLi9yb2NrXCI7XG5pbXBvcnQgVHVydGxlIGZyb20gXCIuL3R1cnRsZVwiO1xuaW1wb3J0IERlYWRUcmVlIGZyb20gXCIuL2RlYWQtdHJlZVwiOyBcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9nYW1lLXZpZXdcIjtcblxuY29uc3Qgd2F0ZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbndhdGVySW1nLnNyYyA9IFwiLi9hc3NldHMvaW1hZ2VzL3dhdGVyL3dhdGVyLmpwZ1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cdGNvbnN0cnVjdG9yKGNhbnZhcykge1xuXHRcdHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXHRcdHRoaXMucGxheSgpOyBcblx0XHR0aGlzLmV2ZW50TGlzdGVuZXJzKCk7XG5cdH1cblxuXHRhbmltYXRlKGN0eCkge1xuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblx0XHRjb25zb2xlLmxvZyh3YXRlckltZylcblx0XHRcblxuXHRcdHRoaXMuZ2FtZVZpZXcuYW5pbWF0ZSgpO1xuXHRcdFxuXHRcdHRoaXMucGxheWVyLmFuaW1hdGUoKTtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcywgY3R4KSk7XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcyk7XG5cdFx0dGhpcy5nYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMpO1xuXHRcdHRoaXMucGxheWluZyA9IHRydWU7XG5cdFx0dGhpcy5hbmltYXRlKHRoaXMuY3R4KTtcblx0fVxuXG5cdGV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdGFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHRcdFxuXHRcdFx0aWYgKGUuY29kZSA9PT0gXCJBcnJvd0xlZnRcIikge1xuXHRcdFx0XHR0aGlzLnBsYXllci52ZWxvY2l0eUwgPSAtMztcblx0XHRcdFx0dGhpcy5wbGF5ZXIucGFkZGxpbmcgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZS5jb2RlID09PSBcIkFycm93UmlnaHRcIikge1xuXHRcdFx0XHR0aGlzLnBsYXllci52ZWxvY2l0eVIgPSAzO1xuXHRcdFx0XHR0aGlzLnBsYXllci5wYWRkbGluZyA9IHRydWU7XG5cdFx0XHR9IFxuXHRcdH0pXG5cdFx0XG5cdFx0YWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS5jb2RlID09PSBcIkFycm93TGVmdFwiKSB7XG5cdFx0XHRcdHRoaXMucGxheWVyLnZlbG9jaXR5TCA9IDA7XG5cblx0XHRcdFx0dGhpcy5wbGF5ZXIucGFkZGxpbmcgPSBmYWxzZTtcblx0XHRcdH0gXG5cdFx0XHRpZiAoZS5jb2RlID09PSBcIkFycm93UmlnaHRcIikge1xuXHRcdFx0XHR0aGlzLnBsYXllci52ZWxvY2l0eVIgPSAwO1xuXHRcdFx0XHR0aGlzLnBsYXllci5wYWRkbGluZyA9IGZhbHNlO1xuXG5cdFx0XHR9XHRcdFx0XG5cdFx0fSlcblx0fVxuXG59Il0sIm5hbWVzIjpbIlBsYXllciIsIkJ1YmJsZSIsIlJvY2siLCJUdXJ0bGUiLCJEZWFkVHJlZSIsIkdhbWVWaWV3Iiwid2F0ZXJJbWciLCJJbWFnZSIsInNyYyIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJwbGF5IiwiZXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiY29uc29sZSIsImxvZyIsImdhbWVWaWV3IiwicGxheWVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInBsYXlpbmciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJ2ZWxvY2l0eUwiLCJwYWRkbGluZyIsInZlbG9jaXR5UiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-view */ \"./src/scripts/game-view.js\");\n\nconst playerImg = new Image();\nplayerImg.src = \"./assets/images/player.png\";\nconst playerAltImg = new Image();\nplayerAltImg.src = \"./assets/images/player-alt.png\";\nclass Player {\n  constructor(canvas) {\n    this.velocityL = 0;\n    this.velocityR = 0;\n    this.paddling = false;\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.position = {\n      vertical: this.dimensions.height / 2 + 100,\n      horizontal: this.dimensions.width / 2 - 65\n    };\n    this.ctx = canvas.getContext(\"2d\");\n  }\n\n  drawPlayer(ctx) {\n    if (this.paddling) {\n      ctx.drawImage(playerAltImg, this.position.horizontal, this.position.vertical, 150, 120);\n    } else {\n      ctx.drawImage(playerImg, this.position.horizontal, this.position.vertical, 150, 120);\n    }\n  }\n\n  animate() {\n    this.move();\n    this.drawPlayer(this.ctx);\n  }\n\n  move() {\n    this.checkBoundaries();\n    this.position.horizontal += this.velocityL;\n    this.position.horizontal += this.velocityR;\n  }\n\n  checkBoundaries() {\n    const boundes = this.bounds();\n\n    if (this.position.horizontal < 0) {\n      this.velocityL = 0;\n    }\n\n    if (this.position.horizontal + 150 > this.dimensions.width) {\n      this.velocityR = 0;\n    }\n  }\n\n  bounds() {\n    return {\n      left: this.position.horizontal + 50,\n      right: this.position.horizontal + 100,\n      top: this.position.vertical,\n      bottom: this.position.vertical + 120\n    };\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxLQUFKLEVBQWxCO0FBQ0FELFNBQVMsQ0FBQ0UsR0FBVixHQUFnQiw0QkFBaEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUYsS0FBSixFQUFyQjtBQUNBRSxZQUFZLENBQUNELEdBQWIsR0FBbUIsZ0NBQW5CO0FBR2UsTUFBTUUsTUFBTixDQUFhO0VBQzNCQyxXQUFXLENBQUNDLE1BQUQsRUFBUztJQUNuQixLQUFLQyxTQUFMLEdBQWlCLENBQWpCO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixDQUFqQjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7SUFDQSxLQUFLQyxVQUFMLEdBQWtCO01BQUNDLEtBQUssRUFBRUwsTUFBTSxDQUFDSyxLQUFmO01BQXNCQyxNQUFNLEVBQUVOLE1BQU0sQ0FBQ007SUFBckMsQ0FBbEI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCO01BQUNDLFFBQVEsRUFBRSxLQUFLSixVQUFMLENBQWdCRSxNQUFoQixHQUF5QixDQUF6QixHQUE2QixHQUF4QztNQUE2Q0csVUFBVSxFQUFFLEtBQUtMLFVBQUwsQ0FBZ0JDLEtBQWhCLEdBQXdCLENBQXhCLEdBQTRCO0lBQXJGLENBQWhCO0lBQ0EsS0FBS0ssR0FBTCxHQUFXVixNQUFNLENBQUNXLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtFQUNBOztFQUVEQyxVQUFVLENBQUNGLEdBQUQsRUFBTTtJQUNmLElBQUksS0FBS1AsUUFBVCxFQUFtQjtNQUNsQk8sR0FBRyxDQUFDRyxTQUFKLENBQWNoQixZQUFkLEVBQTRCLEtBQUtVLFFBQUwsQ0FBY0UsVUFBMUMsRUFBc0QsS0FBS0YsUUFBTCxDQUFjQyxRQUFwRSxFQUE4RSxHQUE5RSxFQUFtRixHQUFuRjtJQUNBLENBRkQsTUFFTztNQUNORSxHQUFHLENBQUNHLFNBQUosQ0FBY25CLFNBQWQsRUFBeUIsS0FBS2EsUUFBTCxDQUFjRSxVQUF2QyxFQUFtRCxLQUFLRixRQUFMLENBQWNDLFFBQWpFLEVBQTJFLEdBQTNFLEVBQWdGLEdBQWhGO0lBQ0E7RUFDRDs7RUFFRE0sT0FBTyxHQUFHO0lBQ1QsS0FBS0MsSUFBTDtJQUNBLEtBQUtILFVBQUwsQ0FBZ0IsS0FBS0YsR0FBckI7RUFDQTs7RUFFREssSUFBSSxHQUFHO0lBQ04sS0FBS0MsZUFBTDtJQUNBLEtBQUtULFFBQUwsQ0FBY0UsVUFBZCxJQUE0QixLQUFLUixTQUFqQztJQUNBLEtBQUtNLFFBQUwsQ0FBY0UsVUFBZCxJQUE0QixLQUFLUCxTQUFqQztFQUNBOztFQUVEYyxlQUFlLEdBQUc7SUFDakIsTUFBTUMsT0FBTyxHQUFHLEtBQUtDLE1BQUwsRUFBaEI7O0lBQ0EsSUFBSSxLQUFLWCxRQUFMLENBQWNFLFVBQWQsR0FBMkIsQ0FBL0IsRUFBa0M7TUFDakMsS0FBS1IsU0FBTCxHQUFpQixDQUFqQjtJQUNBOztJQUVELElBQUksS0FBS00sUUFBTCxDQUFjRSxVQUFkLEdBQTJCLEdBQTNCLEdBQWlDLEtBQUtMLFVBQUwsQ0FBZ0JDLEtBQXJELEVBQTREO01BQzNELEtBQUtILFNBQUwsR0FBaUIsQ0FBakI7SUFDQTtFQUNEOztFQUVEZ0IsTUFBTSxHQUFHO0lBQ04sT0FBTztNQUNMQyxJQUFJLEVBQUUsS0FBS1osUUFBTCxDQUFjRSxVQUFkLEdBQTJCLEVBRDVCO01BRUxXLEtBQUssRUFBRSxLQUFLYixRQUFMLENBQWNFLFVBQWQsR0FBMkIsR0FGN0I7TUFHTFksR0FBRyxFQUFFLEtBQUtkLFFBQUwsQ0FBY0MsUUFIZDtNQUlMYyxNQUFNLEVBQUUsS0FBS2YsUUFBTCxDQUFjQyxRQUFkLEdBQXlCO0lBSjVCLENBQVA7RUFNRjs7QUEvQzBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2luay1vYXItc3dpbS8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9nYW1lLXZpZXdcIjtcblxuY29uc3QgcGxheWVySW1nID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGxheWVyLnBuZ1wiO1xuY29uc3QgcGxheWVyQWx0SW1nID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJBbHRJbWcuc3JjID0gXCIuL2Fzc2V0cy9pbWFnZXMvcGxheWVyLWFsdC5wbmdcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuXHRjb25zdHJ1Y3RvcihjYW52YXMpIHtcblx0XHR0aGlzLnZlbG9jaXR5TCA9IDA7XG5cdFx0dGhpcy52ZWxvY2l0eVIgPSAwO1xuXHRcdHRoaXMucGFkZGxpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmRpbWVuc2lvbnMgPSB7d2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0fTtcblx0XHR0aGlzLnBvc2l0aW9uID0ge3ZlcnRpY2FsOiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDEwMCwgaG9yaXpvbnRhbDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiAtIDY1IH07XG5cdFx0dGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHR9XG5cblx0ZHJhd1BsYXllcihjdHgpIHtcdFx0XG5cdFx0aWYgKHRoaXMucGFkZGxpbmcpIHtcblx0XHRcdGN0eC5kcmF3SW1hZ2UocGxheWVyQWx0SW1nLCB0aGlzLnBvc2l0aW9uLmhvcml6b250YWwsIHRoaXMucG9zaXRpb24udmVydGljYWwsIDE1MCwgMTIwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShwbGF5ZXJJbWcsIHRoaXMucG9zaXRpb24uaG9yaXpvbnRhbCwgdGhpcy5wb3NpdGlvbi52ZXJ0aWNhbCwgMTUwLCAxMjApO1xuXHRcdH1cblx0fVxuXG5cdGFuaW1hdGUoKSB7XG5cdFx0dGhpcy5tb3ZlKCk7XG5cdFx0dGhpcy5kcmF3UGxheWVyKHRoaXMuY3R4KTtcblx0fVxuXG5cdG1vdmUoKSB7XG5cdFx0dGhpcy5jaGVja0JvdW5kYXJpZXMoKTtcblx0XHR0aGlzLnBvc2l0aW9uLmhvcml6b250YWwgKz0gdGhpcy52ZWxvY2l0eUw7XG5cdFx0dGhpcy5wb3NpdGlvbi5ob3Jpem9udGFsICs9IHRoaXMudmVsb2NpdHlSO1xuXHR9XG5cblx0Y2hlY2tCb3VuZGFyaWVzKCkge1xuXHRcdGNvbnN0IGJvdW5kZXMgPSB0aGlzLmJvdW5kcygpO1xuXHRcdGlmICh0aGlzLnBvc2l0aW9uLmhvcml6b250YWwgPCAwKSB7XG5cdFx0XHR0aGlzLnZlbG9jaXR5TCA9IDA7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucG9zaXRpb24uaG9yaXpvbnRhbCArIDE1MCA+IHRoaXMuZGltZW5zaW9ucy53aWR0aCkge1xuXHRcdFx0dGhpcy52ZWxvY2l0eVIgPSAwO1xuXHRcdH1cblx0fVxuXG5cdGJvdW5kcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi5ob3Jpem9udGFsICsgNTAsXG4gICAgICByaWdodDogdGhpcy5wb3NpdGlvbi5ob3Jpem9udGFsICsgMTAwLFxuICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnZlcnRpY2FsLFxuICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnZlcnRpY2FsICsgMTIwXG4gICAgfTtcblx0fVxufVxuXG4iXSwibmFtZXMiOlsiR2FtZVZpZXciLCJwbGF5ZXJJbWciLCJJbWFnZSIsInNyYyIsInBsYXllckFsdEltZyIsIlBsYXllciIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwidmVsb2NpdHlMIiwidmVsb2NpdHlSIiwicGFkZGxpbmciLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3UGxheWVyIiwiZHJhd0ltYWdlIiwiYW5pbWF0ZSIsIm1vdmUiLCJjaGVja0JvdW5kYXJpZXMiLCJib3VuZGVzIiwiYm91bmRzIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/rock.js":
/*!*****************************!*\
  !*** ./src/scripts/rock.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Rock; }\n/* harmony export */ });\nclass Rock {\n  constructor(canvas, image, position) {\n    this.velocity = 2;\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.x = position.x;\n    this.y = position.y;\n    this.ctx = canvas.getContext(\"2d\");\n    this.image = image;\n  }\n\n  animate() {\n    this.ctx.drawImage(this.image, this.x, this.y, 150, 120);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9yb2NrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFOLENBQVc7RUFDekJDLFdBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQWdCQyxRQUFoQixFQUEwQjtJQUNwQyxLQUFLQyxRQUFMLEdBQWdCLENBQWhCO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQjtNQUFDQyxLQUFLLEVBQUVMLE1BQU0sQ0FBQ0ssS0FBZjtNQUFzQkMsTUFBTSxFQUFFTixNQUFNLENBQUNNO0lBQXJDLENBQWxCO0lBQ0EsS0FBS0MsQ0FBTCxHQUFTTCxRQUFRLENBQUNLLENBQWxCO0lBQ0EsS0FBS0MsQ0FBTCxHQUFTTixRQUFRLENBQUNNLENBQWxCO0lBQ0EsS0FBS0MsR0FBTCxHQUFXVCxNQUFNLENBQUNVLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtJQUNBLEtBQUtULEtBQUwsR0FBYUEsS0FBYjtFQUNBOztFQUVEVSxPQUFPLEdBQUc7SUFDVCxLQUFLRixHQUFMLENBQVNHLFNBQVQsQ0FBbUIsS0FBS1gsS0FBeEIsRUFBK0IsS0FBS00sQ0FBcEMsRUFBdUMsS0FBS0MsQ0FBNUMsRUFBK0MsR0FBL0MsRUFBb0QsR0FBcEQ7RUFDQTs7QUFad0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5rLW9hci1zd2ltLy4vc3JjL3NjcmlwdHMvcm9jay5qcz80YzA2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvY2sge1xuXHRjb25zdHJ1Y3RvcihjYW52YXMsIGltYWdlLCBwb3NpdGlvbikge1xuXHRcdHRoaXMudmVsb2NpdHkgPSAyO1xuXHRcdHRoaXMuZGltZW5zaW9ucyA9IHt3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHR9O1xuXHRcdHRoaXMueCA9IHBvc2l0aW9uLng7XG5cdFx0dGhpcy55ID0gcG9zaXRpb24ueTtcblx0XHR0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHRcblx0XHR0aGlzLmltYWdlID0gaW1hZ2U7XHRcdFxuXHR9XG5cdFxuXHRhbmltYXRlKCkge1xuXHRcdHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLngsIHRoaXMueSwgMTUwLCAxMjApO1xuXHR9XG5cbn0iXSwibmFtZXMiOlsiUm9jayIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiaW1hZ2UiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJjdHgiLCJnZXRDb250ZXh0IiwiYW5pbWF0ZSIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/rock.js\n");

/***/ }),

/***/ "./src/scripts/turtle.js":
/*!*******************************!*\
  !*** ./src/scripts/turtle.js ***!
  \*******************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90dXJ0bGUuanMuanMiLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5rLW9hci1zd2ltLy4vc3JjL3NjcmlwdHMvdHVydGxlLmpzP2VmZmYiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sIm1hcHBpbmdzIjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/turtle.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5rLW9hci1zd2ltLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;