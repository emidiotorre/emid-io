"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Background.tsx":
/*!***********************************!*\
  !*** ./components/Background.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/emidio/Downloads/emid-io/components/Background.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Background = function Background(_ref) {\n  _s();\n\n  var _ref$src = _ref.src,\n      src = _ref$src === void 0 ? \"\" : _ref$src,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$over = _ref.over,\n      over = _ref$over === void 0 ? false : _ref$over,\n      _ref$transform = _ref.transform,\n      transform = _ref$transform === void 0 ? true : _ref$transform;\n  var springStyle = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n    transform: transform ? \"scale(\".concat(over ? \"1.2\" : \"1.6\", \")\\n    translateY(-300px)\") : \"\",\n    opacity: over ? 1 : 0.2,\n    config: {\n      stiffness: 300,\n      friction: 80,\n      mass: 5\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n    style: springStyle,\n    className: className,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: bg,\n      layout: \"fill\",\n      objectFit: \"cover\",\n      className: \"z-0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Background, \"FmuqV4eOVlOuHDf2jbdye9ByTZg=\", false, function () {\n  return [_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring];\n});\n\n_c = Background;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\nvar _c;\n\n$RefreshReg$(_c, \"Background\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhY2tncm91bmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7O0FBRUEsSUFBTUksVUFNSixHQUFHLFNBTkNBLFVBTUQsT0FBa0U7QUFBQTs7QUFBQSxzQkFBL0RDLEdBQStEO0FBQUEsTUFBL0RBLEdBQStELHlCQUF6RCxFQUF5RDtBQUFBLDRCQUFyREMsU0FBcUQ7QUFBQSxNQUFyREEsU0FBcUQsK0JBQXpDLEVBQXlDO0FBQUEsdUJBQXJDQyxJQUFxQztBQUFBLE1BQXJDQSxJQUFxQywwQkFBOUIsS0FBOEI7QUFBQSw0QkFBdkJDLFNBQXVCO0FBQUEsTUFBdkJBLFNBQXVCLCtCQUFYLElBQVc7QUFDckUsTUFBTUMsV0FBVyxHQUFHTiw0REFBUyxDQUFDO0FBQzVCSyxJQUFBQSxTQUFTLEVBQUVBLFNBQVMsbUJBQ1BELElBQUksR0FBRyxLQUFILEdBQVcsS0FEUixpQ0FHaEIsRUFKd0I7QUFLNUJHLElBQUFBLE9BQU8sRUFBRUgsSUFBSSxHQUFHLENBQUgsR0FBTyxHQUxRO0FBTTVCSSxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsU0FBUyxFQUFFLEdBREw7QUFFTkMsTUFBQUEsUUFBUSxFQUFFLEVBRko7QUFHTkMsTUFBQUEsSUFBSSxFQUFFO0FBSEE7QUFOb0IsR0FBRCxDQUE3QjtBQVlBLHNCQUNFLDhEQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFFTCxXQUFyQjtBQUFrQyxhQUFTLEVBQUVILFNBQTdDO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVTLEVBQVo7QUFBZ0IsWUFBTSxFQUFDLE1BQXZCO0FBQThCLGVBQVMsRUFBQyxPQUF4QztBQUFnRCxlQUFTLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBeEJEOztHQUFNWDtVQU9nQkQ7OztLQVBoQkM7QUEwQk4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYWNrZ3JvdW5kLnRzeD84ZDBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVSZWYsIFJlYWN0Tm9kZSwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VIb3ZlciB9IGZyb20gXCJyZWFjdC11c2VcIjtcblxuaW1wb3J0IHsgYW5pbWF0ZWQsIHVzZVNwcmluZyB9IGZyb20gXCJAcmVhY3Qtc3ByaW5nL3dlYlwiO1xuaW1wb3J0IHsgdHJpZ2dlckFzeW5jSWQgfSBmcm9tIFwiYXN5bmNfaG9va3NcIjtcbmNvbnN0IEJhY2tncm91bmQ6IFJlYWN0LkZDPHtcbiAgc3JjOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgb3Zlcj86IEJvb2xlYW47XG4gIHNob3dCZ09uSG92ZXI/OiBCb29sZWFuO1xuICB0cmFuc2Zvcm0/OiBCb29sZWFuO1xufT4gPSAoeyBzcmMgPSBcIlwiLCBjbGFzc05hbWUgPSBcIlwiLCBvdmVyID0gZmFsc2UsIHRyYW5zZm9ybSA9IHRydWUgfSkgPT4ge1xuICBjb25zdCBzcHJpbmdTdHlsZSA9IHVzZVNwcmluZyh7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgID8gYHNjYWxlKCR7b3ZlciA/IFwiMS4yXCIgOiBcIjEuNlwifSlcbiAgICB0cmFuc2xhdGVZKC0zMDBweClgXG4gICAgICA6IFwiXCIsXG4gICAgb3BhY2l0eTogb3ZlciA/IDEgOiAwLjIsXG4gICAgY29uZmlnOiB7XG4gICAgICBzdGlmZm5lc3M6IDMwMCxcbiAgICAgIGZyaWN0aW9uOiA4MCxcbiAgICAgIG1hc3M6IDUsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17c3ByaW5nU3R5bGV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxJbWFnZSBzcmM9e2JnfSBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY292ZXJcIiBjbGFzc05hbWU9XCJ6LTBcIj48L0ltYWdlPlxuICAgIDwvYW5pbWF0ZWQuZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiYW5pbWF0ZWQiLCJ1c2VTcHJpbmciLCJCYWNrZ3JvdW5kIiwic3JjIiwiY2xhc3NOYW1lIiwib3ZlciIsInRyYW5zZm9ybSIsInNwcmluZ1N0eWxlIiwib3BhY2l0eSIsImNvbmZpZyIsInN0aWZmbmVzcyIsImZyaWN0aW9uIiwibWFzcyIsImJnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Background.tsx\n");

/***/ })

});