/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Ball.ts":
/*!*********************!*\
  !*** ./src/Ball.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Ball = /** @class */ (function () {\r\n    function Ball(initialX, initialY, initialVX, initialVY, size, ballType) {\r\n        this.x = initialX;\r\n        this.y = initialY;\r\n        this.vx = initialVX;\r\n        this.vy = initialVY;\r\n        this.size = size;\r\n        this.ballType = ballType;\r\n    }\r\n    Ball.prototype.getX = function () {\r\n        return this.x;\r\n    };\r\n    Ball.prototype.getY = function () {\r\n        return this.y;\r\n    };\r\n    Ball.prototype.setX = function (x) {\r\n        this.x = x;\r\n    };\r\n    Ball.prototype.setY = function (y) {\r\n        this.y = y;\r\n    };\r\n    Ball.prototype.getVx = function () {\r\n        return this.vx;\r\n    };\r\n    Ball.prototype.getVy = function () {\r\n        return this.vy;\r\n    };\r\n    Ball.prototype.invertVX = function () {\r\n        this.vx *= -1;\r\n    };\r\n    Ball.prototype.invertVY = function () {\r\n        this.vy *= -1;\r\n    };\r\n    Ball.prototype.getSize = function () {\r\n        return this.size;\r\n    };\r\n    Ball.prototype.getBallType = function () {\r\n        return this.ballType;\r\n    };\r\n    Ball.prototype.update = function (ctx, world) {\r\n        this.ballType.update(ctx, this, world);\r\n    };\r\n    return Ball;\r\n}());\r\nexports[\"default\"] = Ball;\r\n\n\n//# sourceURL=webpack:///./src/Ball.ts?");

/***/ }),

/***/ "./src/BallFactory.ts":
/*!****************************!*\
  !*** ./src/BallFactory.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Ball_1 = __importDefault(__webpack_require__(/*! ./Ball */ \"./src/Ball.ts\"));\r\nvar BallType_1 = __importDefault(__webpack_require__(/*! ./BallType */ \"./src/BallType.ts\"));\r\nvar BallFactory = /** @class */ (function () {\r\n    function BallFactory() {\r\n        this.ballTypes = [];\r\n    }\r\n    BallFactory.prototype.createBall = function (initialX, initialY, initialVX, initialVY, type, size, color) {\r\n        var ballType = this.getBallType(type, color);\r\n        return new Ball_1.default(initialX, initialY, initialVX, initialVY, size, ballType);\r\n    };\r\n    BallFactory.prototype.getBallType = function (type, color) {\r\n        for (var i = 0; i < this.ballTypes.length; i++) {\r\n            var ballType = this.ballTypes[i];\r\n            if (ballType.getType() === type && ballType.getColor() === color)\r\n                return this.ballTypes[i];\r\n        }\r\n        var newBallType = new BallType_1.default(type, color);\r\n        this.ballTypes.push(newBallType);\r\n        return newBallType;\r\n    };\r\n    return BallFactory;\r\n}());\r\nexports[\"default\"] = BallFactory;\r\n\n\n//# sourceURL=webpack:///./src/BallFactory.ts?");

/***/ }),

/***/ "./src/BallType.ts":
/*!*************************!*\
  !*** ./src/BallType.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar BallType = /** @class */ (function () {\r\n    function BallType(type, color) {\r\n        this.type = type;\r\n        this.color = color;\r\n    }\r\n    BallType.prototype.getType = function () {\r\n        return this.type;\r\n    };\r\n    BallType.prototype.getColor = function () {\r\n        return this.color;\r\n    };\r\n    BallType.prototype.update = function (ctx, ball, world) {\r\n        ball.setX(ball.getX() + ball.getVx());\r\n        ball.setY(ball.getY() + ball.getVy());\r\n        if (ball.getX() > world.getWidth() || ball.getX() < 0)\r\n            ball.invertVX();\r\n        if (ball.getY() > world.getHeight() || ball.getY() < 0)\r\n            ball.invertVY();\r\n        this.draw(ctx, ball);\r\n    };\r\n    BallType.prototype.draw = function (ctx, ball) {\r\n        // some very large bitmap could be present here\r\n        ctx.fillStyle = ball.getBallType().getColor();\r\n        ctx.beginPath();\r\n        ctx.ellipse(ball.getX(), ball.getY(), ball.getSize(), ball.getSize(), 0, 0, 360);\r\n        ctx.fill();\r\n    };\r\n    return BallType;\r\n}());\r\nexports[\"default\"] = BallType;\r\n\n\n//# sourceURL=webpack:///./src/BallType.ts?");

/***/ }),

/***/ "./src/World.ts":
/*!**********************!*\
  !*** ./src/World.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar BallFactory_1 = __importDefault(__webpack_require__(/*! ./BallFactory */ \"./src/BallFactory.ts\"));\r\nvar util_1 = __webpack_require__(/*! ./util */ \"./src/util.ts\");\r\nvar World = /** @class */ (function () {\r\n    function World(canvas, ballTypes) {\r\n        this.ballFactory = new BallFactory_1.default();\r\n        this.balls = [];\r\n        this.canvas = canvas;\r\n        this.ctx = this.canvas.getContext(\"2d\");\r\n        this.width = canvas.width;\r\n        this.height = canvas.height;\r\n        for (var i = 0; i < 100; i++) {\r\n            this.balls.push(this.ballFactory.createBall((0, util_1.rand)(this.width), (0, util_1.rand)(this.height), (0, util_1.rand)(-5, 5), (0, util_1.rand)(-5, 5), ballTypes[(0, util_1.rand)(ballTypes.length)], (0, util_1.rand)(5, 15), (0, util_1.randColor)()));\r\n        }\r\n        requestAnimationFrame(this.update.bind(this));\r\n    }\r\n    World.prototype.getWidth = function () {\r\n        return this.width;\r\n    };\r\n    World.prototype.getHeight = function () {\r\n        return this.height;\r\n    };\r\n    World.prototype.update = function () {\r\n        requestAnimationFrame(this.update.bind(this));\r\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n        for (var i = 0; i < this.balls.length; i++) {\r\n            this.balls[i].update(this.ctx, this);\r\n        }\r\n    };\r\n    return World;\r\n}());\r\nexports[\"default\"] = World;\r\n\n\n//# sourceURL=webpack:///./src/World.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar World_1 = __importDefault(__webpack_require__(/*! ./World */ \"./src/World.ts\"));\r\nvar ballTypes = [\"soccer\", \"tennis\", \"golf\", \"volleyball\"];\r\nvar canvas = document.querySelector(\".canvas\");\r\nvar world = new World_1.default(canvas, ballTypes);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.randColor = exports.rand = void 0;\r\nvar rand = function (upper, lower) {\r\n    if (lower !== undefined) {\r\n        return Math.floor(Math.random() * (upper - lower + 1)) + lower;\r\n    }\r\n    return Math.floor(Math.random() * upper);\r\n};\r\nexports.rand = rand;\r\nvar randColor = function () {\r\n    return \"rgb(\" + (0, exports.rand)(255) + \", \" + (0, exports.rand)(255) + \", \" + (0, exports.rand)(255) + \")\";\r\n};\r\nexports.randColor = randColor;\r\n\n\n//# sourceURL=webpack:///./src/util.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;