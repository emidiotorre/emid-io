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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background */ \"./components/Background.tsx\");\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/emidio/Downloads/emid-io/components/HomeSection.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar HomeSection = function HomeSection(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$bg = _ref.bg,\n      bg = _ref$bg === void 0 ? \"\" : _ref$bg,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$padding = _ref.padding,\n      padding = _ref$padding === void 0 ? true : _ref$padding,\n      _ref$showBgOnHover = _ref.showBgOnHover,\n      showBgOnHover = _ref$showBgOnHover === void 0 ? false : _ref$showBgOnHover,\n      _ref$transform = _ref.transform,\n      transform = _ref$transform === void 0 ? true : _ref$transform;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      over = _useState[0],\n      toggle = _useState[1];\n\n  var springStyle = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n    minHeight: over ? \"50vh\" : \"0vh\",\n    opacity: over ? 1 : 0.2,\n    from: {\n      minHeight: \"0vh\",\n      opacity: 0.2\n    },\n    config: {\n      stiffness: 300,\n      friction: 80,\n      mass: 5\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n    style: {\n      minHeight: springStyle.minHeight\n    },\n    onMouseEnter: function onMouseEnter() {\n      return toggle(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return toggle(false);\n    },\n    className: \" \".concat(padding ? \"py-8\" : null, \" block max-h-screen relative px-8 transition-all duration-500 overflow-hidden border-0 border-b border-asparagus-800 bg-asparagus-50 hover:bg-[#fff] hover:text-asparagus-800\\n      \").concat(className),\n    children: [bg ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n      style: {\n        opacity: springStyle.opacity\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        src: bg,\n        over: over,\n        transform: transform,\n        className: \"fill\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"z-10 relative\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(HomeSection, \"am6AHK5RFEReih/RAjB3P0E8iNc=\", false, function () {\n  return [_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring];\n});\n\n_c = HomeSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeSection);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomeSection\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVTZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTs7O0FBRUEsSUFBTUssV0FPSixHQUFHLFNBUENBLFdBT0QsT0FPQztBQUFBOztBQUFBLE1BTkpDLFFBTUksUUFOSkEsUUFNSTtBQUFBLHFCQUxKQyxFQUtJO0FBQUEsTUFMSkEsRUFLSSx3QkFMQyxFQUtEO0FBQUEsNEJBSkpDLFNBSUk7QUFBQSxNQUpKQSxTQUlJLCtCQUpRLEVBSVI7QUFBQSwwQkFISkMsT0FHSTtBQUFBLE1BSEpBLE9BR0ksNkJBSE0sSUFHTjtBQUFBLGdDQUZKQyxhQUVJO0FBQUEsTUFGSkEsYUFFSSxtQ0FGWSxLQUVaO0FBQUEsNEJBREpDLFNBQ0k7QUFBQSxNQURKQSxTQUNJLCtCQURRLElBQ1I7O0FBQ0osa0JBQXVCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBL0I7QUFBQSxNQUFPVyxJQUFQO0FBQUEsTUFBYUMsTUFBYjs7QUFDQSxNQUFNQyxXQUFXLEdBQUdWLDREQUFTLENBQUM7QUFDNUJXLElBQUFBLFNBQVMsRUFBRUgsSUFBSSxHQUFHLE1BQUgsR0FBWSxLQURDO0FBRTVCSSxJQUFBQSxPQUFPLEVBQUVKLElBQUksR0FBRyxDQUFILEdBQU8sR0FGUTtBQUc1QkssSUFBQUEsSUFBSSxFQUFFO0FBQ0pGLE1BQUFBLFNBQVMsRUFBRSxLQURQO0FBRUpDLE1BQUFBLE9BQU8sRUFBRTtBQUZMLEtBSHNCO0FBTzVCRSxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsU0FBUyxFQUFFLEdBREw7QUFFTkMsTUFBQUEsUUFBUSxFQUFFLEVBRko7QUFHTkMsTUFBQUEsSUFBSSxFQUFFO0FBSEE7QUFQb0IsR0FBRCxDQUE3QjtBQWFBLHNCQUNFLDhEQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVOLE1BQUFBLFNBQVMsRUFBRUQsV0FBVyxDQUFDQztBQUF6QixLQURUO0FBRUUsZ0JBQVksRUFBRTtBQUFBLGFBQU1GLE1BQU0sQ0FBQyxJQUFELENBQVo7QUFBQSxLQUZoQjtBQUdFLGdCQUFZLEVBQUU7QUFBQSxhQUFNQSxNQUFNLENBQUMsS0FBRCxDQUFaO0FBQUEsS0FIaEI7QUFJRSxhQUFTLGFBQ1BKLE9BQU8sR0FBRyxNQUFILEdBQVksSUFEWixrTUFHUEQsU0FITyxDQUpYO0FBQUEsZUFTR0QsRUFBRSxnQkFDRCw4REFBQywyREFBRDtBQUFjLFdBQUssRUFBRTtBQUFFUyxRQUFBQSxPQUFPLEVBQUVGLFdBQVcsQ0FBQ0U7QUFBdkIsT0FBckI7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBRVQsRUFEUDtBQUVFLFlBQUksRUFBRUssSUFGUjtBQUdFLGlCQUFTLEVBQUVELFNBSGI7QUFJRSxpQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQyxHQVNDLElBbEJOLGVBbUJFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSxnQkFBZ0NMO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0FwREQ7O0dBQU1EO1VBZ0JnQkQ7OztLQWhCaEJDO0FBc0ROLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZVNlY3Rpb24udHN4P2U4NjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZVJlZiwgUmVhY3ROb2RlLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUhvdmVyIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSBcIi4vQmFja2dyb3VuZFwiO1xuaW1wb3J0IHsgYW5pbWF0ZWQsIHVzZVNwcmluZyB9IGZyb20gXCJAcmVhY3Qtc3ByaW5nL3dlYlwiO1xuaW1wb3J0IHsgdHJpZ2dlckFzeW5jSWQgfSBmcm9tIFwiYXN5bmNfaG9va3NcIjtcbmNvbnN0IEhvbWVTZWN0aW9uOiBSZWFjdC5GQzx7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVbXTtcbiAgYmc/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcGFkZGluZz86IEJvb2xlYW47XG4gIHRyYW5zZm9ybT86IEJvb2xlYW47XG4gIHNob3dCZ09uSG92ZXI/OiBCb29sZWFuO1xufT4gPSAoe1xuICBjaGlsZHJlbixcbiAgYmcgPSBcIlwiLFxuICBjbGFzc05hbWUgPSBcIlwiLFxuICBwYWRkaW5nID0gdHJ1ZSxcbiAgc2hvd0JnT25Ib3ZlciA9IGZhbHNlLFxuICB0cmFuc2Zvcm0gPSB0cnVlLFxufSkgPT4ge1xuICBjb25zdCBbb3ZlciwgdG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3ByaW5nU3R5bGUgPSB1c2VTcHJpbmcoe1xuICAgIG1pbkhlaWdodDogb3ZlciA/IFwiNTB2aFwiIDogXCIwdmhcIixcbiAgICBvcGFjaXR5OiBvdmVyID8gMSA6IDAuMixcbiAgICBmcm9tOiB7XG4gICAgICBtaW5IZWlnaHQ6IFwiMHZoXCIsXG4gICAgICBvcGFjaXR5OiAwLjIsXG4gICAgfSxcbiAgICBjb25maWc6IHtcbiAgICAgIHN0aWZmbmVzczogMzAwLFxuICAgICAgZnJpY3Rpb246IDgwLFxuICAgICAgbWFzczogNSxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IHNwcmluZ1N0eWxlLm1pbkhlaWdodCB9fVxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0b2dnbGUodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRvZ2dsZShmYWxzZSl9XG4gICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgcGFkZGluZyA/IFwicHktOFwiIDogbnVsbFxuICAgICAgfSBibG9jayBtYXgtaC1zY3JlZW4gcmVsYXRpdmUgcHgtOCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci0wIGJvcmRlci1iIGJvcmRlci1hc3BhcmFndXMtODAwIGJnLWFzcGFyYWd1cy01MCBob3ZlcjpiZy1bI2ZmZl0gaG92ZXI6dGV4dC1hc3BhcmFndXMtODAwXG4gICAgICAke2NsYXNzTmFtZX1gfVxuICAgID5cbiAgICAgIHtiZyA/IChcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17eyBvcGFjaXR5OiBzcHJpbmdTdHlsZS5vcGFjaXR5IH19PlxuICAgICAgICAgIDxCYWNrZ3JvdW5kXG4gICAgICAgICAgICBzcmM9e2JnfVxuICAgICAgICAgICAgb3Zlcj17b3Zlcn1cbiAgICAgICAgICAgIHRyYW5zZm9ybT17dHJhbnNmb3JtfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbFwiXG4gICAgICAgICAgPjwvQmFja2dyb3VuZD5cbiAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCByZWxhdGl2ZVwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2FuaW1hdGVkLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCYWNrZ3JvdW5kIiwiYW5pbWF0ZWQiLCJ1c2VTcHJpbmciLCJIb21lU2VjdGlvbiIsImNoaWxkcmVuIiwiYmciLCJjbGFzc05hbWUiLCJwYWRkaW5nIiwic2hvd0JnT25Ib3ZlciIsInRyYW5zZm9ybSIsIm92ZXIiLCJ0b2dnbGUiLCJzcHJpbmdTdHlsZSIsIm1pbkhlaWdodCIsIm9wYWNpdHkiLCJmcm9tIiwiY29uZmlnIiwic3RpZmZuZXNzIiwiZnJpY3Rpb24iLCJtYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HomeSection.tsx\n");

/***/ })

});