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

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./pages/api/auth/me.ts":
/*!******************************!*\
  !*** ./pages/api/auth/me.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function handler(req, res) {\n    const bearerToken = req.headers[\"authorization\"];\n    const token = bearerToken.split(\" \")[1];\n    const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode(token);\n    if (!payload.email) {\n        return res.status(401).json({\n            errorMessage: \"Unauthorized request(2)\"\n        });\n    }\n    const user = await prisma.user.findUnique({\n        where: {\n            email: payload.email\n        },\n        select: {\n            id: true,\n            first_name: true,\n            last_name: true,\n            email: true,\n            phone: true,\n            city: true\n        }\n    });\n    if (!user) {\n        return res.status(401).json({\n            errorMessage: \"User not found\"\n        });\n    }\n    return res.json({\n        id: user.id,\n        firstName: user.first_name,\n        lastName: user.last_name,\n        phone: user.phone,\n        city: user.city\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9tZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUrQjtBQUNlO0FBRTlDLE1BQU1FLFNBQVMsSUFBSUQsd0RBQVlBO0FBRWhCLGVBQWVFLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNQyxjQUFjRixJQUFJRyxPQUFPLENBQUMsZ0JBQWdCO0lBQ2hELE1BQU1DLFFBQVFGLFlBQVlHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUN2QyxNQUFNQyxVQUFVViwwREFBVSxDQUFDUTtJQUUzQixJQUFJLENBQUNFLFFBQVFFLEtBQUssRUFBRTtRQUNsQixPQUFPUCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQzFCQyxjQUFjO1FBQ2hCO0lBQ0YsQ0FBQztJQUVELE1BQU1DLE9BQU8sTUFBTWQsT0FBT2MsSUFBSSxDQUFDQyxVQUFVLENBQUM7UUFDeENDLE9BQU87WUFDTE4sT0FBT0YsUUFBUUUsS0FBSztRQUN0QjtRQUNBTyxRQUFRO1lBQ05DLElBQUksSUFBSTtZQUNSQyxZQUFZLElBQUk7WUFDaEJDLFdBQVcsSUFBSTtZQUNmVixPQUFPLElBQUk7WUFDWFcsT0FBTyxJQUFJO1lBQ1hDLE1BQU0sSUFBSTtRQUNaO0lBQ0Y7SUFFQSxJQUFJLENBQUNSLE1BQU07UUFDVCxPQUFPWCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQzFCQyxjQUFjO1FBQ2hCO0lBQ0YsQ0FBQztJQUVELE9BQU9WLElBQUlTLElBQUksQ0FBQztRQUNkTSxJQUFJSixLQUFLSSxFQUFFO1FBQ1hLLFdBQVdULEtBQUtLLFVBQVU7UUFDMUJLLFVBQVVWLEtBQUtNLFNBQVM7UUFDeEJDLE9BQU9QLEtBQUtPLEtBQUs7UUFDakJDLE1BQU1SLEtBQUtRLElBQUk7SUFDakI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbnRhYmxlbmV4dGpzLy4vcGFnZXMvYXBpL2F1dGgvbWUudHM/MDI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCAqIGFzIGpvc2UgZnJvbSBcImpvc2VcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCBiZWFyZXJUb2tlbiA9IHJlcS5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXSBhcyBzdHJpbmc7XG4gIGNvbnN0IHRva2VuID0gYmVhcmVyVG9rZW4uc3BsaXQoXCIgXCIpWzFdO1xuICBjb25zdCBwYXlsb2FkID0gand0LmRlY29kZSh0b2tlbikgYXMgeyBlbWFpbDogc3RyaW5nIH07XG5cbiAgaWYgKCFwYXlsb2FkLmVtYWlsKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgIGVycm9yTWVzc2FnZTogXCJVbmF1dGhvcml6ZWQgcmVxdWVzdCgyKVwiLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbCxcbiAgICB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgaWQ6IHRydWUsXG4gICAgICBmaXJzdF9uYW1lOiB0cnVlLFxuICAgICAgbGFzdF9uYW1lOiB0cnVlLFxuICAgICAgZW1haWw6IHRydWUsXG4gICAgICBwaG9uZTogdHJ1ZSxcbiAgICAgIGNpdHk6IHRydWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgIGVycm9yTWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZFwiLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICBpZDogdXNlci5pZCxcbiAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3RfbmFtZSxcbiAgICBsYXN0TmFtZTogdXNlci5sYXN0X25hbWUsXG4gICAgcGhvbmU6IHVzZXIucGhvbmUsXG4gICAgY2l0eTogdXNlci5jaXR5LFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJqd3QiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYmVhcmVyVG9rZW4iLCJoZWFkZXJzIiwidG9rZW4iLCJzcGxpdCIsInBheWxvYWQiLCJkZWNvZGUiLCJlbWFpbCIsInN0YXR1cyIsImpzb24iLCJlcnJvck1lc3NhZ2UiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0IiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicGhvbmUiLCJjaXR5IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/me.ts\n");

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