"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n// import { useRouter } from \"next/router\"\n\nfunction Post(param) {\n    var serverPost = param.post;\n    // const router = useRouter()\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/[id].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/[id].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: post.body\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/posts\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    children: \"Back to posts\"\n                }, void 0, false, {\n                    fileName: \"/Users/serine/Desktop/NextJs/pages/posts/[id].js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/[id].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Post;\nPost.getInitialProps = function() {\n    var _ref = _asyncToGenerator(_Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var query, req, response, post;\n        return _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    query = param.query, req = param.req;\n                    if (req) {\n                        _ctx.next = 3;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        post: null\n                    });\n                case 3:\n                    _ctx.next = 5;\n                    return fetch(\"http://localhost:4200/posts/\".concat(query.id));\n                case 5:\n                    response = _ctx.sent;\n                    _ctx.next = 8;\n                    return response.json();\n                case 8:\n                    post = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        post: post\n                    });\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBLDBDQUEwQztBQUViO0FBRWQsU0FBU0MsSUFBSSxDQUFDLEtBQWtCLEVBQUU7UUFBbkJDLFVBQWdCLEdBQWpCLEtBQWtCLENBQWpCQSxJQUFJO0lBQ2hDLDZCQUE2QjtJQUM3QixxQkFDRTs7MEJBQ0UsOERBQUNFLElBQUU7MEJBQUVGLElBQUksQ0FBQ0csS0FBSzs7Ozs7b0JBQU07MEJBQ3JCLDhEQUFDQyxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDQyxHQUFDOzBCQUFFTCxJQUFJLENBQUNNLElBQUk7Ozs7O29CQUFLOzBCQUNsQiw4REFBQ1Isa0RBQUk7Z0JBQUNTLElBQUksRUFBRSxRQUFROzBCQUNsQiw0RUFBQ0MsR0FBQzs4QkFBQyxlQUFhOzs7Ozt3QkFBSTs7Ozs7b0JBQ2Y7O29CQUNOLENBQ0o7Q0FDRjtBQVp1QlQsS0FBQUEsSUFBSTtBQWM1QkEsSUFBSSxDQUFDVSxlQUFlO2VBQUcsa0xBQXVCO1lBQWhCQyxLQUFLLEVBQUVDLEdBQUcsRUFJaENDLFFBQVEsRUFDUlosSUFBSTs7OztvQkFMa0JVLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxHQUFHLFNBQUhBLEdBQUc7d0JBQ2xDQSxHQUFHOzs7O2lEQUNFO3dCQUFDWCxJQUFJLEVBQUUsSUFBSTtxQkFBQzs7OzJCQUVFYSxLQUFLLENBQUMsOEJBQTZCLENBQVcsT0FBVEgsS0FBSyxDQUFDSSxFQUFFLENBQUUsQ0FBQzs7b0JBQWpFRixRQUFRLFlBQXlEOzsyQkFDcERBLFFBQVEsQ0FBQ0csSUFBSSxFQUFFOztvQkFBNUJmLElBQUksWUFBd0I7aURBRTNCO3dCQUNMQSxJQUFJLEVBQUpBLElBQUk7cUJBQ0w7Ozs7OztLQUNGOzs7O0dBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW2lkXS5qcz83OTY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7cG9zdDogc2VydmVyUG9zdH0pIHtcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICA8aHIgLz5cbiAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxuICAgICAgPExpbmsgaHJlZj17Jy9wb3N0cyd9PlxuICAgICAgICA8YT5CYWNrIHRvIHBvc3RzPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvPlxuICApXG59XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoe3F1ZXJ5LCByZXF9KSA9PiB7XG4gIGlmKCFyZXEpIHtcbiAgICByZXR1cm4ge3Bvc3Q6IG51bGx9XG4gIH1cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MjAwL3Bvc3RzLyR7cXVlcnkuaWR9YCk7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3N0LFxuICB9O1xufSJdLCJuYW1lcyI6WyJMaW5rIiwiUG9zdCIsInBvc3QiLCJzZXJ2ZXJQb3N0IiwiaDEiLCJ0aXRsZSIsImhyIiwicCIsImJvZHkiLCJocmVmIiwiYSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVxIiwicmVzcG9uc2UiLCJmZXRjaCIsImlkIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ })

});