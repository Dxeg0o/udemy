"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./app/context/AuthContext.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthenticationContext\": function() { return /* binding */ AuthenticationContext; },\n/* harmony export */   \"default\": function() { return /* binding */ AuthContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies-next */ \"(app-client)/./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AuthenticationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n    loading: false,\n    error: null,\n    data: null,\n    setAuthState: ()=>{}\n});\nfunction AuthContext(param) {\n    let { children  } = param;\n    _s();\n    const [authState, setAuthState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        loading: false,\n        data: null,\n        error: null\n    });\n    const fetchUser = async ()=>{\n        setAuthState({\n            data: null,\n            error: null,\n            loading: true\n        });\n        try {\n            const jwt = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)(\"jwt\");\n            if (!jwt) {\n                return setAuthState({\n                    data: null,\n                    error: null,\n                    loading: false\n                });\n            }\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3000/api/auth/me\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(jwt)\n                }\n            });\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common.Authorization = \"Bearer \".concat(jwt);\n            setAuthState({\n                data: response.data,\n                error: null,\n                loading: false\n            });\n        } catch (error) {\n            setAuthState({\n                data: null,\n                error: error.response.data.errorMessage,\n                loading: false\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthenticationContext.Provider, {\n        value: {\n            ...authState,\n            setAuthState\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/context/AuthContext.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthContext, \"JHK18/5B2VUtBty3SdzmT4kLuTA=\");\n_c = AuthContext;\nvar _c;\n$RefreshReg$(_c, \"AuthContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbnRleHQvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDZTtBQUNrQjtBQXNCcEQsTUFBTUssc0NBQXdCRixvREFBYUEsQ0FBWTtJQUM1REcsU0FBUyxLQUFLO0lBQ2RDLE9BQU8sSUFBSTtJQUNYQyxNQUFNLElBQUk7SUFDVkMsY0FBYyxJQUFNLENBQUM7QUFDdkIsR0FBRztBQUVZLFNBQVNDLFlBQVksS0FJbkMsRUFBRTtRQUppQyxFQUNsQ0MsU0FBUSxFQUdULEdBSm1DOztJQUtsQyxNQUFNLENBQUNDLFdBQVdILGFBQWEsR0FBR1AsK0NBQVFBLENBQVE7UUFDaERJLFNBQVMsS0FBSztRQUNkRSxNQUFNLElBQUk7UUFDVkQsT0FBTyxJQUFJO0lBQ2I7SUFFQSxNQUFNTSxZQUFZLFVBQVk7UUFDNUJKLGFBQWE7WUFDWEQsTUFBTSxJQUFJO1lBQ1ZELE9BQU8sSUFBSTtZQUNYRCxTQUFTLElBQUk7UUFDZjtRQUNBLElBQUk7WUFDRixNQUFNUSxNQUFNYix1REFBU0EsQ0FBQztZQUV0QixJQUFJLENBQUNhLEtBQUs7Z0JBQ1IsT0FBT0wsYUFBYTtvQkFDbEJELE1BQU0sSUFBSTtvQkFDVkQsT0FBTyxJQUFJO29CQUNYRCxTQUFTLEtBQUs7Z0JBQ2hCO1lBQ0YsQ0FBQztZQUNELE1BQU1TLFdBQVcsTUFBTWYsaURBQVMsQ0FBQyxxQ0FBcUM7Z0JBQ3BFaUIsU0FBUztvQkFDUEMsZUFBZSxVQUFjLE9BQUpKO2dCQUMzQjtZQUNGO1lBQ0FkLG1GQUE4QyxHQUFHLFVBQWMsT0FBSmM7WUFFM0RMLGFBQWE7Z0JBQ1hELE1BQU1PLFNBQVNQLElBQUk7Z0JBQ25CRCxPQUFPLElBQUk7Z0JBQ1hELFNBQVMsS0FBSztZQUNoQjtRQUNGLEVBQUUsT0FBT0MsT0FBWTtZQUNuQkUsYUFBYTtnQkFDWEQsTUFBTSxJQUFJO2dCQUNWRCxPQUFPQSxNQUFNUSxRQUFRLENBQUNQLElBQUksQ0FBQ2EsWUFBWTtnQkFDdkNmLFNBQVMsS0FBSztZQUNoQjtRQUNGO0lBQ0Y7SUFFQUYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkUztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUixzQkFBc0JpQixRQUFRO1FBQzdCQyxPQUFPO1lBQ0wsR0FBR1gsU0FBUztZQUNaSDtRQUNGO2tCQUVDRTs7Ozs7O0FBR1AsQ0FBQztHQTlEdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD85OWI3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQXV0aFwiO1xuXG5pbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBudW1iZXI7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwaG9uZTogc3RyaW5nO1xuICBjaXR5OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGRhdGE6IFVzZXIgfCBudWxsO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIEF1dGhTdGF0ZSBleHRlbmRzIFN0YXRlIHtcbiAgc2V0QXV0aFN0YXRlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxTdGF0ZT4+O1xufVxuXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoU3RhdGU+KHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBudWxsLFxuICBkYXRhOiBudWxsLFxuICBzZXRBdXRoU3RhdGU6ICgpID0+IHt9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhDb250ZXh0KHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59KSB7XG4gIGNvbnN0IFthdXRoU3RhdGUsIHNldEF1dGhTdGF0ZV0gPSB1c2VTdGF0ZTxTdGF0ZT4oe1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGRhdGE6IG51bGwsXG4gICAgZXJyb3I6IG51bGwsXG4gIH0pO1xuXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRBdXRoU3RhdGUoe1xuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgand0ID0gZ2V0Q29va2llKFwiand0XCIpO1xuXG4gICAgICBpZiAoIWp3dCkge1xuICAgICAgICByZXR1cm4gc2V0QXV0aFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL21lXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke2p3dH1gO1xuXG4gICAgICBzZXRBdXRoU3RhdGUoe1xuICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBzZXRBdXRoU3RhdGUoe1xuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvck1lc3NhZ2UsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VyKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoZW50aWNhdGlvbkNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIC4uLmF1dGhTdGF0ZSxcbiAgICAgICAgc2V0QXV0aFN0YXRlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoZW50aWNhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRDb29raWUiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJBdXRoZW50aWNhdGlvbkNvbnRleHQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2V0QXV0aFN0YXRlIiwiQXV0aENvbnRleHQiLCJjaGlsZHJlbiIsImF1dGhTdGF0ZSIsImZldGNoVXNlciIsImp3dCIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkZWZhdWx0cyIsImNvbW1vbiIsImVycm9yTWVzc2FnZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/context/AuthContext.tsx\n"));

/***/ })

});