(function (VueRouter,Vue) {
'use strict';

VueRouter = 'default' in VueRouter ? VueRouter['default'] : VueRouter;
Vue = 'default' in Vue ? Vue['default'] : Vue;

let theme = {
  btn: 'button',
  checkbox: 'checkbox',
  radio: 'radio',
  radiogroup: 'radio-group',
  modal: 'modal',
  BtnGroup: 'btn-group',
  badge: 'badge',
  icon: 'fa '
};

var Btn = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.to ? _c('router-link', { class: [_vm.theme.btn], attrs: { "to": _vm.to, "disabled": _vm.disabled || null }, on: { "click": _vm.handleClick } }, [_vm._t("default")], 2) : _c('button', { class: [_vm.theme.btn], attrs: { "disabled": _vm.disabled || null }, on: { "click": _vm.handleClick } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    to: {
      default: false
    },
    disabled: {
      default: false
    }
  },
  data() {
    return { theme };
  },
  methods: {
    handleClick($event) {
      if (this.disabled || $event.target.disabled) {
        $event.preventDefault();
      }
    }
  }
};

var Checkbox = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { class: [_vm.theme.checkbox] }, [_c('span', { class: _vm.checkboxClasses }, [_c('span', { class: _vm.innerClasses }), _vm._v(" "), _c('input', { attrs: { "type": "checkbox", "disabled": _vm.disabled || null }, domProps: { "checked": _vm.currentValue }, on: { "change": _vm.handleChange } })]), _vm._v(" "), _c('span', { staticClass: "check-text" }, [_vm._t("default")], 2)]);
  },
  staticRenderFns: [],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkboxClasses() {
      return [`sav-checkbox`, {
        [`sav-checkbox-checked`]: this.currentValue,
        [`sav-checkbox-disabled`]: this.disabled
      }];
    },
    innerClasses() {
      return `sav-checkbox-inner`;
    }
  },
  data() {
    return {
      theme,
      currentValue: this.value
    };
  },
  watch: {
    value() {
      this.updateModel();
    }
  },
  methods: {
    handleChange($event) {
      if (this.disabled || $event.target.disabled) {
        $event.preventDefault();
        return;
      }

      const checked = $event.target.checked;
      this.currentValue = checked;
      this.$emit('input', checked);
    },
    updateModel() {
      this.currentValue = this.value;
    }
  }
};

var Radio = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { class: [_vm.theme.radio] }, [_c('span', { class: _vm.radioClasses }, [_c('span', { class: _vm.innerClasses }), _vm._v(" "), _c('input', { attrs: { "type": "radio", "disabled": _vm.disabled || null, "name": _vm.name }, domProps: { "checked": _vm.currentValue, "value": _vm.trueValue }, on: { "change": _vm.handleChange } })]), _vm._v(" "), _c('span', { staticClass: "radio-text" }, [_vm._t("default")], 2)]);
  },
  staticRenderFns: [],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    trueValue: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    radioClasses() {
      return [`sav-radio`, {
        [`sav-radio-checked`]: this.currentValue,
        [`sav-radio-disabled`]: this.disabled
      }];
    },
    innerClasses() {
      return `sav-radio-inner`;
    }
  },
  data() {
    return {
      theme,
      currentValue: this.value
    };
  },
  watch: {
    value() {
      this.updateModel();
    }
  },
  methods: {
    handleChange($event) {
      if (this.disabled || $event.target.disabled) {
        $event.preventDefault();
        return;
      }

      const checked = $event.target.checked;
      this.currentValue = checked;
      this.$emit('input', this.trueValue);
      this.$emit('change', this.trueValue);
    },
    updateModel() {
      this.currentValue = this.value;
    }
  }
};

var Radiogroup = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "radio-group" }, _vm._l(_vm.options, function (opt) {
      return _c('label', { class: [_vm.theme.radiogroup] }, [_c('radio', { attrs: { "name": _vm.name, "trueValue": opt.value, "value": opt.value == _vm.curValue, "checked": opt.value == _vm.curValue, "disabled": opt.disabled }, on: { "change": _vm.handleChange } }, [_vm._v(_vm._s(opt.text))])], 1);
    }));
  },
  staticRenderFns: [],
  props: {
    options: {
      type: Array,
      default: []
    },
    value: {
      default: ''
    },
    name: {
      default: ''
    }
  },
  data() {
    return {
      theme,
      curValue: this.value
    };
  },
  methods: {
    handleChange(value) {
      this.curValue = value;
      this.$emit('input', value);
      this.$emit('change', value);
    }
  }
};

var Modal = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.wrapClasses }, [_c('div', { staticClass: "modal-background", on: { "click": _vm.mask } }), _vm._v(" "), _c('div', { staticClass: "modal-card" }, [_c('header', { staticClass: "modal-card-head" }, [_vm._t("header", [_c('p', { staticClass: "modal-card-title" }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('button', { staticClass: "delete", on: { "click": _vm.close } })])], 2), _vm._v(" "), _c('section', { staticClass: "modal-card-body" }, [_vm._t("default")], 2), _vm._v(" "), _c('footer', { staticClass: "modal-card-foot" }, [_vm._t("footer", [_c('a', { staticClass: "button is-success", on: { "click": _vm.ok } }, [_vm._v(_vm._s(_vm.okText))]), _vm._v(" "), _c('a', { staticClass: "button", on: { "click": _vm.cancel } }, [_vm._v(_vm._s(_vm.cancelText))])])], 2)])]);
  },
  staticRenderFns: [],
  props: {
    title: {
      type: 'String',
      default: '提示框'
    },
    show: {
      type: 'Boolean',
      default: false
    },
    okText: {
      type: 'String',
      default: '确定'
    },
    cancelText: {
      type: 'String',
      default: '取消'
    },
    width: {
      type: 'Number',
      default: 500
    },
    scrollable: {
      type: 'Boolean',
      default: false
    }
  },
  watch: {
    show(val) {
      this.isShow = val;
    }
  },
  computed: {
    wrapClasses() {
      return [theme.modal, { 'is-active': this.isShow }];
    }
  },
  data() {
    return {
      theme,
      isShow: this.show,
      modal1: false
    };
  },
  mounted() {
    document.addEventListener('keydown', this.EscClose);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.EscClose);
  },
  methods: {
    open() {
      this._show();
    },
    _show() {
      this.isShow = true;
      this.$emit('show');
    },
    close() {
      this.isShow = false;
      this.$emit('close');
    },
    ok() {
      this.isShow = false;
      this.$emit('onok');
    },
    cancel() {
      this.close();
      this.$emit('oncancel');
    },
    mask() {
      this.close();
    },
    handleWrapClick(event) {
      // const className = event.target.getAttribute('class');
      // if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.mask();
    },
    EscClose(e) {
      if (this.isShow) {
        if (e.keyCode === 27) {
          this.close();
        }
      }
    }
  }
};

var BtnGroup = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.theme.btngroup] }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],

  data() {
    return { theme };
  },
  methods: {}
};

/**
 * Badge 徽标数
 * @param dot {Object}  小红点
 * @param count  {Number} 显示的数字
 */
var Badge = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.dot ? _c('span', { class: [_vm.theme.badge], attrs: { "dot": _vm.dot } }, [_vm._t("default"), _vm._v(" "), _c('sup', { directives: [{ name: "show", rawName: "v-show", value: _vm.badge, expression: "badge" }], staticClass: "badge-dot" })], 2) : _c('span', { class: [_vm.theme.badge] }, [_vm._t("default"), _vm._v(" "), _vm.count ? _c('sup', { directives: [{ name: "show", rawName: "v-show", value: _vm.badge, expression: "badge" }], staticClass: "badge-count" }, [_vm._v(_vm._s(_vm.finalCount))]) : _vm._e()], 2);
  },
  staticRenderFns: [],
  name: 'Badge',
  props: {
    count: [Number, String], // 显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏
    dot: {
      type: Boolean, // 不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0
      default: false
    },
    overflowCount: { // 展示封顶的数字值
      type: [Number, String],
      default: 99
    }
  },
  computed: {
    finalCount() {
      return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count;
    },
    badge() {
      let status = false;
      if (this.count) {
        status = !(parseInt(this.count) === 0);
      }
      if (this.dot) {
        status = true;
        if (this.count) {
          if (parseInt(this.count) === 0) {
            status = false;
          }
        }
      }
      return status;
    }
  },
  data() {
    return {
      theme,
      alone: false
    };
  },
  mounted() {
    const child_length = this.$refs.badge.children.length;
    if (child_length === 1) {
      this.alone = true;
    }
  }
};

var Icon = {
    render: function () {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { class: [_vm.theme.icon] });
    },
    staticRenderFns: [],
    props: {
        icon: {
            type: String,
            default: ''
        }
    },
    data() {
        return { theme };
    },
    methods: {}
};

let lang = {
  InputPlaceholder: '请输入',
  SelectPlaceholder: '请选择'
};

var SavInput = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "field" }, [_c('p', { class: { 'control': true, 'has-icons-left': _vm.hasIconsLeft, 'has-icons-right': _vm.hasIconsRight } }, [_c('input', { staticClass: "input", attrs: { "type": _vm.type, "name": _vm.name, "placeholder": _vm.placeholder, "disabled": _vm.disabled || null, "maxlength": _vm.maxlength, "minlength": _vm.minlength, "readonly": _vm.readonly }, domProps: { "value": _vm.value }, on: { "click": _vm.handlClick } }), _vm._v(" "), _vm._t("leftIcon"), _vm._v(" "), _vm._t("rightIcon")], 2)]);
  },
  staticRenderFns: [],
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: lang.InputPlaceholder
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 36
    },
    minlength: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      lang,
      hasIconsLeft: false,
      hasIconsRight: false
    };
  },
  computed: {},
  mounted() {
    this.hasIconsLeft = this.$el.querySelector(".is-left") === null ? false : true;
    this.hasIconsRight = this.$el.querySelector(".is-right") === null ? false : true;
  },
  methods: {
    handleClick($event) {
      if (this.disabled || $event.target.disabled) {
        $event.preventDefault();
      }
      this.$emit('value', this.value);
    }
  }
};

var SavSelect = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "field" }, [_c('p', { staticClass: "control" }, [_c('span', { staticClass: "select" }, [_c('select', { attrs: { "name": _vm.name, "v-model": _vm.value, "disabled": _vm.disabled, "readonly": _vm.readonly }, on: { "change": _vm.handleChange } }, _vm._l(_vm.options, function (option, index) {
      return _c('option', { domProps: { "value": option.value, "selected": option.value == _vm.value } }, [_vm._v(_vm._s(option.text))]);
    }))])])]);
  },
  staticRenderFns: [],
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: Object,
      default: { value: "0", text: '请选择' }
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {
    this.options.unshift(this.placeholder);
  },
  methods: {
    handleChange() {
      this.$emit('value', this.value);
    }
  }
};

function install(Vue$$1) {
  Object.keys(components).forEach(it => {
    Vue$$1.component(it, components[it]);
  });
}

let components = {
  Btn,
  Checkbox,
  Radio,
  Radiogroup,
  Modal,
  Icon,
  BtnGroup,
  Badge,
  SavInput,
  SavSelect
};

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
});

var App = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "section" }, [_c('div', { staticClass: "container" }, [_c('div', { staticClass: "columns" }, [_c('div', { staticClass: "column is-2" }, [_c('aside', { staticClass: "menu" }, [_c('p', { staticClass: "menu-label" }, [_vm._v("General")]), _vm._v(" "), _c('ul', { staticClass: "menu-list" }, [_c('li', [_c('router-link', { attrs: { "to": "/btn" } }, [_vm._v("btn")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/checkbox" } }, [_vm._v("checkbox")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/radio" } }, [_vm._v("radio")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/radiogroup" } }, [_vm._v("radiogroup")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/modal" } }, [_vm._v("Modal")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/BtnGroup" } }, [_vm._v("BtnGroup")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/Icon" } }, [_vm._v("Icon")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/Badge" } }, [_vm._v("Badge")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/SavInput" } }, [_vm._v("Input")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/SavSelect" } }, [_vm._v("Select")])], 1)])])]), _vm._v(" "), _c('div', { staticClass: "column" }, [_c('router-view')], 1)])])]);
  },
  staticRenderFns: []

};

var btn = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('btn', { nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("常规按钮")]), _vm._v(" "), _c('btn', { staticClass: "is-primary", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("Primary")]), _vm._v(" "), _c('btn', { staticClass: "is-info", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("info")]), _vm._v(" "), _c('btn', { staticClass: "is-success", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("success")]), _vm._v(" "), _c('btn', { staticClass: "is-warning", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("warning")]), _vm._v(" "), _c('btn', { staticClass: "is-danger", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("danger")]), _vm._v(" "), _c('btn', { staticClass: "is-primary is-loading", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("loading")]), _vm._v(" "), _c('btn', { staticClass: "is-primary is-disabled", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("disabled")])], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var checkbox = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('checkbox', [_vm._v("xxxx")])], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var radio = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('radio', [_vm._v("yyyy")])], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var radiogroup = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('radiogroup', { attrs: { "options": [{ text: 'aa', value: 1 }, { text: 'bb', value: 2 }], "value": 2, "name": "ccc" }, on: { "input": _vm.click } })], 1);
  },
  staticRenderFns: [],
  methods: {
    click(v) {
      console.log('click', v);
    }
  }
};

var modal = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('modal', { attrs: { "show": true } }, [_vm._v("xxxx")]), _vm._v(" "), _c('btn')], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var BtnGroup$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('Btn-group', { staticClass: "control has-addons" }, [_c('btn', { nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("常规按钮")]), _vm._v(" "), _c('btn', { nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("常规按钮")]), _vm._v(" "), _c('btn', { staticClass: "is-success", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("常规按钮")])], 1)], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var Badge$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('Badge', { attrs: { "count": "3" } }, [_c('a', { staticClass: "demo-badge" })]), _vm._v(" "), _c('Badge', { attrs: { "dot": "" } }, [_c('span', { staticClass: "icon" }, [_c('Icon', { staticClass: "fa-github" })], 1)])], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var Icon$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('btn', { staticClass: "is-primary", nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_c('span', { staticClass: "icon" }, [_c('Icon', { staticClass: "fa-github" })], 1), _vm._v(" "), _c('span', [_vm._v("GitHub")])]);
  },
  staticRenderFns: [],
  stub: 1
};

var SavInput$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('sav-input', [_c('span', { staticClass: "icon is-small is-left", staticStyle: { "top": "8px" }, slot: "leftIcon" }, [_c('i', { staticClass: "fa fa-user" })]), _vm._v(" "), _c('span', { staticClass: "icon is-small is-right", staticStyle: { "top": "8px" }, slot: "rightIcon" }, [_c('i', { staticClass: "fa fa-check" })])]), _vm._v(" "), _c('div', { staticStyle: { "width": "200px", "margin-bottom": "15px" } }, [_c('sav-input', [_c('span', { staticClass: "icon is-small is-left", staticStyle: { "top": "8px" }, slot: "leftIcon" }, [_c('i', { staticClass: "fa fa-user" })])])], 1), _vm._v(" "), _c('sav-input', { attrs: { "placeholder": "请输入用户名" } }), _vm._v(" "), _c('sav-input', { attrs: { "placeholder": "姓名", "disabled": "true" } })], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var SavSelect$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('sav-select', { attrs: { "value": "3", "name": "grade", "options": [{ value: '3', text: 'one' }, { value: '4', text: 'two' }], "placeholder": { value: '0', text: '请选择' } } }), _vm._v(" "), _c('sav-select', { attrs: { "value": "0", "name": "grade", "options": [{ value: '3', text: 'one' }, { value: '4', text: 'two' }], "placeholder": { value: '0', text: '请选择' } } }), _vm._v(" "), _c('sav-select', { attrs: { "value": "0", "name": "grade", "options": [{ value: '3', text: 'one' }, { value: '4', text: 'two' }], "placeholder": { value: '0', text: '请进行选择' } } })], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var routes = [{
  path: '/btn',
  component: btn
}, {
  path: '/checkbox',
  component: checkbox
}, {
  path: '/radio',
  component: radio
}, {
  path: '/radiogroup',
  component: radiogroup
}, {
  path: '/modal',
  component: modal
}, {
  path: '/BtnGroup',
  component: BtnGroup$1
}, {
  path: '/Badge',
  component: Badge$1
}, {
  path: '/Icon',
  component: Icon$1
}, {
  path: '/SavInput',
  component: SavInput$1
}, {
  path: '/SavSelect',
  component: SavSelect$1
}];

Vue.use(VueRouter);

Vue.use(install);

let router = new VueRouter({
  routes
});

let vm = new Vue(Object.assign({
  router
}, App));

vm.$mount('#app');

}(VueRouter,Vue));
