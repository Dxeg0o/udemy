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
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
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

/***/ "(api)/./pages/api/auth/signup.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ \"jose\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jose__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { firstName , lastName , email , phone , city , password  } = req.body;\n        const errors = [];\n        const validationSchema = [\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isLength(firstName, {\n                    min: 1,\n                    max: 20\n                }),\n                errorMesage: \"First name is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isLength(lastName, {\n                    min: 1,\n                    max: 20\n                }),\n                errorMesage: \"Last name is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isEmail(email),\n                errorMesage: \"Email is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isMobilePhone(phone),\n                errorMesage: \"Phone number is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isLength(city, {\n                    min: 1\n                }),\n                errorMesage: \"City is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isStrongPassword(password),\n                errorMesage: \"Password is not strong enough\"\n            }\n        ];\n        validationSchema.forEach((check)=>{\n            if (!check.valid) {\n                errors.push(check.errorMesage);\n            }\n        });\n        if (errors.length) {\n            return res.status(400).json({\n                errorMessage: errors[0]\n            });\n        }\n        const userWithEmail = await prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (userWithEmail) {\n            return res.status(400).json({\n                errorMessage: \"Email is associated with another account\"\n            });\n        }\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 10);\n        const user = await prisma.user.create({\n            data: {\n                first_name: firstName,\n                last_name: lastName,\n                email,\n                phone,\n                city,\n                password: hashedPassword\n            }\n        });\n        const alg = \"HS256\";\n        const secret = new TextEncoder().encode(process.env.JWT_SECRET);\n        const token = await new jose__WEBPACK_IMPORTED_MODULE_3__.SignJWT({\n            email: user.email\n        }).setProtectedHeader({\n            alg\n        }).setExpirationTime(\"24h\").sign(secret);\n        return res.status(200).json({\n            hello: user\n        });\n    }\n    return res.status(404).json(\"Unknown endpoint\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2tDO0FBQ1k7QUFDbEI7QUFDQztBQUU3QixNQUFNSSxTQUFTLElBQUlILHdEQUFZQTtBQUVoQixlQUFlSSxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFLEdBQUdSLElBQUlTLElBQUk7UUFDdEUsTUFBTUMsU0FBbUIsRUFBRTtRQUMzQixNQUFNQyxtQkFBbUI7WUFDdkI7Z0JBQ0VDLE9BQU9sQix5REFBa0IsQ0FBQ1MsV0FBVztvQkFDbkNXLEtBQUs7b0JBQ0xDLEtBQUs7Z0JBQ1A7Z0JBQ0FDLGFBQWE7WUFDZjtZQUNBO2dCQUNFSixPQUFPbEIseURBQWtCLENBQUNVLFVBQVU7b0JBQ2xDVSxLQUFLO29CQUNMQyxLQUFLO2dCQUNQO2dCQUNBQyxhQUFhO1lBQ2Y7WUFDQTtnQkFDRUosT0FBT2xCLHdEQUFpQixDQUFDVztnQkFDekJXLGFBQWE7WUFDZjtZQUNBO2dCQUNFSixPQUFPbEIsOERBQXVCLENBQUNZO2dCQUMvQlUsYUFBYTtZQUNmO1lBQ0E7Z0JBQ0VKLE9BQU9sQix5REFBa0IsQ0FBQ2EsTUFBTTtvQkFDOUJPLEtBQUs7Z0JBQ1A7Z0JBQ0FFLGFBQWE7WUFDZjtZQUNBO2dCQUNFSixPQUFPbEIsaUVBQTBCLENBQUNjO2dCQUNsQ1EsYUFBYTtZQUNmO1NBQ0Q7UUFFREwsaUJBQWlCUyxPQUFPLENBQUMsQ0FBQ0MsUUFBVTtZQUNsQyxJQUFJLENBQUNBLE1BQU1ULEtBQUssRUFBRTtnQkFDaEJGLE9BQU9ZLElBQUksQ0FBQ0QsTUFBTUwsV0FBVztZQUMvQixDQUFDO1FBQ0g7UUFDQSxJQUFJTixPQUFPYSxNQUFNLEVBQUU7WUFDakIsT0FBT3RCLElBQUl1QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxjQUFjaEIsTUFBTSxDQUFDLEVBQUU7WUFBQztRQUN4RCxDQUFDO1FBRUQsTUFBTWlCLGdCQUFnQixNQUFNN0IsT0FBTzhCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ2pEQyxPQUFPO2dCQUNMekI7WUFDRjtRQUNGO1FBRUEsSUFBSXNCLGVBQWU7WUFDakIsT0FBTzFCLElBQ0p1QixNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO2dCQUFFQyxjQUFjO1lBQTJDO1FBQ3JFLENBQUM7UUFDRCxNQUFNSyxpQkFBaUIsTUFBTW5DLGtEQUFXLENBQUNZLFVBQVU7UUFDbkQsTUFBTW9CLE9BQU8sTUFBTTlCLE9BQU84QixJQUFJLENBQUNLLE1BQU0sQ0FBQztZQUNwQ0MsTUFBTTtnQkFDSkMsWUFBWWhDO2dCQUNaaUMsV0FBV2hDO2dCQUNYQztnQkFDQUM7Z0JBQ0FDO2dCQUNBQyxVQUFVdUI7WUFDWjtRQUNGO1FBRUEsTUFBTU0sTUFBTTtRQUNaLE1BQU1DLFNBQVMsSUFBSUMsY0FBY0MsTUFBTSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDOUQsTUFBTUMsUUFBUSxNQUFNLElBQUkvQyx5Q0FBWSxDQUFDO1lBQUVRLE9BQU91QixLQUFLdkIsS0FBSztRQUFDLEdBQ3REeUMsa0JBQWtCLENBQUM7WUFBRVQ7UUFBSSxHQUN6QlUsaUJBQWlCLENBQUMsT0FDbEJDLElBQUksQ0FBQ1Y7UUFFUixPQUFPckMsSUFBSXVCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDMUJ3QixPQUFPckI7UUFDVDtJQUNGLENBQUM7SUFDRCxPQUFPM0IsSUFBSXVCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7QUFDOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW50YWJsZW5leHRqcy8uL3BhZ2VzL2FwaS9hdXRoL3NpZ251cC50cz83ZjFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0ICogYXMgam9zZSBmcm9tIFwiam9zZVwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGhvbmUsIGNpdHksIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFtcbiAgICAgIHtcbiAgICAgICAgdmFsaWQ6IHZhbGlkYXRvci5pc0xlbmd0aChmaXJzdE5hbWUsIHtcbiAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yTWVzYWdlOiBcIkZpcnN0IG5hbWUgaXMgaW52YWxpZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsaWQ6IHZhbGlkYXRvci5pc0xlbmd0aChsYXN0TmFtZSwge1xuICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3JNZXNhZ2U6IFwiTGFzdCBuYW1lIGlzIGludmFsaWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbGlkOiB2YWxpZGF0b3IuaXNFbWFpbChlbWFpbCksXG4gICAgICAgIGVycm9yTWVzYWdlOiBcIkVtYWlsIGlzIGludmFsaWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbGlkOiB2YWxpZGF0b3IuaXNNb2JpbGVQaG9uZShwaG9uZSksXG4gICAgICAgIGVycm9yTWVzYWdlOiBcIlBob25lIG51bWJlciBpcyBpbnZhbGlkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZDogdmFsaWRhdG9yLmlzTGVuZ3RoKGNpdHksIHtcbiAgICAgICAgICBtaW46IDEsXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvck1lc2FnZTogXCJDaXR5IGlzIGludmFsaWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbGlkOiB2YWxpZGF0b3IuaXNTdHJvbmdQYXNzd29yZChwYXNzd29yZCksXG4gICAgICAgIGVycm9yTWVzYWdlOiBcIlBhc3N3b3JkIGlzIG5vdCBzdHJvbmcgZW5vdWdoXCIsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICB2YWxpZGF0aW9uU2NoZW1hLmZvckVhY2goKGNoZWNrKSA9PiB7XG4gICAgICBpZiAoIWNoZWNrLnZhbGlkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGNoZWNrLmVycm9yTWVzYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3JNZXNzYWdlOiBlcnJvcnNbMF0gfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlcldpdGhFbWFpbCA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKHVzZXJXaXRoRW1haWwpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDApXG4gICAgICAgIC5qc29uKHsgZXJyb3JNZXNzYWdlOiBcIkVtYWlsIGlzIGFzc29jaWF0ZWQgd2l0aCBhbm90aGVyIGFjY291bnRcIiB9KTtcbiAgICB9XG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogbGFzdE5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwaG9uZSxcbiAgICAgICAgY2l0eSxcbiAgICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsZyA9IFwiSFMyNTZcIjtcbiAgICBjb25zdCBzZWNyZXQgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBuZXcgam9zZS5TaWduSldUKHsgZW1haWw6IHVzZXIuZW1haWwgfSlcbiAgICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGcgfSlcbiAgICAgIC5zZXRFeHBpcmF0aW9uVGltZShcIjI0aFwiKVxuICAgICAgLnNpZ24oc2VjcmV0KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBoZWxsbzogdXNlcixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oXCJVbmtub3duIGVuZHBvaW50XCIpO1xufVxuIl0sIm5hbWVzIjpbInZhbGlkYXRvciIsIlByaXNtYUNsaWVudCIsImJjcnlwdCIsImpvc2UiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwiY2l0eSIsInBhc3N3b3JkIiwiYm9keSIsImVycm9ycyIsInZhbGlkYXRpb25TY2hlbWEiLCJ2YWxpZCIsImlzTGVuZ3RoIiwibWluIiwibWF4IiwiZXJyb3JNZXNhZ2UiLCJpc0VtYWlsIiwiaXNNb2JpbGVQaG9uZSIsImlzU3Ryb25nUGFzc3dvcmQiLCJmb3JFYWNoIiwiY2hlY2siLCJwdXNoIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsImVycm9yTWVzc2FnZSIsInVzZXJXaXRoRW1haWwiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwiY3JlYXRlIiwiZGF0YSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJhbGciLCJzZWNyZXQiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwidG9rZW4iLCJTaWduSldUIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwiaGVsbG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signup.ts"));
module.exports = __webpack_exports__;

})();