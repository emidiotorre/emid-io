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

/***/ "./components/HomeSection.tsx":
/*!************************************!*\
  !*** ./components/HomeSection.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background */ \"./components/Background.tsx\");\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/emidio/Downloads/emid-io/components/HomeSection.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HomeSection = function HomeSection(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$bg = _ref.bg,\n      bg = _ref$bg === void 0 ? \"\" : _ref$bg,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$padding = _ref.padding,\n      padding = _ref$padding === void 0 ? true : _ref$padding,\n      _ref$showBgOnHover = _ref.showBgOnHover,\n      showBgOnHover = _ref$showBgOnHover === void 0 ? false : _ref$showBgOnHover,\n      _ref$transform = _ref.transform,\n      transform = _ref$transform === void 0 ? true : _ref$transform;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      over = _useState[0],\n      toggle = _useState[1];\n\n  var springStyle = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n    from: {\n      minHeight: 0,\n      opacity: 0.2\n    },\n    to: {\n      minHeight: over ? 500 : 0,\n      opacity: over ? 1 : 0.2\n    },\n    config: {\n      stiffness: 300,\n      friction: 80,\n      mass: 5\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n    style: {\n      minHeight: springStyle.minHeight\n    },\n    onMouseEnter: function onMouseEnter() {\n      return toggle(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return toggle(false);\n    },\n    className: \" \".concat(padding ? \"py-8\" : null, \" block max-h-screen relative px-8 transition-all duration-500 overflow-hidden border-0 border-b border-asparagus-800 bg-asparagus-50 hover:bg-[#fff] hover:text-asparagus-800\\n      \").concat(className),\n    children: [bg ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n      style: {\n        opacity: springStyle.opacity\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        src: bg,\n        over: over,\n        transform: transform,\n        className: \"fill\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"z-10 relative\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HomeSection, \"am6AHK5RFEReih/RAjB3P0E8iNc=\", false, function () {\n  return [_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring];\n});\n\n_c = HomeSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeSection);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomeSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVTZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTs7O0FBRUEsSUFBTUssV0FPSixHQUFHLFNBUENBLFdBT0QsT0FPQztBQUFBOztBQUFBLE1BTkpDLFFBTUksUUFOSkEsUUFNSTtBQUFBLHFCQUxKQyxFQUtJO0FBQUEsTUFMSkEsRUFLSSx3QkFMQyxFQUtEO0FBQUEsNEJBSkpDLFNBSUk7QUFBQSxNQUpKQSxTQUlJLCtCQUpRLEVBSVI7QUFBQSwwQkFISkMsT0FHSTtBQUFBLE1BSEpBLE9BR0ksNkJBSE0sSUFHTjtBQUFBLGdDQUZKQyxhQUVJO0FBQUEsTUFGSkEsYUFFSSxtQ0FGWSxLQUVaO0FBQUEsNEJBREpDLFNBQ0k7QUFBQSxNQURKQSxTQUNJLCtCQURRLElBQ1I7O0FBQ0osa0JBQXVCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBL0I7QUFBQSxNQUFPVyxJQUFQO0FBQUEsTUFBYUMsTUFBYjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdWLDREQUFTLENBQUM7QUFDNUJXLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSxTQUFTLEVBQUUsQ0FEUDtBQUVKQyxNQUFBQSxPQUFPLEVBQUU7QUFGTCxLQURzQjtBQUs1QkMsSUFBQUEsRUFBRSxFQUFFO0FBQ0ZGLE1BQUFBLFNBQVMsRUFBRUosSUFBSSxHQUFHLEdBQUgsR0FBUyxDQUR0QjtBQUVGSyxNQUFBQSxPQUFPLEVBQUVMLElBQUksR0FBRyxDQUFILEdBQU87QUFGbEIsS0FMd0I7QUFTNUJPLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxTQUFTLEVBQUUsR0FETDtBQUVOQyxNQUFBQSxRQUFRLEVBQUUsRUFGSjtBQUdOQyxNQUFBQSxJQUFJLEVBQUU7QUFIQTtBQVRvQixHQUFELENBQTdCO0FBZUEsc0JBQ0UsOERBQUMsMkRBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRU4sTUFBQUEsU0FBUyxFQUFFRixXQUFXLENBQUNFO0FBQXpCLEtBRFQ7QUFFRSxnQkFBWSxFQUFFO0FBQUEsYUFBTUgsTUFBTSxDQUFDLElBQUQsQ0FBWjtBQUFBLEtBRmhCO0FBR0UsZ0JBQVksRUFBRTtBQUFBLGFBQU1BLE1BQU0sQ0FBQyxLQUFELENBQVo7QUFBQSxLQUhoQjtBQUlFLGFBQVMsYUFDUEosT0FBTyxHQUFHLE1BQUgsR0FBWSxJQURaLGtNQUdQRCxTQUhPLENBSlg7QUFBQSxlQVNHRCxFQUFFLGdCQUNELDhEQUFDLDJEQUFEO0FBQWMsV0FBSyxFQUFFO0FBQUVVLFFBQUFBLE9BQU8sRUFBRUgsV0FBVyxDQUFDRztBQUF2QixPQUFyQjtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsV0FBRyxFQUFFVixFQURQO0FBRUUsWUFBSSxFQUFFSyxJQUZSO0FBR0UsaUJBQVMsRUFBRUQsU0FIYjtBQUlFLGlCQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURDLEdBU0MsSUFsQk4sZUFtQkU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUFnQ0w7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXRERDs7R0FBTUQ7VUFnQmdCRDs7O0tBaEJoQkM7QUF3RE4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lU2VjdGlvbi50c3g/ZTg2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmLCBSZWFjdE5vZGUsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlSG92ZXIgfSBmcm9tIFwicmVhY3QtdXNlXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9CYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyBhbmltYXRlZCwgdXNlU3ByaW5nIH0gZnJvbSBcIkByZWFjdC1zcHJpbmcvd2ViXCI7XG5pbXBvcnQgeyB0cmlnZ2VyQXN5bmNJZCB9IGZyb20gXCJhc3luY19ob29rc1wiO1xuY29uc3QgSG9tZVNlY3Rpb246IFJlYWN0LkZDPHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVtdO1xuICBiZz86IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwYWRkaW5nPzogQm9vbGVhbjtcbiAgdHJhbnNmb3JtPzogQm9vbGVhbjtcbiAgc2hvd0JnT25Ib3Zlcj86IEJvb2xlYW47XG59PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBiZyA9IFwiXCIsXG4gIGNsYXNzTmFtZSA9IFwiXCIsXG4gIHBhZGRpbmcgPSB0cnVlLFxuICBzaG93QmdPbkhvdmVyID0gZmFsc2UsXG4gIHRyYW5zZm9ybSA9IHRydWUsXG59KSA9PiB7XG4gIGNvbnN0IFtvdmVyLCB0b2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzcHJpbmdTdHlsZSA9IHVzZVNwcmluZyh7XG4gICAgZnJvbToge1xuICAgICAgbWluSGVpZ2h0OiAwLFxuICAgICAgb3BhY2l0eTogMC4yLFxuICAgIH0sXG4gICAgdG86IHtcbiAgICAgIG1pbkhlaWdodDogb3ZlciA/IDUwMCA6IDAsXG4gICAgICBvcGFjaXR5OiBvdmVyID8gMSA6IDAuMixcbiAgICB9LFxuICAgIGNvbmZpZzoge1xuICAgICAgc3RpZmZuZXNzOiAzMDAsXG4gICAgICBmcmljdGlvbjogODAsXG4gICAgICBtYXNzOiA1LFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxhbmltYXRlZC5kaXZcbiAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogc3ByaW5nU3R5bGUubWluSGVpZ2h0IH19XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRvZ2dsZSh0cnVlKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdG9nZ2xlKGZhbHNlKX1cbiAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICBwYWRkaW5nID8gXCJweS04XCIgOiBudWxsXG4gICAgICB9IGJsb2NrIG1heC1oLXNjcmVlbiByZWxhdGl2ZSBweC04IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLTAgYm9yZGVyLWIgYm9yZGVyLWFzcGFyYWd1cy04MDAgYmctYXNwYXJhZ3VzLTUwIGhvdmVyOmJnLVsjZmZmXSBob3Zlcjp0ZXh0LWFzcGFyYWd1cy04MDBcbiAgICAgICR7Y2xhc3NOYW1lfWB9XG4gICAgPlxuICAgICAge2JnID8gKFxuICAgICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXt7IG9wYWNpdHk6IHNwcmluZ1N0eWxlLm9wYWNpdHkgfX0+XG4gICAgICAgICAgPEJhY2tncm91bmRcbiAgICAgICAgICAgIHNyYz17Ymd9XG4gICAgICAgICAgICBvdmVyPXtvdmVyfVxuICAgICAgICAgICAgdHJhbnNmb3JtPXt0cmFuc2Zvcm19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsXCJcbiAgICAgICAgICA+PC9CYWNrZ3JvdW5kPlxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIHJlbGF0aXZlXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvYW5pbWF0ZWQuZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVNlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJhY2tncm91bmQiLCJhbmltYXRlZCIsInVzZVNwcmluZyIsIkhvbWVTZWN0aW9uIiwiY2hpbGRyZW4iLCJiZyIsImNsYXNzTmFtZSIsInBhZGRpbmciLCJzaG93QmdPbkhvdmVyIiwidHJhbnNmb3JtIiwib3ZlciIsInRvZ2dsZSIsInNwcmluZ1N0eWxlIiwiZnJvbSIsIm1pbkhlaWdodCIsIm9wYWNpdHkiLCJ0byIsImNvbmZpZyIsInN0aWZmbmVzcyIsImZyaWN0aW9uIiwibWFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HomeSection.tsx\n");

/***/ })

});