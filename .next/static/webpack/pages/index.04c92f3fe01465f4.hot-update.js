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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/emidio/Downloads/emid-io/components/Background.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Background = function Background(_ref) {\n  _s();\n\n  var _ref$src = _ref.src,\n      src = _ref$src === void 0 ? \"\" : _ref$src,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$transform = _ref.transform,\n      transform = _ref$transform === void 0 ? true : _ref$transform;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      over = _useState[0],\n      toggle = _useState[1];\n\n  var springStyle = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n    transform: transform ? \"scale(\".concat(over ? \"1.2\" : \"1.6\", \")\") : \"\",\n    opacity: over ? 1 : 0.2,\n    config: {\n      stiffness: 300,\n      friction: 80,\n      mass: 5\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n    /*     onMouseEnter={() => toggle(true)}\n    onMouseLeave={() => toggle(false)}\n    style={springStyle} */\n    className: \"absolute w-full h-full -top-4 -left-4 z-0\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: src,\n      layout: \"fill\",\n      objectFit: \"cover\",\n      className: className\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Background, \"am6AHK5RFEReih/RAjB3P0E8iNc=\", false, function () {\n  return [_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring];\n});\n\n_c = Background;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\nvar _c;\n\n$RefreshReg$(_c, \"Background\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhY2tncm91bmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7O0FBRUEsSUFBTUssVUFNSixHQUFHLFNBTkNBLFVBTUQsT0FBb0Q7QUFBQTs7QUFBQSxzQkFBakRDLEdBQWlEO0FBQUEsTUFBakRBLEdBQWlELHlCQUEzQyxFQUEyQztBQUFBLDRCQUF2Q0MsU0FBdUM7QUFBQSxNQUF2Q0EsU0FBdUMsK0JBQTNCLEVBQTJCO0FBQUEsNEJBQXZCQyxTQUF1QjtBQUFBLE1BQXZCQSxTQUF1QiwrQkFBWCxJQUFXOztBQUN2RCxrQkFBdUJQLCtDQUFRLENBQUMsS0FBRCxDQUEvQjtBQUFBLE1BQU9RLElBQVA7QUFBQSxNQUFhQyxNQUFiOztBQUNBLE1BQU1DLFdBQVcsR0FBR1AsNERBQVMsQ0FBQztBQUM1QkksSUFBQUEsU0FBUyxFQUFFQSxTQUFTLG1CQUFZQyxJQUFJLEdBQUcsS0FBSCxHQUFXLEtBQTNCLFNBQXNDLEVBRDlCO0FBRTVCRyxJQUFBQSxPQUFPLEVBQUVILElBQUksR0FBRyxDQUFILEdBQU8sR0FGUTtBQUc1QkksSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLFNBQVMsRUFBRSxHQURMO0FBRU5DLE1BQUFBLFFBQVEsRUFBRSxFQUZKO0FBR05DLE1BQUFBLElBQUksRUFBRTtBQUhBO0FBSG9CLEdBQUQsQ0FBN0I7QUFTQSxzQkFDRSw4REFBQywyREFBRDtBQUNFO0FBQ047QUFDQTtBQUNNLGFBQVMsRUFBQywyQ0FKWjtBQUFBLDJCQU1FLDhEQUFDLG1EQUFEO0FBQ0UsU0FBRyxFQUFFVixHQURQO0FBRUUsWUFBTSxFQUFDLE1BRlQ7QUFHRSxlQUFTLEVBQUMsT0FIWjtBQUlFLGVBQVMsRUFBRUM7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FoQ0Q7O0dBQU1GO1VBUWdCRDs7O0tBUmhCQztBQWtDTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JhY2tncm91bmQudHN4PzhkMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZVJlZiwgUmVhY3ROb2RlLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUhvdmVyIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuXG5pbXBvcnQgeyBhbmltYXRlZCwgdXNlU3ByaW5nIH0gZnJvbSBcIkByZWFjdC1zcHJpbmcvd2ViXCI7XG5pbXBvcnQgeyB0cmlnZ2VyQXN5bmNJZCB9IGZyb20gXCJhc3luY19ob29rc1wiO1xuY29uc3QgQmFja2dyb3VuZDogUmVhY3QuRkM8e1xuICBzcmM6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIHNob3dCZ09uSG92ZXI/OiBCb29sZWFuO1xuICB0cmFuc2Zvcm0/OiBCb29sZWFuO1xufT4gPSAoeyBzcmMgPSBcIlwiLCBjbGFzc05hbWUgPSBcIlwiLCB0cmFuc2Zvcm0gPSB0cnVlIH0pID0+IHtcbiAgY29uc3QgW292ZXIsIHRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNwcmluZ1N0eWxlID0gdXNlU3ByaW5nKHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSA/IGBzY2FsZSgke292ZXIgPyBcIjEuMlwiIDogXCIxLjZcIn0pYCA6IFwiXCIsXG4gICAgb3BhY2l0eTogb3ZlciA/IDEgOiAwLjIsXG4gICAgY29uZmlnOiB7XG4gICAgICBzdGlmZm5lc3M6IDMwMCxcbiAgICAgIGZyaWN0aW9uOiA4MCxcbiAgICAgIG1hc3M6IDUsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGFuaW1hdGVkLmRpdlxuICAgICAgLyogICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdG9nZ2xlKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB0b2dnbGUoZmFsc2UpfVxuICAgICAgc3R5bGU9e3NwcmluZ1N0eWxlfSAqL1xuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCAtdG9wLTQgLWxlZnQtNCB6LTBcIlxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+PC9JbWFnZT5cbiAgICA8L2FuaW1hdGVkLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiYW5pbWF0ZWQiLCJ1c2VTcHJpbmciLCJCYWNrZ3JvdW5kIiwic3JjIiwiY2xhc3NOYW1lIiwidHJhbnNmb3JtIiwib3ZlciIsInRvZ2dsZSIsInNwcmluZ1N0eWxlIiwib3BhY2l0eSIsImNvbmZpZyIsInN0aWZmbmVzcyIsImZyaWN0aW9uIiwibWFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Background.tsx\n");

/***/ })

});