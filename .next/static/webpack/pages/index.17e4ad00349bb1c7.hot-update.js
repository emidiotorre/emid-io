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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_emidio_Downloads_emid_io_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _excluded = [\"height\"];\n\nvar _jsxFileName = \"/Users/emidio/Downloads/emid-io/components/Trail.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Trail = function Trail(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? 100 : _ref$height,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? \"\" : _ref$className,\n      _ref$open = _ref.open,\n      open = _ref$open === void 0 ? true : _ref$open;\n\n  /*   const [open, setOpen] = useState(false);\n  const intersectionRef = React.useRef(null!);\n  const intersection = useIntersection(intersectionRef!, {\n    root: null,\n    rootMargin: \"0px\",\n    threshold: 1,\n  }); */\n  var items = react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(children);\n  var trail = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useTrail)(items.length, {\n    config: {\n      mass: 5,\n      tension: 1000,\n      friction: 200\n    },\n    opacity: open ? 1 : 0,\n    x: open ? 0 : 20,\n    height: open ? height : 0,\n    from: {\n      opacity: 0,\n      x: 20,\n      height: 0\n    }\n  });\n  /*   useEffect(() => {\n    if (intersection && intersection.intersectionRatio > 1) {\n      setOpen(true);\n    } else {\n      setOpen(false);\n    }\n  }, [intersection]); */\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: className\n    /* ref={intersectionRef!} */\n    ,\n    children: trail.map(function (_ref2, index) {\n      var height = _ref2.height,\n          style = (0,_Users_emidio_Downloads_emid_io_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2, _excluded);\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.a.div, {\n        style: style,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.a.div, {\n          style: {\n            height: height\n          },\n          children: items[index]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Trail, \"K6MPM4NNUf2NQipcqSVMWb0gIKk=\", false, function () {\n  return [_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useTrail];\n});\n\n_c = Trail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trail);\n\nvar _c;\n\n$RefreshReg$(_c, \"Trail\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYWlsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1HLEtBS0osR0FBRyxTQUxDQSxLQUtELE9BQTZEO0FBQUE7O0FBQUEsTUFBMURDLFFBQTBELFFBQTFEQSxRQUEwRDtBQUFBLHlCQUFoREMsTUFBZ0Q7QUFBQSxNQUFoREEsTUFBZ0QsNEJBQXZDLEdBQXVDO0FBQUEsNEJBQWxDQyxTQUFrQztBQUFBLE1BQWxDQSxTQUFrQywrQkFBdEIsRUFBc0I7QUFBQSx1QkFBbEJDLElBQWtCO0FBQUEsTUFBbEJBLElBQWtCLDBCQUFYLElBQVc7O0FBQ2hFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUUsTUFBTUMsS0FBSyxHQUFHUiw2REFBQSxDQUF1QkksUUFBdkIsQ0FBZDtBQUNBLE1BQU1PLEtBQUssR0FBR1YsMkRBQVEsQ0FBQ08sS0FBSyxDQUFDSSxNQUFQLEVBQWU7QUFDbkNDLElBQUFBLE1BQU0sRUFBRTtBQUFFQyxNQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXQyxNQUFBQSxPQUFPLEVBQUUsSUFBcEI7QUFBMEJDLE1BQUFBLFFBQVEsRUFBRTtBQUFwQyxLQUQyQjtBQUVuQ0MsSUFBQUEsT0FBTyxFQUFFVixJQUFJLEdBQUcsQ0FBSCxHQUFPLENBRmU7QUFHbkNXLElBQUFBLENBQUMsRUFBRVgsSUFBSSxHQUFHLENBQUgsR0FBTyxFQUhxQjtBQUluQ0YsSUFBQUEsTUFBTSxFQUFFRSxJQUFJLEdBQUdGLE1BQUgsR0FBWSxDQUpXO0FBS25DYyxJQUFBQSxJQUFJLEVBQUU7QUFBRUYsTUFBQUEsT0FBTyxFQUFFLENBQVg7QUFBY0MsTUFBQUEsQ0FBQyxFQUFFLEVBQWpCO0FBQXFCYixNQUFBQSxNQUFNLEVBQUU7QUFBN0I7QUFMNkIsR0FBZixDQUF0QjtBQVFBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVFLHNCQUNFO0FBQUssYUFBUyxFQUFFQztBQUFXO0FBQTNCO0FBQUEsY0FDR0ssS0FBSyxDQUFDUyxHQUFOLENBQVUsaUJBQXVCQyxLQUF2QjtBQUFBLFVBQUdoQixNQUFILFNBQUdBLE1BQUg7QUFBQSxVQUFjaUIsS0FBZDs7QUFBQSwwQkFDVCw4REFBQyxvREFBRDtBQUFtQixhQUFLLEVBQUVBLEtBQTFCO0FBQUEsK0JBQ0UsOERBQUMsb0RBQUQ7QUFBTyxlQUFLLEVBQUU7QUFBRWpCLFlBQUFBLE1BQU0sRUFBTkE7QUFBRixXQUFkO0FBQUEsb0JBQTJCRyxLQUFLLENBQUNhLEtBQUQ7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVlBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURTO0FBQUEsS0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBeENEOztHQUFNbEI7VUFlVUY7OztLQWZWRTtBQTBDTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RyYWlsLnRzeD9iYjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VUcmFpbCwgYSB9IGZyb20gXCJAcmVhY3Qtc3ByaW5nL3dlYlwiO1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSBcInJlYWN0LXVzZVwiO1xuY29uc3QgVHJhaWw6IFJlYWN0LkZDPHtcbiAgY2hpbGRyZW46IGFueTtcbiAgb3BlbjogQm9vbGVhbjtcbiAgaGVpZ2h0PzogTnVtYmVyO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59PiA9ICh7IGNoaWxkcmVuLCBoZWlnaHQgPSAxMDAsIGNsYXNzTmFtZSA9IFwiXCIsIG9wZW4gPSB0cnVlIH0pID0+IHtcbiAgLyogICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGludGVyc2VjdGlvblJlZiA9IFJlYWN0LnVzZVJlZihudWxsISk7XG4gIGNvbnN0IGludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25SZWYhLCB7XG4gICAgcm9vdDogbnVsbCxcbiAgICByb290TWFyZ2luOiBcIjBweFwiLFxuICAgIHRocmVzaG9sZDogMSxcbiAgfSk7ICovXG5cbiAgY29uc3QgaXRlbXMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcbiAgY29uc3QgdHJhaWwgPSB1c2VUcmFpbChpdGVtcy5sZW5ndGgsIHtcbiAgICBjb25maWc6IHsgbWFzczogNSwgdGVuc2lvbjogMTAwMCwgZnJpY3Rpb246IDIwMCB9LFxuICAgIG9wYWNpdHk6IG9wZW4gPyAxIDogMCxcbiAgICB4OiBvcGVuID8gMCA6IDIwLFxuICAgIGhlaWdodDogb3BlbiA/IGhlaWdodCA6IDAsXG4gICAgZnJvbTogeyBvcGFjaXR5OiAwLCB4OiAyMCwgaGVpZ2h0OiAwIH0sXG4gIH0pO1xuXG4gIC8qICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICYmIGludGVyc2VjdGlvbi5pbnRlcnNlY3Rpb25SYXRpbyA+IDEpIHtcbiAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfSwgW2ludGVyc2VjdGlvbl0pOyAqL1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLyogcmVmPXtpbnRlcnNlY3Rpb25SZWYhfSAqLz5cbiAgICAgIHt0cmFpbC5tYXAoKHsgaGVpZ2h0LCAuLi5zdHlsZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICA8YS5kaXYga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8YS5kaXYgc3R5bGU9e3sgaGVpZ2h0IH19PntpdGVtc1tpbmRleF19PC9hLmRpdj5cbiAgICAgICAgPC9hLmRpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUcmFpbCIsImEiLCJUcmFpbCIsImNoaWxkcmVuIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwib3BlbiIsIml0ZW1zIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwidHJhaWwiLCJsZW5ndGgiLCJjb25maWciLCJtYXNzIiwidGVuc2lvbiIsImZyaWN0aW9uIiwib3BhY2l0eSIsIngiLCJmcm9tIiwibWFwIiwiaW5kZXgiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Trail.tsx\n");

/***/ })

});