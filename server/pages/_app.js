"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
const Container_namespaceObject = require("react-bootstrap/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
const Nav_namespaceObject = require("react-bootstrap/Nav");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx







function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "开源市集"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
                bg: "dark",
                variant: "dark",
                fixed: "top",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Brand, {
                            href: "/",
                            children: "开源市集"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                            className: "me-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                    href: "/about",
                                    children: "关于"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                    href: "/history",
                                    children: "历史"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                    href: "/code-of-conduct",
                                    children: "行为规范"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                    href: "/join-us",
                                    children: "参与"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-5 pt-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    }));
};


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(953));
module.exports = __webpack_exports__;

})();