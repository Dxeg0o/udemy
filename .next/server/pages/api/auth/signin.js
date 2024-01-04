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
exports.id = "pages/api/auth/signin";
exports.ids = ["pages/api/auth/signin"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jose":
/*!***********************!*\
  !*** external "jose" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("jose");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ "(api)/./pages/api/auth/signin.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/signin.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ \"jose\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jose__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const errors = [];\n        const { email , password  } = req.body;\n        const validationSchema = [\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail(email),\n                errorMessage: \"Email is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_1___default().isLength(password, {\n                    min: 1\n                }),\n                errorMessage: \"Password is invalid\"\n            }\n        ];\n        validationSchema.forEach((check)=>{\n            if (!check.valid) {\n                errors.push(check.errorMessage);\n            }\n        });\n        if (errors.length) {\n            return res.status(400).json;\n        }\n        const userWithEmail = await prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (!userWithEmail) {\n            return res.status(401).json({\n                errorMessage: \"Email or password is invalid\"\n            });\n        }\n        const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, userWithEmail.password);\n        if (!isMatch) {\n            return res.status(401).json({\n                errorMessage: \"Email or password is invalid\"\n            });\n        }\n        const alg = \"HS256\";\n        const secret = new TextEncoder().encode(process.env.JWT_SECRET);\n        const token = await new jose__WEBPACK_IMPORTED_MODULE_3__.SignJWT({\n            email: userWithEmail.email\n        }).setProtectedHeader({\n            alg\n        }).setExpirationTime(\"24h\").sign(secret);\n        return res.status(200).json({\n            hello: token\n        });\n    }\n    return res.status(404).json(\"Unknown endpoint\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBRVo7QUFDTjtBQUNDO0FBRzdCLE1BQU1JLFNBQVMsSUFBSUosd0RBQVlBO0FBRWhCLGVBQWVLLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxTQUFtQixFQUFFO1FBQzNCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtRQUNwQyxNQUFNQyxtQkFBbUI7WUFDdkI7Z0JBQ0VDLE9BQU9iLHdEQUFpQixDQUFDUztnQkFDekJNLGNBQWM7WUFDaEI7WUFDQTtnQkFDRUYsT0FBT2IseURBQWtCLENBQUNVLFVBQVU7b0JBQ2xDTyxLQUFLO2dCQUNQO2dCQUNBRixjQUFjO1lBQ2hCO1NBQ0Q7UUFDREgsaUJBQWlCTSxPQUFPLENBQUMsQ0FBQ0MsUUFBVTtZQUNsQyxJQUFJLENBQUNBLE1BQU1OLEtBQUssRUFBRTtnQkFDaEJMLE9BQU9ZLElBQUksQ0FBQ0QsTUFBTUosWUFBWTtZQUNoQyxDQUFDO1FBQ0g7UUFFQSxJQUFJUCxPQUFPYSxNQUFNLEVBQUU7WUFDakIsT0FBT2YsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJO1FBQzdCLENBQUM7UUFFRCxNQUFNQyxnQkFBZ0IsTUFBTXJCLE9BQU9zQixJQUFJLENBQUNDLFVBQVUsQ0FBQztZQUNqREMsT0FBTztnQkFDTGxCO1lBQ0Y7UUFDRjtRQUNBLElBQUksQ0FBQ2UsZUFBZTtZQUNsQixPQUFPbEIsSUFDSmdCLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7Z0JBQUVSLGNBQWM7WUFBK0I7UUFDekQsQ0FBQztRQUNELE1BQU1hLFVBQVUsTUFBTTNCLHFEQUFjLENBQUNTLFVBQVVjLGNBQWNkLFFBQVE7UUFDckUsSUFBSSxDQUFDa0IsU0FBUztZQUNaLE9BQU90QixJQUNKZ0IsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztnQkFBRVIsY0FBYztZQUErQjtRQUN6RCxDQUFDO1FBQ0QsTUFBTWUsTUFBTTtRQUNaLE1BQU1DLFNBQVMsSUFBSUMsY0FBY0MsTUFBTSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDOUQsTUFBTUMsUUFBUSxNQUFNLElBQUluQyx5Q0FBWSxDQUFDO1lBQUVPLE9BQU9lLGNBQWNmLEtBQUs7UUFBQyxHQUMvRDhCLGtCQUFrQixDQUFDO1lBQUVUO1FBQUksR0FDekJVLGlCQUFpQixDQUFDLE9BQ2xCQyxJQUFJLENBQUNWO1FBRVIsT0FBT3pCLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQzFCbUIsT0FBT0w7UUFDVDtJQUNGLENBQUM7SUFFRCxPQUFPL0IsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7QUFDOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW50YWJsZW5leHRqcy8uL3BhZ2VzL2FwaS9hdXRoL3NpZ25pbi50cz9jNGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0ICogYXMgam9zZSBmcm9tIFwiam9zZVwiO1xuXG5pbXBvcnQgaXNFbWFpbCBmcm9tIFwidmFsaWRhdG9yL2xpYi9pc0VtYWlsXCI7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gW1xuICAgICAge1xuICAgICAgICB2YWxpZDogdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwiRW1haWwgaXMgaW52YWxpZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsaWQ6IHZhbGlkYXRvci5pc0xlbmd0aChwYXNzd29yZCwge1xuICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCJQYXNzd29yZCBpcyBpbnZhbGlkXCIsXG4gICAgICB9LFxuICAgIF07XG4gICAgdmFsaWRhdGlvblNjaGVtYS5mb3JFYWNoKChjaGVjaykgPT4ge1xuICAgICAgaWYgKCFjaGVjay52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaChjaGVjay5lcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyV2l0aEVtYWlsID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBlbWFpbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKCF1c2VyV2l0aEVtYWlsKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDAxKVxuICAgICAgICAuanNvbih7IGVycm9yTWVzc2FnZTogXCJFbWFpbCBvciBwYXNzd29yZCBpcyBpbnZhbGlkXCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlcldpdGhFbWFpbC5wYXNzd29yZCk7XG4gICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDAxKVxuICAgICAgICAuanNvbih7IGVycm9yTWVzc2FnZTogXCJFbWFpbCBvciBwYXNzd29yZCBpcyBpbnZhbGlkXCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IGFsZyA9IFwiSFMyNTZcIjtcbiAgICBjb25zdCBzZWNyZXQgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBuZXcgam9zZS5TaWduSldUKHsgZW1haWw6IHVzZXJXaXRoRW1haWwuZW1haWwgfSlcbiAgICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGcgfSlcbiAgICAgIC5zZXRFeHBpcmF0aW9uVGltZShcIjI0aFwiKVxuICAgICAgLnNpZ24oc2VjcmV0KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBoZWxsbzogdG9rZW4sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oXCJVbmtub3duIGVuZHBvaW50XCIpO1xufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInZhbGlkYXRvciIsImJjcnlwdCIsImpvc2UiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZXJyb3JzIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJ2YWxpZGF0aW9uU2NoZW1hIiwidmFsaWQiLCJpc0VtYWlsIiwiZXJyb3JNZXNzYWdlIiwiaXNMZW5ndGgiLCJtaW4iLCJmb3JFYWNoIiwiY2hlY2siLCJwdXNoIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsInVzZXJXaXRoRW1haWwiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaXNNYXRjaCIsImNvbXBhcmUiLCJhbGciLCJzZWNyZXQiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwidG9rZW4iLCJTaWduSldUIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwiaGVsbG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signin.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signin.ts"));
module.exports = __webpack_exports__;

})();