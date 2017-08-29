webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(11)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(17),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(10)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(16),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalleEntradas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detalleEntradas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__detalleEntradas__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'maestroentradas',
  data: function () {
    return {
      entradasList: ["Entrada1", "Entrada2", "Entrada3"],
      seen: false
    };
  },
  components: {
    detalleEntradas: __WEBPACK_IMPORTED_MODULE_0__detalleEntradas___default.a
  },
  methods: {
    selectEntrada: function (entrada) {
      this.seen = true;
      this.$emit('selectEntrada', entrada);
    }
  }

});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detallePeliculas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detallePeliculas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__detallePeliculas__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'maestropeliculas',
  data: function () {
    return {
      peliculasList: ["El Padrino", "Casablanca", "Con la muerte en los talones"]
    };
  },
  components: {
    detallePeliculas: __WEBPACK_IMPORTED_MODULE_0__detallePeliculas___default.a
  },
  methods: {
    selectPelicula: function () {
      alert('has pulsado una pelicula');
    }
  }

});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import Hello from './components/Hello'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'detallepeliculas',
  data: function () {
    return {
      entrada: null
    };
  },
  methods: {
    setVisible: function () {
      this.seen = true;
    }
  },
  created() {
    let _this = this;
    this.$parent.$on('selectEntrada', entrada => {
      this.entrada = entrada;
    });
  }

});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import Hello from './components/Hello'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'detallePeliculas',
  data: function () {
    return {
      seen: false
    };
  }

});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MaestroEntradas__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MaestroEntradas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_MaestroEntradas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MaestroPeliculas__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MaestroPeliculas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_MaestroPeliculas__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#tab-1',

  components: {
    'maestroentradas': __WEBPACK_IMPORTED_MODULE_1__components_MaestroEntradas___default.a,
    'maestropeliculas': __WEBPACK_IMPORTED_MODULE_2__components_MaestroPeliculas___default.a
  }
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#tab-2',

  components: {
    'maestroentradas': __WEBPACK_IMPORTED_MODULE_1__components_MaestroEntradas___default.a,
    'maestropeliculas': __WEBPACK_IMPORTED_MODULE_2__components_MaestroPeliculas___default.a
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(12)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(18),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(9)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(15),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('form', [_c('legend', [_vm._v("Detalle Película")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "id": "textTitulo"
    }
  }, [_vm._v("Título: ")]), _vm._v(" "), _c('input', {
    attrs: {
      "id": "inputTitulo",
      "type": "text"
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "id": "textDirector"
    }
  }, [_vm._v("Director: ")]), _vm._v(" "), _c('input', {
    attrs: {
      "id": "inputDirector",
      "type": "text"
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "id": "textFecha"
    }
  }, [_vm._v("Fecha estreno: ")]), _vm._v(" "), _c('input', {
    attrs: {
      "id": "inputFecha",
      "type": "date"
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('button', {
    attrs: {
      "id": "buttonNuevo"
    }
  }, [_vm._v("Nuevo")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "buttonSave"
    }
  }, [_vm._v("Guardar")])])])
}]}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "peliculaList"
  }, [_c('ol', _vm._l((_vm.peliculasList), function(pelicula) {
    return _c('li', [_c('a', {
      on: {
        "href": function($event) {
          $event.preventDefault();
        },
        "click": function($event) {
          _vm.selectPelicula()
        }
      }
    }, [_vm._v("\n\t\t    " + _vm._s(pelicula) + "\n\t\t   ")])])
  }))]), _vm._v(" "), (_vm.seen) ? _c('detallePeliculas') : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "entradaList"
  }, [_c('ol', _vm._l((_vm.entradasList), function(entrada) {
    return _c('li', [_c('a', {
      on: {
        "href": function($event) {
          $event.preventDefault();
        },
        "click": function($event) {
          _vm.selectEntrada(entrada)
        }
      }
    }, [_vm._v("\n\t\t    " + _vm._s(entrada) + "\n\t\t   ")])])
  }))]), _vm._v(" "), (_vm.seen) ? _c('detalleEntradas') : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('form', [_c('legend', [_vm._v("Detalle Entradas")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "id": "textEntrada"
    }
  }, [_vm._v("Código entrada: ")]), _vm._v(" "), _c('input', {
    attrs: {
      "id": "inputEntrada",
      "type": "text"
    },
    domProps: {
      "value": _vm.entrada
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "id": "textFecha"
    }
  }, [_vm._v("Fecha: ")]), _vm._v(" "), _c('input', {
    attrs: {
      "id": "inputFechaEntrada",
      "type": "text"
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "id": "textImporte"
    }
  }, [_vm._v("Importe: ")]), _vm._v(" "), _c('input', {
    attrs: {
      "id": "inputImporteEntrada",
      "type": "date"
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('button', {
    attrs: {
      "id": "buttonNuevo"
    }
  }, [_vm._v("Nuevo")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "buttonSave"
    }
  }, [_vm._v("Guardar")])])])
},staticRenderFns: []}

/***/ })
],[8]);
//# sourceMappingURL=app.022a428472e84875588b.js.map