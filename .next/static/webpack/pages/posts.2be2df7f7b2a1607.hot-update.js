"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MainLayout */ \"./components/MainLayout.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Posts() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), posts = ref[0], setPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function load() {\n            return _load.apply(this, arguments);\n        }\n        function _load() {\n            _load = _asyncToGenerator(_Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, json;\n                return _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"http://localhost:4200/posts\");\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            json = _ctx.sent;\n                            setPosts(json);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _load.apply(this, arguments);\n        }\n        load();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Posts\"\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n                lineNumber: 15,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(posts, null, 2)\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n                lineNumber: 16,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: \"ll\"\n                }, void 0, false, {\n                    fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n                lineNumber: 17,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n};\n_s(Posts, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Posts;\nPosts.getInitialProps = _asyncToGenerator(_Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response, posts;\n    return _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"http://localhost:4200/posts\");\n            case 2:\n                response = _ctx.sent;\n                _ctx.next = 5;\n                return response.json();\n            case 5:\n                posts = _ctx.sent;\n                return _ctx.abrupt(\"return\");\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1M7O0FBRXRDLFNBQVNHLEtBQUssR0FBRTs7SUFDN0IsSUFBMEJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFKeEMsS0FJYyxHQUFjQSxHQUFZLEdBQTFCLEVBSmQsUUFJd0IsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QkQsZ0RBQVMsQ0FBQyxXQUFNO2lCQUNDTSxJQUFJO21CQUFKQSxLQUFJOztpQkFBSkEsS0FBSTtZQUFKQSxLQUFJLEdBQW5CLDZLQUFzQjtvQkFDZEMsUUFBUSxFQUNSQyxJQUFJOzs7OzttQ0FEYUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDOzs0QkFBckRGLFFBQVEsWUFBNkM7O21DQUN4Q0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7OzRCQUE1QkEsSUFBSSxZQUF3Qjs0QkFDbENILFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7Ozs7OzthQUNoQjttQkFKY0YsS0FBSTs7UUFLbkJBLElBQUksRUFBRTtLQUNQLEVBQUUsRUFBRSxDQUFDO0lBQ1AscUJBQU8sOERBQUNKLDhEQUFVOzswQkFDakIsOERBQUNRLElBQUU7MEJBQUMsT0FBSzs7Ozs7b0JBQUs7MEJBQ2QsOERBQUNDLEtBQUc7MEJBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Ozs7b0JBQU87MEJBQzNDLDhEQUFDVSxJQUFFOzBCQUNELDRFQUFDQyxJQUFFOzhCQUFDLElBQUU7Ozs7O3dCQUFLOzs7OztvQkFDUjs7Ozs7O1lBQ087Q0FDYjtHQWpCdUJaLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQW1CN0JBLEtBQUssQ0FBQ2EsZUFBZSxHQUFHLDZLQUFZO1FBQzVCVCxRQUFRLEVBQ1JILEtBQUs7Ozs7O3VCQURZSyxLQUFLLENBQUMsNkJBQTZCLENBQUM7O2dCQUFyREYsUUFBUSxZQUE2Qzs7dUJBQ3ZDQSxRQUFRLENBQUNDLElBQUksRUFBRTs7Z0JBQTdCSixLQUFLLFlBQXdCOzs7Ozs7O0NBR3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2luZGV4LmpzPzNiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cygpe1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MjAwL3Bvc3RzJyk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0UG9zdHMoanNvbik7XG4gICAgfVxuICAgIGxvYWQoKVxuICB9LCBbXSlcbiByZXR1cm4gPE1haW5MYXlvdXQ+XG4gIDxoMT5Qb3N0czwvaDE+XG4gIDxwcmU+e0pTT04uc3RyaW5naWZ5KHBvc3RzLCBudWxsLCAyKX08L3ByZT5cbiAgPHVsPlxuICAgIDxsaT5sbDwvbGk+XG4gIDwvdWw+XG4gPC9NYWluTGF5b3V0PlxufVxuXG5Qb3N0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9wb3N0cycpO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFpbkxheW91dCIsIlBvc3RzIiwicG9zdHMiLCJzZXRQb3N0cyIsImxvYWQiLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaCIsImgxIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInVsIiwibGkiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n");

/***/ })

});