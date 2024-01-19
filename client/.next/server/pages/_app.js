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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/api/index.tsx":
/*!***************************!*\
  !*** ./src/api/index.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMe: () => (/* binding */ getMe),\n/* harmony export */   getVideos: () => (/* binding */ getVideos),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   updateVideo: () => (/* binding */ updateVideo),\n/* harmony export */   uploadVideo: () => (/* binding */ uploadVideo)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst base = process.env.NEXT_PUBLIC_API_ENDPOINT || \"http://localhost:4000\";\nconst userBase = `${base}/api/users`;\nconst authBase = `${base}/api/auth`;\nconst videosBase = `${base}/api/videos`;\nasync function registerUser(payload) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(userBase, payload).then((res)=>res.data);\n}\nasync function login(payload) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(authBase, payload, {\n        withCredentials: true\n    }).then((res)=>res.data);\n}\nasync function getMe() {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(userBase, {\n        withCredentials: true\n    }).then((res)=>res.data).catch(()=>{\n        return null;\n    });\n}\nasync function uploadVideo({ formData, config }) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(videosBase, formData, {\n        withCredentials: true,\n        ...config,\n        headers: {\n            \"Content-Type\": \"multipart/form-data\"\n        }\n    }).then((res)=>res.data);\n}\nfunction updateVideo({ videoId, ...payload }) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(`${videosBase}/${videoId}`, payload, {\n        withCredentials: true\n    });\n}\nasync function getVideos() {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(videosBase).then((res)=>res.data);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRzFCLE1BQU1DLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0Msd0JBQXdCLElBQUk7QUFFckQsTUFBTUMsV0FBVyxDQUFDLEVBQUVKLEtBQUssVUFBVSxDQUFDO0FBQ3BDLE1BQU1LLFdBQVcsQ0FBQyxFQUFFTCxLQUFLLFNBQVMsQ0FBQztBQUNuQyxNQUFNTSxhQUFhLENBQUMsRUFBRU4sS0FBSyxXQUFXLENBQUM7QUFFaEMsZUFBZU8sYUFBYUMsT0FLbEM7SUFDQyxPQUFPVCxrREFBVSxDQUFDSyxVQUFVSSxTQUFTRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUM3RDtBQUVPLGVBQWVDLE1BQU1MLE9BQTRDO0lBQ3RFLE9BQU9ULGtEQUNBLENBQUNNLFVBQVVHLFNBQVM7UUFDdkJNLGlCQUFpQjtJQUNuQixHQUNDSixJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUMzQjtBQUVPLGVBQWVHO0lBQ3BCLE9BQU9oQixpREFDRCxDQUFDSyxVQUFVO1FBQ2JVLGlCQUFpQjtJQUNuQixHQUNDSixJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxFQUN0QkssS0FBSyxDQUFDO1FBQ0wsT0FBTztJQUNUO0FBQ0o7QUFFTyxlQUFlQyxZQUFZLEVBQ2hDQyxRQUFRLEVBQ1JDLE1BQU0sRUFJUDtJQUNDLE9BQU9yQixrREFDQSxDQUFDTyxZQUFZYSxVQUFVO1FBQzFCTCxpQkFBaUI7UUFDakIsR0FBR00sTUFBTTtRQUNUQyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO0lBQ0YsR0FDQ1gsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7QUFDM0I7QUFFTyxTQUFTVSxZQUFZLEVBQzFCQyxPQUFPLEVBQ1AsR0FBR2YsU0FNSjtJQUNDLE9BQU9ULG1EQUFXLENBQVEsQ0FBQyxFQUFFTyxXQUFXLENBQUMsRUFBRWlCLFFBQVEsQ0FBQyxFQUFFZixTQUFTO1FBQzdETSxpQkFBaUI7SUFDbkI7QUFDRjtBQUVPLGVBQWVXO0lBQ3BCLE9BQU8xQixpREFBUyxDQUFDTyxZQUFZSSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUNyRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9hcGkvaW5kZXgudHN4P2MxNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuY29uc3QgYmFzZSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCB8fCAnaHR0cDovL2xvY2FsaG9zdDo0MDAwJztcclxuXHJcbmNvbnN0IHVzZXJCYXNlID0gYCR7YmFzZX0vYXBpL3VzZXJzYDtcclxuY29uc3QgYXV0aEJhc2UgPSBgJHtiYXNlfS9hcGkvYXV0aGA7XHJcbmNvbnN0IHZpZGVvc0Jhc2UgPSBgJHtiYXNlfS9hcGkvdmlkZW9zYDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclVzZXIocGF5bG9hZDoge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xyXG59KSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QodXNlckJhc2UsIHBheWxvYWQpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4ocGF5bG9hZDogeyBlbWFpbDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pIHtcclxuICByZXR1cm4gYXhpb3NcclxuICAgIC5wb3N0KGF1dGhCYXNlLCBwYXlsb2FkLCB7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZSgpIHtcclxuICByZXR1cm4gYXhpb3NcclxuICAgIC5nZXQodXNlckJhc2UsIHtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxyXG4gICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZFZpZGVvKHtcclxuICBmb3JtRGF0YSxcclxuICBjb25maWcsXHJcbn06IHtcclxuICBmb3JtRGF0YTogRm9ybURhdGE7XHJcbiAgY29uZmlnOiB7IG9uVXBsb2FkUHJvZ3Jlc3M6IChwcm9ncmVzc0V2ZW50OiBhbnkpID0+IHZvaWQgfTtcclxufSkge1xyXG4gIHJldHVybiBheGlvc1xyXG4gICAgLnBvc3QodmlkZW9zQmFzZSwgZm9ybURhdGEsIHtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAuLi5jb25maWcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWaWRlbyh7XHJcbiAgdmlkZW9JZCxcclxuICAuLi5wYXlsb2FkXHJcbn06IHtcclxuICB2aWRlb0lkOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHB1Ymxpc2hlZDogYm9vbGVhbjtcclxufSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaDxWaWRlbz4oYCR7dmlkZW9zQmFzZX0vJHt2aWRlb0lkfWAsIHBheWxvYWQsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZpZGVvcygpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KHZpZGVvc0Jhc2UpLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQiLCJ1c2VyQmFzZSIsImF1dGhCYXNlIiwidmlkZW9zQmFzZSIsInJlZ2lzdGVyVXNlciIsInBheWxvYWQiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJsb2dpbiIsIndpdGhDcmVkZW50aWFscyIsImdldE1lIiwiZ2V0IiwiY2F0Y2giLCJ1cGxvYWRWaWRlbyIsImZvcm1EYXRhIiwiY29uZmlnIiwiaGVhZGVycyIsInVwZGF0ZVZpZGVvIiwidmlkZW9JZCIsInBhdGNoIiwiZ2V0VmlkZW9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/index.tsx\n");

/***/ }),

/***/ "./src/context/me.tsx":
/*!****************************!*\
  !*** ./src/context/me.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MeContextProvider: () => (/* binding */ MeContextProvider),\n/* harmony export */   useMe: () => (/* binding */ useMe)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ \"./src/api/index.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ \"./src/types/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_4__]);\n_api__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst MeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);\nfunction MeContextProvider({ children }) {\n    const { data, isLoading, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_types__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.me, _api__WEBPACK_IMPORTED_MODULE_4__.getMe);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MeContext.Provider, {\n        value: {\n            user: data,\n            refetch\n        },\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Loader, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\context\\\\me.tsx\",\n            lineNumber: 20,\n            columnNumber: 20\n        }, this) : children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\context\\\\me.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\nconst useMe = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(MeContext);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9tZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNzQjtBQUNlO0FBQzdDO0FBQ1U7QUFFekMsTUFBTU0sMEJBQVlMLG9EQUFhQSxDQU01QjtBQUVILFNBQVNNLGtCQUFrQixFQUFFQyxRQUFRLEVBQTJCO0lBQzlELE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRSxHQUFHUixxREFBUUEsQ0FBQ0UsNkNBQVNBLENBQUNPLEVBQUUsRUFBRVIsdUNBQUtBO0lBRWpFLHFCQUNFLDhEQUFDRSxVQUFVTyxRQUFRO1FBQUNDLE9BQU87WUFBRUMsTUFBTU47WUFBTUU7UUFBUTtrQkFDOUNELDBCQUFZLDhEQUFDVixpREFBTUE7Ozs7bUJBQU1ROzs7Ozs7QUFHaEM7QUFFQSxNQUFNUSxRQUFRLElBQU1kLGlEQUFVQSxDQUFDSTtBQUVLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL2NvbnRleHQvbWUudHN4PzEzYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCBSZWZldGNoT3B0aW9ucywgUmVmZXRjaFF1ZXJ5RmlsdGVycyB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgeyBnZXRNZSB9IGZyb20gXCIuLi9hcGlcIjtcclxuaW1wb3J0IHsgTWUsIFF1ZXJ5S2V5cyB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuY29uc3QgTWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7XHJcbiAgdXNlcjogTWU7XHJcbiAgcmVmZXRjaDogPFRQYWdlRGF0YT4oXHJcbiAgICBvcHRpb25zPzogKFJlZmV0Y2hPcHRpb25zICYgUmVmZXRjaFF1ZXJ5RmlsdGVyczxUUGFnZURhdGE+KSB8IHVuZGVmaW5lZFxyXG4gICkgPT4gYW55O1xyXG4gIC8vIEB0cy1pZ25vcmVcclxufT4obnVsbCk7XHJcblxyXG5mdW5jdGlvbiBNZUNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KFF1ZXJ5S2V5cy5tZSwgZ2V0TWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyOiBkYXRhLCByZWZldGNoIH19PlxyXG4gICAgICB7aXNMb2FkaW5nID8gPExvYWRlciAvPiA6IGNoaWxkcmVufVxyXG4gICAgPC9NZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlTWUgPSAoKSA9PiB1c2VDb250ZXh0KE1lQ29udGV4dCk7XHJcblxyXG5leHBvcnQgeyBNZUNvbnRleHRQcm92aWRlciwgdXNlTWUgfTsiXSwibmFtZXMiOlsiTG9hZGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VRdWVyeSIsImdldE1lIiwiUXVlcnlLZXlzIiwiTWVDb250ZXh0IiwiTWVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhdGEiLCJpc0xvYWRpbmciLCJyZWZldGNoIiwibWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlciIsInVzZU1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/me.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mantine/notifications */ \"@mantine/notifications\");\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mantine_notifications__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_me__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/me */ \"./src/context/me.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_me__WEBPACK_IMPORTED_MODULE_6__]);\n_context_me__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nfunction App(props) {\n    const { Component, pageProps } = props;\n    // Use the layout defined at the page level, if available\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Page title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.MantineProvider, {\n                withGlobalStyles: true,\n                withNormalizeCSS: true,\n                theme: {\n                    /** Put your mantine theme override here */ colorScheme: \"light\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_notifications__WEBPACK_IMPORTED_MODULE_5__.NotificationsProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n                        client: queryClient,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_me__WEBPACK_IMPORTED_MODULE_6__.MeContextProvider, {\n                            children: getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                    ...pageProps\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhadr\\\\Documents\\\\Fullstack2\\\\youtube-clone\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRUY7QUFDa0M7QUFDZjtBQUNlO0FBR2I7QUFFbEQsTUFBTU0sY0FBYyxJQUFJTCxvREFBV0E7QUFVcEIsU0FBU00sSUFBSUMsS0FBeUI7SUFDbkQsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUFHRjtJQUVqQyx5REFBeUQ7SUFDekQsTUFBTUcsWUFBWUYsVUFBVUUsU0FBUyxJQUFLLEVBQUNDLE9BQVNBLElBQUc7SUFFdkQscUJBQ0U7OzBCQUNFLDhEQUFDWixrREFBSUE7O2tDQUNILDhEQUFDYTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUlaLDhEQUFDYiwwREFBZUE7Z0JBQ2RjLGdCQUFnQjtnQkFDaEJDLGdCQUFnQjtnQkFDaEJDLE9BQU87b0JBQ0wseUNBQXlDLEdBQ3pDQyxhQUFhO2dCQUNmOzBCQUVBLDRFQUFDaEIseUVBQXFCQTs4QkFDcEIsNEVBQUNGLDREQUFtQkE7d0JBQUNtQixRQUFRZjtrQ0FDM0IsNEVBQUNELDBEQUFpQkE7c0NBQ2ZNLHdCQUNDLDhEQUFDVzswQ0FDQyw0RUFBQ2I7b0NBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgTWFudGluZVByb3ZpZGVyIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1Byb3ZpZGVyIH0gZnJvbSBcIkBtYW50aW5lL25vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZUNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L21lXCI7XHJcblxyXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xyXG5cclxudHlwZSBOZXh0UGFnZVdpdGhMYXlvdXQgPSBOZXh0UGFnZSAmIHtcclxuICBnZXRMYXlvdXQ/OiAocGFnZTogUmVhY3RFbGVtZW50KSA9PiBSZWFjdE5vZGU7XHJcbn07XHJcblxyXG50eXBlIEFwcFByb3BzV2l0aExheW91dCA9IEFwcFByb3BzICYge1xyXG4gIENvbXBvbmVudDogTmV4dFBhZ2VXaXRoTGF5b3V0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzOiBBcHBQcm9wc1dpdGhMYXlvdXQpIHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcclxuXHJcbiAgLy8gVXNlIHRoZSBsYXlvdXQgZGVmaW5lZCBhdCB0aGUgcGFnZSBsZXZlbCwgaWYgYXZhaWxhYmxlXHJcbiAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCA/PyAoKHBhZ2UpID0+IHBhZ2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBhZ2UgdGl0bGU8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxNYW50aW5lUHJvdmlkZXJcclxuICAgICAgICB3aXRoR2xvYmFsU3R5bGVzXHJcbiAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xyXG4gICAgICAgIHRoZW1lPXt7XHJcbiAgICAgICAgICAvKiogUHV0IHlvdXIgbWFudGluZSB0aGVtZSBvdmVycmlkZSBoZXJlICovXHJcbiAgICAgICAgICBjb2xvclNjaGVtZTogXCJsaWdodFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Tm90aWZpY2F0aW9uc1Byb3ZpZGVyPlxyXG4gICAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgICAgICAgIDxNZUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICB7Z2V0TGF5b3V0KFxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L01lQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICAgICAgIDwvTm90aWZpY2F0aW9uc1Byb3ZpZGVyPlxyXG4gICAgICA8L01hbnRpbmVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIk1hbnRpbmVQcm92aWRlciIsIk5vdGlmaWNhdGlvbnNQcm92aWRlciIsIk1lQ29udGV4dFByb3ZpZGVyIiwicXVlcnlDbGllbnQiLCJBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIndpdGhHbG9iYWxTdHlsZXMiLCJ3aXRoTm9ybWFsaXplQ1NTIiwidGhlbWUiLCJjb2xvclNjaGVtZSIsImNsaWVudCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QueryKeys: () => (/* binding */ QueryKeys)\n/* harmony export */ });\nvar QueryKeys;\n(function(QueryKeys) {\n    QueryKeys[\"me\"] = \"me\";\n    QueryKeys[\"videos\"] = \"videos\";\n})(QueryKeys || (QueryKeys = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHlwZXMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7VUFhY0E7OztHQUFBQSxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy90eXBlcy9pbmRleC50cz80NDE3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgVmlkZW8ge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICBvd25lcjogc3RyaW5nO1xyXG4gICAgcHVibGlzaGVkOiBib29sZWFuO1xyXG4gICAgdmlkZW9JZDogc3RyaW5nO1xyXG4gICAgY3JlYXRlZEF0OiBEYXRlO1xyXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xyXG4gICAgX192OiBudW1iZXI7XHJcbiAgICBleHRlbnNpb246IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZW51bSBRdWVyeUtleXMge1xyXG4gICAgbWUgPSBcIm1lXCIsXHJcbiAgICB2aWRlb3MgPSBcInZpZGVvc1wiLFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgaW50ZXJmYWNlIE1lIHtcclxuICAgIF9pZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgfSJdLCJuYW1lcyI6WyJRdWVyeUtleXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/types/index.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ "@mantine/notifications":
/*!*****************************************!*\
  !*** external "@mantine/notifications" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/notifications");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();