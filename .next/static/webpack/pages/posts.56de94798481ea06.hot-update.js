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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Posts; }\n/* harmony export */ });\n/* harmony import */ var _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MainLayout */ \"./components/MainLayout.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nfunction Posts(param) {\n    var posts = param.posts;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Posts\"\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n                lineNumber: 7,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: true,\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n                            lineNumber: 12,\n                            columnNumber: 9\n                        }, _this)\n                    }, post.id, false, {\n                        fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n                lineNumber: 9,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serine/Desktop/NextJs/pages/posts/index.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\n_c = Posts;\nPosts.getInitialProps = _asyncToGenerator(_Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response, posts;\n    return _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"http://localhost:4200/posts\");\n            case 2:\n                response = _ctx.sent;\n                _ctx.next = 5;\n                return response.json();\n            case 5:\n                posts = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    posts: posts\n                });\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDZTtBQUNTO0FBRXRDLFNBQVNJLEtBQUssQ0FBQyxLQUFPLEVBQUM7UUFBUixLQUFNLEdBQU4sS0FBTyxDQUFOQyxLQUFLOztJQUNuQyxxQkFBTyw4REFBQ0YsOERBQVU7OzBCQUNqQiw4REFBQ0csSUFBRTswQkFBQyxPQUFLOzs7OztvQkFBSzswQkFFZCw4REFBQ0MsSUFBRTswQkFDQUYsS0FBSyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDZCw4REFBQ0MsSUFBRTtrQ0FDRCw0RUFBQ1Ysa0RBQUk7NEJBQUNXLElBQUk7c0NBQUVGLElBQUksQ0FBQ0csS0FBSzs7Ozs7aUNBQVE7dUJBRHZCSCxJQUFJLENBQUNJLEVBQUU7Ozs7NkJBRVg7aUJBQ04sQ0FBQzs7Ozs7b0JBRUM7Ozs7OztZQUNPO0NBQ2I7QUFidUJULEtBQUFBLEtBQUs7QUFlN0JBLEtBQUssQ0FBQ1UsZUFBZSxHQUFHLDZLQUFZO1FBQzVCQyxRQUFRLEVBQ1JWLEtBQUs7Ozs7O3VCQURZVyxLQUFLLENBQUMsNkJBQTZCLENBQUM7O2dCQUFyREQsUUFBUSxZQUE2Qzs7dUJBQ3ZDQSxRQUFRLENBQUNFLElBQUksRUFBRTs7Z0JBQTdCWixLQUFLLFlBQXdCOzZDQUU1QjtvQkFDTEEsS0FBSyxFQUFMQSxLQUFLO2lCQUNOOzs7Ozs7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9pbmRleC5qcz8zYjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5MYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoe3Bvc3RzfSl7XG4gcmV0dXJuIDxNYWluTGF5b3V0PlxuICA8aDE+UG9zdHM8L2gxPlxuICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocG9zdHMsIG51bGwsIDIpfTwvcHJlPiAqL31cbiAgPHVsPlxuICAgIHtwb3N0cy5tYXAoKHBvc3QpPT4oXG4gICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgPExpbmsgaHJlZj57cG9zdC50aXRsZX08L0xpbms+XG4gICAgICA8L2xpPlxuICAgICkpfVxuXG4gIDwvdWw+XG4gPC9NYWluTGF5b3V0PlxufVxuXG5Qb3N0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9wb3N0cycpO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHBvc3RzLFxuICB9O1xufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYWluTGF5b3V0IiwiUG9zdHMiLCJwb3N0cyIsImgxIiwidWwiLCJtYXAiLCJwb3N0IiwibGkiLCJocmVmIiwidGl0bGUiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n");

/***/ })

});