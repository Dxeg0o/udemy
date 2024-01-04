"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/me";
exports.ids = ["pages/api/auth/me"];
exports.modules = {

/***/ "jose":
/*!***********************!*\
  !*** external "jose" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("jose");

/***/ }),

/***/ "(api)/./pages/api/auth/me.ts":
/*!******************************!*\
  !*** ./pages/api/auth/me.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"jose\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const bearerToken = req.headers[\"authorization\"];\n    if (!bearerToken) {\n        res.status(401).json({\n            errorMessage: \"Unauthorized request(1)\"\n        });\n    }\n    const token = bearerToken.split(\" \")[1];\n    if (!token) {\n        res.status(401).json({\n            errorMessage: \"Unauthorized request(2)\"\n        });\n    }\n    const secret = new TextEncoder().encode(process.env.JWT_SECRET);\n    try {\n        await jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify(token, secret);\n    } catch (error) {\n        res.status(401).json({\n            errorMessage: \"Unauthorized request(3)\"\n        });\n    }\n    return res.json({\n        me: \"dnsjkadnjkas\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9tZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNkI7QUFFZCxlQUFlQyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTUMsY0FBY0YsSUFBSUcsT0FBTyxDQUFDLGdCQUFnQjtJQUNoRCxJQUFJLENBQUNELGFBQWE7UUFDaEJELElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLGNBQWM7UUFDaEI7SUFDRixDQUFDO0lBQ0QsTUFBTUMsUUFBUUwsWUFBWU0sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3ZDLElBQUksQ0FBQ0QsT0FBTztRQUNWTixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxjQUFjO1FBQ2hCO0lBQ0YsQ0FBQztJQUNELE1BQU1HLFNBQVMsSUFBSUMsY0FBY0MsTUFBTSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFDOUQsSUFBSTtRQUNGLE1BQU1oQiwyQ0FBYyxDQUFDUyxPQUFPRTtJQUM5QixFQUFFLE9BQU9PLE9BQU87UUFDZGYsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsY0FBYztRQUNoQjtJQUNGO0lBQ0EsT0FBT0wsSUFBSUksSUFBSSxDQUFDO1FBQUVZLElBQUk7SUFBZTtBQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbnRhYmxlbmV4dGpzLy4vcGFnZXMvYXBpL2F1dGgvbWUudHM/MDI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCAqIGFzIGpvc2UgZnJvbSBcImpvc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCBiZWFyZXJUb2tlbiA9IHJlcS5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXSBhcyBzdHJpbmc7XG4gIGlmICghYmVhcmVyVG9rZW4pIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7XG4gICAgICBlcnJvck1lc3NhZ2U6IFwiVW5hdXRob3JpemVkIHJlcXVlc3QoMSlcIixcbiAgICB9KTtcbiAgfVxuICBjb25zdCB0b2tlbiA9IGJlYXJlclRva2VuLnNwbGl0KFwiIFwiKVsxXTtcbiAgaWYgKCF0b2tlbikge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgIGVycm9yTWVzc2FnZTogXCJVbmF1dGhvcml6ZWQgcmVxdWVzdCgyKVwiLFxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHNlY3JldCA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCBqb3NlLmp3dFZlcmlmeSh0b2tlbiwgc2VjcmV0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7XG4gICAgICBlcnJvck1lc3NhZ2U6IFwiVW5hdXRob3JpemVkIHJlcXVlc3QoMylcIixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzLmpzb24oeyBtZTogXCJkbnNqa2FkbmprYXNcIiB9KTtcbn1cbiJdLCJuYW1lcyI6WyJqb3NlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJlYXJlclRva2VuIiwiaGVhZGVycyIsInN0YXR1cyIsImpzb24iLCJlcnJvck1lc3NhZ2UiLCJ0b2tlbiIsInNwbGl0Iiwic2VjcmV0IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImp3dFZlcmlmeSIsImVycm9yIiwibWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/me.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/me.ts"));
module.exports = __webpack_exports__;

})();