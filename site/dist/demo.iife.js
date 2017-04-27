(function (VueRouter,Vue) {
'use strict';

VueRouter = 'default' in VueRouter ? VueRouter['default'] : VueRouter;
Vue = 'default' in Vue ? Vue['default'] : Vue;

var App = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "section" }, [_c('div', { staticClass: "container" }, [_c('div', { staticClass: "columns" }, [_c('div', { staticClass: "column is-2" }, [_c('aside', { staticClass: "menu" }, [_c('p', { staticClass: "menu-label" }, [_vm._v("General")]), _vm._v(" "), _c('ul', { staticClass: "menu-list" }, [_c('li', [_c('router-link', { attrs: { "to": "/btn" } }, [_vm._v("btn")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/checkbox" } }, [_vm._v("checkbox")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/radio" } }, [_vm._v("radio")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/radiogroup" } }, [_vm._v("radiogroup")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/modal" } }, [_vm._v("Modal")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/BtnGroup" } }, [_vm._v("BtnGroup")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/Icon" } }, [_vm._v("Icon")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/Badge" } }, [_vm._v("Badge")])], 1)])])]), _vm._v(" "), _c('div', { staticClass: "column" }, [_c('router-view')], 1)])])]);
  },
  staticRenderFns: [],
  data() {
    return {};
  }
};

var Index = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._v("\n " + _vm._s(_vm.$route.params.component) + "\n  "), _c('btn', { nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("常规按钮")]), _vm._v(" "), _c('btn', { staticClass: "is-large", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("大按钮")])], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var routes = [{
  path: '/:component',
  component: Index
}];

Vue.use(VueRouter);

let router = new VueRouter({
  routes
});

let vm = new Vue(Object.assign({
  router
}, App));

vm.$mount('#app');

}(VueRouter,Vue));
