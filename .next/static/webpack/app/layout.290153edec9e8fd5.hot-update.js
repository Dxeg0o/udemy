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

/***/ "(app-client)/./app/components/LoginModal.tsx":
/*!***************************************!*\
  !*** ./app/components/LoginModal.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Modal */ \"(app-client)/./node_modules/@mui/material/Modal/Modal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    width: 400,\n    bgcolor: \"background.paper\",\n    border: \"2px solid #000\",\n    boxShadow: 24,\n    p: 4\n};\nfunction LoginModal() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpen = ()=>setOpen(true);\n    const handleClose = ()=>setOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-300 text-white border p-1 px-4 rounded mr-3\",\n                onClick: handleOpen,\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/components/LoginModal.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                open: open,\n                onClose: handleClose,\n                \"aria-labelledby\": \"modal-modal-title\",\n                \"aria-describedby\": \"modal-modal-description\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    sx: style,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"modal-modal-title\",\n                            variant: \"h6\",\n                            component: \"h2\",\n                            children: \"Text in a modal\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/components/LoginModal.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: \"modal-modal-description\",\n                            sx: {\n                                mt: 2\n                            },\n                            children: \"Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/components/LoginModal.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/components/LoginModal.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/components/LoginModal.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/diegosolerolguin/Documents/programming/udemy/udemy/app/components/LoginModal.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginModal, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = LoginModal;\nvar _c;\n$RefreshReg$(_c, \"LoginModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9naW5Nb2RhbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ0c7QUFFYztBQUNWO0FBRXhDLE1BQU1JLFFBQVE7SUFDWkMsVUFBVTtJQUNWQyxLQUFLO0lBQ0xDLE1BQU07SUFDTkMsV0FBVztJQUNYQyxPQUFPO0lBQ1BDLFNBQVM7SUFDVEMsUUFBUTtJQUNSQyxXQUFXO0lBQ1hDLEdBQUc7QUFDTDtBQUVlLFNBQVNDLGFBQWE7O0lBQ25DLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNaUIsYUFBYSxJQUFNRCxRQUFRLElBQUk7SUFDckMsTUFBTUUsY0FBYyxJQUFNRixRQUFRLEtBQUs7SUFFdkMscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFNBQVNMOzBCQUNWOzs7Ozs7WUFFUzswQkFDViw4REFBQ2QsMkRBQUtBO2dCQUNKWSxNQUFNQTtnQkFDTlEsU0FBU0w7Z0JBQ1RNLG1CQUFnQjtnQkFDaEJDLG9CQUFpQjswQkFFakIsNEVBQUN4Qix5REFBR0E7b0JBQUN5QixJQUFJdEI7O3NDQUNQLDhEQUFDRixnRUFBVUE7NEJBQUN5QixJQUFHOzRCQUFvQkMsU0FBUTs0QkFBS0MsV0FBVTtzQ0FBSzs7Ozs7O3NDQUcvRCw4REFBQzNCLGdFQUFVQTs0QkFBQ3lCLElBQUc7NEJBQTBCRCxJQUFJO2dDQUFFSSxJQUFJOzRCQUFFO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sRSxDQUFDO0dBOUJ1QmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xvZ2luTW9kYWwudHN4P2U2MmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Nb2RhbFwiO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIiBhcyBcImFic29sdXRlXCIsXG4gIHRvcDogXCI1MCVcIixcbiAgbGVmdDogXCI1MCVcIixcbiAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxuICB3aWR0aDogNDAwLFxuICBiZ2NvbG9yOiBcImJhY2tncm91bmQucGFwZXJcIixcbiAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXG4gIGJveFNoYWRvdzogMjQsXG4gIHA6IDQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbk1vZGFsKCkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpO1xuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS0zMDAgdGV4dC13aGl0ZSBib3JkZXIgcC0xIHB4LTQgcm91bmRlZCBtci0zXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbn1cbiAgICAgID5cbiAgICAgICAgU2lnbiBpblxuICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgPE1vZGFsXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgIFRleHQgaW4gYSBtb2RhbFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCIgc3g9e3sgbXQ6IDIgfX0+XG4gICAgICAgICAgICBEdWlzIG1vbGxpcywgZXN0IG5vbiBjb21tb2RvIGx1Y3R1cywgbmlzaSBlcmF0IHBvcnR0aXRvciBsaWd1bGEuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCb3giLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsInAiLCJMb2dpbk1vZGFsIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwib25DbG9zZSIsImFyaWEtbGFiZWxsZWRieSIsImFyaWEtZGVzY3JpYmVkYnkiLCJzeCIsImlkIiwidmFyaWFudCIsImNvbXBvbmVudCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/LoginModal.tsx\n"));

/***/ })

});