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

/***/ "./components/Trail.tsx":
/*!******************************!*\
  !*** ./components/Trail.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_emidio_Downloads_emid_io_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _excluded = [\"height\"];\n\nvar _jsxFileName = \"/Users/emidio/Downloads/emid-io/components/Trail.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Trail = function Trail(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? 100 : _ref$height,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var intersectionRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n  var intersection = (0,react_use__WEBPACK_IMPORTED_MODULE_4__.useIntersection)(intersectionRef, {\n    root: null,\n    rootMargin: \"0px\",\n    threshold: 1\n  });\n  var items = react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(children);\n  var trail = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useTrail)(items.length, {\n    config: {\n      mass: 5,\n      tension: 1000,\n      friction: 200\n    },\n    opacity: open ? 1 : 0,\n    x: open ? 0 : 20,\n    height: open ? height : 0,\n    from: {\n      opacity: 0,\n      x: 20,\n      height: 0\n    }\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (intersection && intersection.intersectionRatio > 1) {\n      setOpen(true);\n    } else {\n      setOpen(false);\n    }\n  }, [intersection.intersectionRatio]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: className,\n    ref: intersectionRef,\n    children: trail.map(function (_ref2, index) {\n      var height = _ref2.height,\n          style = (0,_Users_emidio_Downloads_emid_io_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, _excluded);\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.a.div, {\n        style: style,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.a.div, {\n          style: {\n            height: height\n          },\n          children: items[index]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Trail, \"RUbHXOf3KobCtSagpVL4r/iQCro=\", false, function () {\n  return [react_use__WEBPACK_IMPORTED_MODULE_4__.useIntersection, _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useTrail];\n});\n\n_c = Trail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trail);\n\nvar _c;\n\n$RefreshReg$(_c, \"Trail\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYWlsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1NLEtBSUosR0FBRyxTQUpDQSxLQUlELE9BQWdEO0FBQUE7O0FBQUEsTUFBN0NDLFFBQTZDLFFBQTdDQSxRQUE2QztBQUFBLHlCQUFuQ0MsTUFBbUM7QUFBQSxNQUFuQ0EsTUFBbUMsNEJBQTFCLEdBQTBCO0FBQUEsNEJBQXJCQyxTQUFxQjtBQUFBLE1BQXJCQSxTQUFxQiwrQkFBVCxFQUFTOztBQUNuRCxrQkFBd0JQLCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUFBLE1BQU9RLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLE1BQU1DLGVBQWUsR0FBR1osbURBQUEsQ0FBYSxJQUFiLENBQXhCO0FBQ0EsTUFBTWMsWUFBWSxHQUFHVCwwREFBZSxDQUFDTyxlQUFELEVBQWtCO0FBQ3BERyxJQUFBQSxJQUFJLEVBQUUsSUFEOEM7QUFFcERDLElBQUFBLFVBQVUsRUFBRSxLQUZ3QztBQUdwREMsSUFBQUEsU0FBUyxFQUFFO0FBSHlDLEdBQWxCLENBQXBDO0FBTUEsTUFBTUMsS0FBSyxHQUFHbEIsNkRBQUEsQ0FBdUJPLFFBQXZCLENBQWQ7QUFDQSxNQUFNYyxLQUFLLEdBQUdsQiwyREFBUSxDQUFDZSxLQUFLLENBQUNJLE1BQVAsRUFBZTtBQUNuQ0MsSUFBQUEsTUFBTSxFQUFFO0FBQUVDLE1BQUFBLElBQUksRUFBRSxDQUFSO0FBQVdDLE1BQUFBLE9BQU8sRUFBRSxJQUFwQjtBQUEwQkMsTUFBQUEsUUFBUSxFQUFFO0FBQXBDLEtBRDJCO0FBRW5DQyxJQUFBQSxPQUFPLEVBQUVqQixJQUFJLEdBQUcsQ0FBSCxHQUFPLENBRmU7QUFHbkNrQixJQUFBQSxDQUFDLEVBQUVsQixJQUFJLEdBQUcsQ0FBSCxHQUFPLEVBSHFCO0FBSW5DRixJQUFBQSxNQUFNLEVBQUVFLElBQUksR0FBR0YsTUFBSCxHQUFZLENBSlc7QUFLbkNxQixJQUFBQSxJQUFJLEVBQUU7QUFBRUYsTUFBQUEsT0FBTyxFQUFFLENBQVg7QUFBY0MsTUFBQUEsQ0FBQyxFQUFFLEVBQWpCO0FBQXFCcEIsTUFBQUEsTUFBTSxFQUFFO0FBQTdCO0FBTDZCLEdBQWYsQ0FBdEI7QUFRQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWEsWUFBWSxJQUFJQSxZQUFZLENBQUNnQixpQkFBYixHQUFpQyxDQUFyRCxFQUF3RDtBQUN0RG5CLE1BQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxLQUZELE1BRU87QUFDTEEsTUFBQUEsT0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FOUSxFQU1OLENBQUNHLFlBQVksQ0FBRWdCLGlCQUFmLENBTk0sQ0FBVDtBQVFBLHNCQUNFO0FBQUssYUFBUyxFQUFFckIsU0FBaEI7QUFBMkIsT0FBRyxFQUFFRyxlQUFoQztBQUFBLGNBQ0dTLEtBQUssQ0FBQ1UsR0FBTixDQUFVLGlCQUF1QkMsS0FBdkI7QUFBQSxVQUFHeEIsTUFBSCxTQUFHQSxNQUFIO0FBQUEsVUFBY3lCLEtBQWQ7O0FBQUEsMEJBQ1QsOERBQUMsb0RBQUQ7QUFBbUIsYUFBSyxFQUFFQSxLQUExQjtBQUFBLCtCQUNFLDhEQUFDLG9EQUFEO0FBQU8sZUFBSyxFQUFFO0FBQUV6QixZQUFBQSxNQUFNLEVBQU5BO0FBQUYsV0FBZDtBQUFBLG9CQUEyQlUsS0FBSyxDQUFDYyxLQUFEO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFZQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQXZDRDs7R0FBTTFCO1VBT2lCRCx3REFPUEY7OztLQWRWRztBQXlDTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RyYWlsLnRzeD9iYjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFpbCwgYSB9IGZyb20gXCJAcmVhY3Qtc3ByaW5nL3dlYlwiO1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuY29uc3QgVHJhaWw6IFJlYWN0LkZDPHtcbiAgY2hpbGRyZW46IGFueTtcbiAgaGVpZ2h0PzogTnVtYmVyO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59PiA9ICh7IGNoaWxkcmVuLCBoZWlnaHQgPSAxMDAsIGNsYXNzTmFtZSA9IFwiXCIgfSkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGludGVyc2VjdGlvblJlZiA9IFJlYWN0LnVzZVJlZihudWxsISk7XG4gIGNvbnN0IGludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25SZWYsIHtcbiAgICByb290OiBudWxsLFxuICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgdGhyZXNob2xkOiAxLFxuICB9KTtcblxuICBjb25zdCBpdGVtcyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xuICBjb25zdCB0cmFpbCA9IHVzZVRyYWlsKGl0ZW1zLmxlbmd0aCwge1xuICAgIGNvbmZpZzogeyBtYXNzOiA1LCB0ZW5zaW9uOiAxMDAwLCBmcmljdGlvbjogMjAwIH0sXG4gICAgb3BhY2l0eTogb3BlbiA/IDEgOiAwLFxuICAgIHg6IG9wZW4gPyAwIDogMjAsXG4gICAgaGVpZ2h0OiBvcGVuID8gaGVpZ2h0IDogMCxcbiAgICBmcm9tOiB7IG9wYWNpdHk6IDAsIHg6IDIwLCBoZWlnaHQ6IDAgfSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICYmIGludGVyc2VjdGlvbi5pbnRlcnNlY3Rpb25SYXRpbyA+IDEpIHtcbiAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfSwgW2ludGVyc2VjdGlvbiEuaW50ZXJzZWN0aW9uUmF0aW9dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHJlZj17aW50ZXJzZWN0aW9uUmVmfT5cbiAgICAgIHt0cmFpbC5tYXAoKHsgaGVpZ2h0LCAuLi5zdHlsZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICA8YS5kaXYga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8YS5kaXYgc3R5bGU9e3sgaGVpZ2h0IH19PntpdGVtc1tpbmRleF19PC9hLmRpdj5cbiAgICAgICAgPC9hLmRpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVRyYWlsIiwiYSIsInVzZUludGVyc2VjdGlvbiIsIlRyYWlsIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJvcGVuIiwic2V0T3BlbiIsImludGVyc2VjdGlvblJlZiIsInVzZVJlZiIsImludGVyc2VjdGlvbiIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiaXRlbXMiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJ0cmFpbCIsImxlbmd0aCIsImNvbmZpZyIsIm1hc3MiLCJ0ZW5zaW9uIiwiZnJpY3Rpb24iLCJvcGFjaXR5IiwieCIsImZyb20iLCJpbnRlcnNlY3Rpb25SYXRpbyIsIm1hcCIsImluZGV4Iiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Trail.tsx\n");

/***/ })

});