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
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
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

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ "(api)/./pages/api/signup.ts":
/*!*****************************!*\
  !*** ./pages/api/signup.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { firstName , lastName , email , phone , city , password  } = req.body;\n        const errors = [];\n        const validationSchema = [\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isLength(firstName, {\n                    min: 1,\n                    max: 20\n                }),\n                errorMesage: \"First name is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isLength(lastName, {\n                    min: 1,\n                    max: 20\n                }),\n                errorMesage: \"Last name is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isEmail(email),\n                errorMesage: \"Email is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isMobilePhone(phone),\n                errorMesage: \"Phone number is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isLength(city, {\n                    min: 1\n                }),\n                errorMesage: \"City is invalid\"\n            },\n            {\n                valid: validator__WEBPACK_IMPORTED_MODULE_0___default().isStrongPassword(password),\n                errorMesage: \"Password is not strong enough\"\n            }\n        ];\n        validationSchema.forEach((check)=>{\n            if (!check.valid) {\n                errors.push(check.errorMesage);\n            }\n        });\n        if (errors.length) {\n            return res.status(400).json({\n                errorMessage: errors[0]\n            });\n        }\n        const userWithEmail = await prisma.user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (userWithEmail) {\n            return res.status(400).json({\n                errorMessage: \"Email is associated with another account\"\n            });\n        }\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 10);\n        const user = await prisma.user.create({\n            data: {\n                first_name: firstName,\n                last_name: lastName,\n                email,\n                phone,\n                city,\n                password: hashedPassword\n            }\n        });\n        res.status(200).json({\n            hello: user\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2lnbnVwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDa0M7QUFDWTtBQUNsQjtBQUM1QixNQUFNRyxTQUFTLElBQUlGLHdEQUFZQTtBQUVoQixlQUFlRyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsU0FBUSxFQUFFLEdBQUdSLElBQUlTLElBQUk7UUFDdEUsTUFBTUMsU0FBbUIsRUFBRTtRQUMzQixNQUFNQyxtQkFBbUI7WUFDdkI7Z0JBQ0VDLE9BQU9qQix5REFBa0IsQ0FBQ1EsV0FBVztvQkFDbkNXLEtBQUs7b0JBQ0xDLEtBQUs7Z0JBQ1A7Z0JBQ0FDLGFBQWE7WUFDZjtZQUNBO2dCQUNFSixPQUFPakIseURBQWtCLENBQUNTLFVBQVU7b0JBQ2xDVSxLQUFLO29CQUNMQyxLQUFLO2dCQUNQO2dCQUNBQyxhQUFhO1lBQ2Y7WUFDQTtnQkFDRUosT0FBT2pCLHdEQUFpQixDQUFDVTtnQkFDekJXLGFBQWE7WUFDZjtZQUNBO2dCQUNFSixPQUFPakIsOERBQXVCLENBQUNXO2dCQUMvQlUsYUFBYTtZQUNmO1lBQ0E7Z0JBQ0VKLE9BQU9qQix5REFBa0IsQ0FBQ1ksTUFBTTtvQkFDOUJPLEtBQUs7Z0JBQ1A7Z0JBQ0FFLGFBQWE7WUFDZjtZQUNBO2dCQUNFSixPQUFPakIsaUVBQTBCLENBQUNhO2dCQUNsQ1EsYUFBYTtZQUNmO1NBQ0Q7UUFFREwsaUJBQWlCUyxPQUFPLENBQUMsQ0FBQ0MsUUFBVTtZQUNsQyxJQUFJLENBQUNBLE1BQU1ULEtBQUssRUFBRTtnQkFDaEJGLE9BQU9ZLElBQUksQ0FBQ0QsTUFBTUwsV0FBVztZQUMvQixDQUFDO1FBQ0g7UUFDQSxJQUFJTixPQUFPYSxNQUFNLEVBQUU7WUFDakIsT0FBT3RCLElBQUl1QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxjQUFjaEIsTUFBTSxDQUFDLEVBQUU7WUFBQztRQUN4RCxDQUFDO1FBRUQsTUFBTWlCLGdCQUFnQixNQUFNN0IsT0FBTzhCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ2pEQyxPQUFPO2dCQUNMekI7WUFDRjtRQUNGO1FBRUEsSUFBSXNCLGVBQWU7WUFDakIsT0FBTzFCLElBQ0p1QixNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO2dCQUFFQyxjQUFjO1lBQTJDO1FBQ3JFLENBQUM7UUFDRCxNQUFNSyxpQkFBaUIsTUFBTWxDLGtEQUFXLENBQUNXLFVBQVU7UUFDbkQsTUFBTW9CLE9BQU8sTUFBTTlCLE9BQU84QixJQUFJLENBQUNLLE1BQU0sQ0FBQztZQUNwQ0MsTUFBTTtnQkFDSkMsWUFBWWhDO2dCQUNaaUMsV0FBV2hDO2dCQUNYQztnQkFDQUM7Z0JBQ0FDO2dCQUNBQyxVQUFVdUI7WUFDWjtRQUNGO1FBQ0E5QixJQUFJdUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQlksT0FBT1Q7UUFDVDtJQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbnRhYmxlbmV4dGpzLy4vcGFnZXMvYXBpL3NpZ251cC50cz9lNjM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBob25lLCBjaXR5LCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBbXG4gICAgICB7XG4gICAgICAgIHZhbGlkOiB2YWxpZGF0b3IuaXNMZW5ndGgoZmlyc3ROYW1lLCB7XG4gICAgICAgICAgbWluOiAxLFxuICAgICAgICAgIG1heDogMjAsXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvck1lc2FnZTogXCJGaXJzdCBuYW1lIGlzIGludmFsaWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbGlkOiB2YWxpZGF0b3IuaXNMZW5ndGgobGFzdE5hbWUsIHtcbiAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yTWVzYWdlOiBcIkxhc3QgbmFtZSBpcyBpbnZhbGlkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZDogdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpLFxuICAgICAgICBlcnJvck1lc2FnZTogXCJFbWFpbCBpcyBpbnZhbGlkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZDogdmFsaWRhdG9yLmlzTW9iaWxlUGhvbmUocGhvbmUpLFxuICAgICAgICBlcnJvck1lc2FnZTogXCJQaG9uZSBudW1iZXIgaXMgaW52YWxpZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsaWQ6IHZhbGlkYXRvci5pc0xlbmd0aChjaXR5LCB7XG4gICAgICAgICAgbWluOiAxLFxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3JNZXNhZ2U6IFwiQ2l0eSBpcyBpbnZhbGlkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZDogdmFsaWRhdG9yLmlzU3Ryb25nUGFzc3dvcmQocGFzc3dvcmQpLFxuICAgICAgICBlcnJvck1lc2FnZTogXCJQYXNzd29yZCBpcyBub3Qgc3Ryb25nIGVub3VnaFwiLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgdmFsaWRhdGlvblNjaGVtYS5mb3JFYWNoKChjaGVjaykgPT4ge1xuICAgICAgaWYgKCFjaGVjay52YWxpZCkge1xuICAgICAgICBlcnJvcnMucHVzaChjaGVjay5lcnJvck1lc2FnZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yTWVzc2FnZTogZXJyb3JzWzBdIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJXaXRoRW1haWwgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICh1c2VyV2l0aEVtYWlsKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAuanNvbih7IGVycm9yTWVzc2FnZTogXCJFbWFpbCBpcyBhc3NvY2lhdGVkIHdpdGggYW5vdGhlciBhY2NvdW50XCIgfSk7XG4gICAgfVxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lLFxuICAgICAgICBsYXN0X25hbWU6IGxhc3ROYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGhvbmUsXG4gICAgICAgIGNpdHksXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgaGVsbG86IHVzZXIsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2YWxpZGF0b3IiLCJQcmlzbWFDbGllbnQiLCJiY3J5cHQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwiY2l0eSIsInBhc3N3b3JkIiwiYm9keSIsImVycm9ycyIsInZhbGlkYXRpb25TY2hlbWEiLCJ2YWxpZCIsImlzTGVuZ3RoIiwibWluIiwibWF4IiwiZXJyb3JNZXNhZ2UiLCJpc0VtYWlsIiwiaXNNb2JpbGVQaG9uZSIsImlzU3Ryb25nUGFzc3dvcmQiLCJmb3JFYWNoIiwiY2hlY2siLCJwdXNoIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsImVycm9yTWVzc2FnZSIsInVzZXJXaXRoRW1haWwiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwiY3JlYXRlIiwiZGF0YSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJoZWxsbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/signup.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/signup.ts"));
module.exports = __webpack_exports__;

})();