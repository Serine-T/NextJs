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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n// import { useRouter } from \"next/router\"\nfunction Post(param) {\n    var post = param.post;\n    // const router = useRouter()\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/[id].js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/[id].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: post.body\n            }, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/[id].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Link, {}, void 0, false, {\n                fileName: \"/Users/serine/Desktop/NextJs/pages/posts/[id].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Post;\nPost.getInitialProps = function() {\n    var _ref = _asyncToGenerator(_Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var response, post;\n        return _Users_serine_Desktop_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log(ctx.query);\n                    _ctx.next = 3;\n                    return fetch(\"http://localhost:4200/posts/\".concat(ctx.query.id));\n                case 3:\n                    response = _ctx.sent;\n                    _ctx.next = 6;\n                    return response.json();\n                case 6:\n                    post = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        posts: posts\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGQSwwQ0FBMEM7QUFFM0IsU0FBU0EsSUFBSSxDQUFDLEtBQU0sRUFBRTtRQUFSLElBQUssR0FBTCxLQUFNLENBQUxDLElBQUk7SUFDaEMsNkJBQTZCO0lBQzdCLHFCQUNFOzswQkFDRSw4REFBQ0MsSUFBRTswQkFBRUQsSUFBSSxDQUFDRSxLQUFLOzs7OztvQkFBTTswQkFDckIsOERBQUNDLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNDLEdBQUM7MEJBQUVKLElBQUksQ0FBQ0ssSUFBSTs7Ozs7b0JBQUs7MEJBQ2xCLDhEQUFDQyxJQUFJOzs7O29CQUFROztvQkFDWixDQUNKO0NBQ0Y7QUFWdUJQLEtBQUFBLElBQUk7QUFZNUJBLElBQUksQ0FBQ1EsZUFBZTtlQUFHLDJLQUFNQyxHQUFHLEVBQUs7WUFFN0JDLFFBQVEsRUFDUlQsSUFBSTs7OztvQkFGVlUsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUcsQ0FBQ0ksS0FBSyxDQUFDLENBQUM7OzJCQUNBQyxLQUFLLENBQUMsOEJBQTZCLENBQWUsT0FBYkwsR0FBRyxDQUFDSSxLQUFLLENBQUNFLEVBQUUsQ0FBRSxDQUFDOztvQkFBckVMLFFBQVEsWUFBNkQ7OzJCQUN4REEsUUFBUSxDQUFDTSxJQUFJLEVBQUU7O29CQUE1QmYsSUFBSSxZQUF3QjtpREFFM0I7d0JBQ0xnQixLQUFLLEVBQUxBLEtBQUs7cUJBQ047Ozs7OztLQUNGO29CQVI0QlIsR0FBRzs7O0dBUS9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtwb3N0fSkge1xuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgIDxociAvPlxuICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgICA8TGluaz48L0xpbms+XG4gICAgPC8+XG4gIClcbn1cblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhjdHgpID0+IHtcbiAgY29uc29sZS5sb2coY3R4LnF1ZXJ5KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MjAwL3Bvc3RzLyR7Y3R4LnF1ZXJ5LmlkfWApO1xuICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcG9zdHMsXG4gIH07XG59Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwiaDEiLCJ0aXRsZSIsImhyIiwicCIsImJvZHkiLCJMaW5rIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJmZXRjaCIsImlkIiwianNvbiIsInBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ })

});