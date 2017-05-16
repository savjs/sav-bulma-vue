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
  icon: 'fa ',
  gridrow: 'columns',
  gridcol: 'column',
  layout: 'layout',
  table: 'table'
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
    const childLength = this.$refs.badge.children.length;
    if (childLength === 1) {
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
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.value, expression: "value" }], staticClass: "input", attrs: { "type": _vm.type, "name": _vm.name, "placeholder": _vm.placeholder, "disabled": _vm.disabled || null, "maxlength": _vm.maxlength, "minlength": _vm.minlength, "readonly": _vm.readonly }, domProps: { "value": _vm.value }, on: { "blur": _vm.blur, "focus": _vm.focus, "input": function ($event) {
          if ($event.target.composing) {
            return;
          }_vm.value = $event.target.value;
        } } });
  },
  staticRenderFns: [],
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
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
    this.hasIconsLeft = this.$el.querySelector('.is-left') === null;
    this.hasIconsRight = this.$el.querySelector('.is-right') === null;
  },
  methods: {
    blur($event) {
      if (this.disabled || $event.target.disabled) {
        $event.preventDefault();
      }
      console.log(this.value);
      this.$emit('blur', this.value);
    },
    focus($event) {
      this.$emit('focus', this.value);
    }
  }
};

var SavSelect = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', { staticClass: "control" }, [_c('span', { staticClass: "select" }, [_c('select', { attrs: { "name": _vm.name, "v-model": _vm.value, "disabled": _vm.disabled, "readonly": _vm.readonly }, on: { "change": _vm.change } }, _vm._l(_vm.options, function (option, index) {
      return _c('option', { domProps: { "value": option.value, "selected": option.value == _vm.value } }, [_vm._v(_vm._s(option.text))]);
    }))])]);
  },
  staticRenderFns: [],
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
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
      default: { value: '0', text: '请选择' }
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
    change($event) {
      console.log($event);
      // let index = this.$el.querySelectorAll('select[name=' + this.name + ']').selectedIndex
      // console.log(index)
      console.log('----');
      this.$emit('change', this.value);
    }
  }
};

var SavMenu = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('nav', { staticClass: "nav has-shadow" }, [_c('div', { staticClass: "container" }, [_c('div', { staticClass: "nav-left" }, [_vm.logoInfo.imgSrc ? _c('a', { staticClass: "nav-item", attrs: { "href": _vm.logoInfo.href } }, [_c('img', { attrs: { "src": _vm.logoInfo.imgSrc, "alt": _vm.logoInfo.imgAlt } })]) : _vm._e(), _vm._v(" "), _vm._l(_vm.menus, function (item, index) {
      return _c('a', { class: { 'nav-item': true, 'is-tab': true, 'is-hidden-mobile': true, 'is-active': index == _vm.active }, attrs: { "href": item.href }, on: { "click": function ($event) {
            _vm.click(index);
          } } }, [_vm._v(_vm._s(item.text))]);
    })], 2), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', { staticClass: "nav-right nav-menu" }, _vm._l(_vm.menus, function (item, index) {
      return _c('a', { class: { 'nav-item': true, 'is-tab': true, 'is-hidden-tablet': true, 'is-active': item.active }, attrs: { "href": item.href }, on: { "click": function ($event) {
            _vm.click(index);
          } } }, [_vm._v(_vm._s(item.text))]);
    }))])]);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "nav-toggle" }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')]);
  }],
  props: {
    logoInfo: {
      type: Object,
      default: { href: '/', imgSrc: '', imgAlt: '' }
    },
    menus: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      active: 1
    };
  },
  created() {
    for (let i in this.menus) {
      if (this.menus[i].active) {
        this.active = i;
      }
    }
  },
  methods: {
    click(index) {
      this.active = index;
      this.$emit('click', index);
    }
  }
};

var SavTree = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('li', [_c('span', { on: { "click": _vm.toggle } }, [_vm.isFolder ? _c('i', { staticClass: "icon", class: [_vm.open ? 'folder-open' : 'folder'] }) : _vm._e(), _vm._v(" "), !_vm.isFolder ? _c('i', { staticClass: "icon file-text" }) : _vm._e(), _vm._v("\n        " + _vm._s(_vm.model.menuName) + "\n    ")]), _vm._v(" "), _vm.isFolder ? _c('ul', { directives: [{ name: "show", rawName: "v-show", value: _vm.open, expression: "open" }] }, _vm._l(_vm.model.children, function (item) {
      return _c('sav-tree', { attrs: { "model": item } });
    })) : _vm._e()]);
  },
  staticRenderFns: [],
  name: 'SavTree',
  props: ['model'],
  data() {
    return {
      open: false,
      isFolder: true
    };
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    }
  },
  created() {
    console.log(this.model);
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    }
  }
};

var SavNotify = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": _vm.transitionName } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isShow, expression: "isShow" }], staticClass: "notification alert", class: [_vm.typeClass, _vm.hasIcon] }, [_vm.closable ? _c('span', { staticClass: "close", on: { "click": _vm.handleClose } }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), _vm.iconClass ? _c('div', { staticClass: "wrap-icon" }, [_c('i', { class: ['fa', "fa-" + _vm.iconClass, _vm.faSpin] })]) : _vm._e(), _vm._v(" "), _vm.title ? _c('div', { staticClass: "title is-5" }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "notification-content", domProps: { "innerHTML": _vm._s(_vm.content) } })])]);
  },
  staticRenderFns: [],
  props: {
    type: {
      type: String,
      default: 'default'
    },
    title: {
      type: String
    },
    content: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    onClose: {
      type: Function,
      default() {}
    },
    duration: {
      type: Number,
      default: 45000000
    },
    placement: {
      type: String,
      default: 'top-right'
    },
    icon: {
      type: String
    },
    animated: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String
    }
  },

  data() {
    return {
      isShow: false,
      placementTransition: {
        'top-right': 'fadeRight',
        'top-center': 'fadeDown',
        'top-left': 'fadeLeft',
        'bottom-right': 'fadeRight',
        'bottom-center': 'fadeUp',
        'bottom-left': 'fadeLeft'
      }
    };
  },

  computed: {
    typeClass() {
      return this.type ? `is-${this.type}` : null;
    },
    hasIcon() {
      return this.iconClass ? 'has-icon' : null;
    },
    faSpin() {
      return this.animated ? 'fa-spin' : null;
    },
    iconClass() {
      if (this.icon) return this.icon;

      if (this.type === 'info') {
        return 'info-circle';
      } else if (this.type === 'success') {
        return 'check-circle';
      } else if (this.type === 'warning') {
        return 'exclamation-triangle';
      } else if (this.type === 'danger') {
        return 'times-circle';
      } else if (this.type === 'loading') {
        this.type = 'info';
        this.animated = true;
        return 'spinner';
      }
      return this.icon;
    },
    transitionName() {
      if (this.transition) return this.transition;
      return this.placementTransition[this.placement];
    }
  },

  methods: {
    handleClose() {
      this.isShow = false;
      setTimeout(() => {
        this.$destroy();
        this.$el.remove();
      }, 100);
    },
    close() {
      clearTimeout(this.timer);
      this.isShow = false;
      this.$destroy();
      this.$el.remove();
    }
  },

  beforeMount() {
    let parent;
    parent = document.querySelector(`.notifications.${this.placement}`);

    if (!parent) {
      parent = document.createElement('div');
      parent.classList.add('notifications', this.placement);
      document.body.appendChild(parent);
    }
    parent.appendChild(this.$el);
  },

  mounted() {
    this.isShow = true;
    this.timer = setTimeout(() => this.close(), this.duration);
  }
};

let Vue$1;

function open(propsData) {
  const NotifyComponent = Vue$1.extend(SavNotify);
  return new NotifyComponent({
    el: document.createElement('div'),
    propsData
  });
}

function installNotify(vue) {
  Vue$1 = vue;
  Vue$1.prototype.$notify = handler;
}

let handler = {
  open(params) {
    const defaultParam = { direction: 'right', duration: 4500 };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  },

  info(params) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'info' };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  },

  warning(params) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'warning' };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  },

  success(params) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'success' };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  },

  danger(params) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'danger' };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  }

};

var Layout = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.theme.layout] }, [_vm.showHeader ? _c('section', { staticClass: "hero" }, [_c('div', { staticClass: "container" }, [_vm._t("header")], 2)]) : _vm._e(), _vm._v(" "), _c('section', { staticClass: "section" }, [_c('div', { staticClass: "container" }, [_vm._t("default")], 2)]), _vm._v(" "), _vm.showFooter ? _c('footer', { staticClass: "footer" }, [_c('div', { staticClass: "container" }, [_vm._t("footer")], 2)]) : _vm._e()]);
  },
  staticRenderFns: [],
  data() {
    return {
      theme
    };
  },
  computed: {
    showHeader: function () {
      return this.$slots.header;
    },
    showFooter: function () {
      return this.$slots.footer;
    }
  }
};

var GridRow = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.theme.gridrow, _vm.type] }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      theme
    };
  }
};

var GridCol = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.theme.gridcol, _vm.col && 'is-' + _vm.col, _vm.offset && 'is-offset-' + _vm.offset, _vm.type] }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    col: {
      type: Number,
      default: 12
    },
    offset: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      theme
    };
  }
};

var SavTable = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('table', { class: [_vm.theme.table] }, [!_vm.isHideHeader && _vm.columns.length ? _c('thead', [_c('tr', _vm._l(_vm.columns, function (col) {
      return _c('th', [_vm._v(_vm._s(col.title))]);
    }))]) : _vm._e(), _vm._v(" "), _c('tbody', [_vm._t("default", _vm._l(_vm.datas, function (data) {
      return _c('tr', _vm._l(_vm.columns, function (col) {
        return _c('td', [_vm._v(_vm._s(data[col.key]))]);
      }));
    }))], 2)]);
  },
  staticRenderFns: [],
  props: {
    columns: {
      type: Array,
      default: []
    },
    datas: {
      type: Array,
      default: []
    },
    isHideHeader: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { theme };
  }
};

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
  SavSelect,
  SavMenu,
  SavTree,
  Layout,
  GridRow,
  GridCol,
  SavTable
};

function install(Vue$$1) {
  Object.keys(components).forEach(it => {
    Vue$$1.component(it, components[it]);
  });
  installNotify(Vue$$1);
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
});

var App = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "section" }, [_c('div', { staticClass: "container" }, [_c('div', { staticClass: "columns" }, [_c('div', { staticClass: "column is-2" }, [_c('aside', { staticClass: "menu" }, [_c('p', { staticClass: "menu-label" }, [_vm._v("General")]), _vm._v(" "), _c('ul', { staticClass: "menu-list" }, [_c('li', [_c('router-link', { attrs: { "to": "/btn" } }, [_vm._v("btn")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/checkbox" } }, [_vm._v("checkbox")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/radio" } }, [_vm._v("radio")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/radiogroup" } }, [_vm._v("radiogroup")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/modal" } }, [_vm._v("Modal")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/BtnGroup" } }, [_vm._v("BtnGroup")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/Icon" } }, [_vm._v("Icon")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/Badge" } }, [_vm._v("Badge")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/SavInput" } }, [_vm._v("Input")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/SavSelect" } }, [_vm._v("Select")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/SavMenu" } }, [_vm._v("SavMenu")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/SavTree" } }, [_vm._v("SavTree")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/SavNotify" } }, [_vm._v("SavNotify")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/layout" } }, [_vm._v("Layout")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/grid" } }, [_vm._v("Grid")])], 1), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "to": "/savtable" } }, [_vm._v("SavTable")])], 1)])])]), _vm._v(" "), _c('div', { staticClass: "column" }, [_c('router-view')], 1)])])]);
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
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { staticClass: "field" }, [_c('label', { staticClass: "label" }, [_vm._v("带前后slot")]), _vm._v(" "), _c('sav-input', [_c('span', { staticClass: "icon is-small is-left", slot: "leftIcon" }, [_c('i', { staticClass: "fa fa-user" })]), _vm._v(" "), _c('span', { staticClass: "icon is-small is-right", slot: "rightIcon" }, [_c('i', { staticClass: "fa fa-check" })])])], 1), _vm._v(" "), _c('div', { staticClass: "field" }, [_c('label', { staticClass: "label" }, [_vm._v("指定placeholder")]), _vm._v(" "), _c('sav-input', { attrs: { "placeholder": "请输入用户名" } })], 1), _vm._v(" "), _c('div', { staticClass: "field" }, [_c('label', { staticClass: "label" }, [_vm._v("指定placeholder,并禁用")]), _vm._v(" "), _c('sav-input', { attrs: { "placeholder": "姓名", "disabled": "true" } })], 1), _vm._v(" "), _c('div', { staticClass: "field" }, [_c('label', { staticClass: "label", domProps: { "textContent": _vm._s(_vm.demo4) } }), _vm._v(" "), _c('sav-input', { on: { "focus": _vm.focus } })], 1), _vm._v(" "), _c('div', { staticClass: "field" }, [_c('label', { staticClass: "label", domProps: { "textContent": _vm._s(_vm.demo5) } }), _vm._v(" "), _c('sav-input', { on: { "blur": _vm.blur } })], 1)]);
  },
  staticRenderFns: [],
  data() {
    return {
      demo4: 'focus事件',
      demo4Value: 'focus事件',
      demo5: 'blur事件',
      demo5Value: 'blur事件'
    };
  },
  methods: {
    focus(value) {
      this.demo4 = 'focus事件后input中的value为' + value;
      this.demo4Value = value;
    },
    blur(value) {
      this.demo5 = 'blur事件后input中的value为' + value;
      this.demo5Value = +value;
    }
  }
};

var SavSelect$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { staticClass: "field" }, [_c('label', { staticClass: "label" }, [_vm._v("指定默认选项")]), _vm._v(" "), _c('sav-select', { attrs: { "value": "3", "name": "grade", "options": [{ value: '3', text: 'one' }, { value: '4', text: 'two' }], "placeholder": { value: '0', text: '请选择' } } })], 1), _vm._v(" "), _c('div', { staticClass: "field" }, [_c('sav-select', { attrs: { "value": "0", "name": "grade", "options": [{ value: '3', text: 'one' }, { value: '4', text: 'two' }] } })], 1), _vm._v(" "), _c('div', { staticClass: "field" }, [_c('label', { staticClass: "label" }, [_vm._v("指定placeholder")]), _vm._v(" "), _c('sav-select', { attrs: { "value": "0", "name": "grade", "options": [{ value: '3', text: 'one' }, { value: '4', text: 'two' }], "placeholder": { value: '0', text: '请进行选择' } } })], 1), _vm._v(" "), _c('div', { staticClass: "field" }, [_c('label', { staticClass: "label" }, [_vm._v("change事件")]), _vm._v(" "), _c('sav-select', { attrs: { "value": "0", "name": "grade", "options": [{ value: '3', text: 'one' }, { value: '4', text: 'two' }], "placeholder": { value: '0', text: '请进行选择' } }, on: { "change": _vm.change } })], 1)]);
  },
  staticRenderFns: [],
  methods: {
    change(value) {
      console.log("111");
      console.log(value);
    }
  }
};

var SavMenu$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('sav-menu', { attrs: { "logoInfo": { href: '/', imgSrc: 'http://s-www.hfjy.com/pc/images/logo.png', imgAlt: 'Sav-vue' }, "menus": [{ href: 'http://vip.hfjy.com', text: '广告站点' }, { href: 'http://i.hfjy.com', text: '服务中心' }, { href: 'http://www.hfjy.com', text: '海风官网', active: true }] }, on: { "click": _vm.click } })], 1);
  },
  staticRenderFns: [],
  data() {
    return {};
  },
  methods: {
    click(index) {
      console.log(index);
    }
  }
};

var SavTree$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "tree-menu" }, _vm._l(_vm.theModel, function (menuItem) {
      return _c('ul', [_c('sav-tree', { attrs: { "model": menuItem } })], 1);
    }));
  },
  staticRenderFns: [],
  data() {
    return {
      theModel: [{
        "id": "1",
        "menuName": "基础管理",
        "menuCode": "10",
        "children": [{
          "menuName": "用户管理",
          "menuCode": "11"
        }, {
          "menuName": "角色管理",
          "menuCode": "12",
          "children": [{
            "menuName": "管理员",
            "menuCode": "121"
          }, {
            "menuName": "CEO",
            "menuCode": "122"
          }, {
            "menuName": "CFO",
            "menuCode": "123"
          }, {
            "menuName": "COO",
            "menuCode": "124"
          }, {
            "menuName": "普通人",
            "menuCode": "124"
          }]
        }, {
          "menuName": "权限管理",
          "menuCode": "13"
        }]
      }, {
        "id": "2",
        "menuName": "商品管理",
        "menuCode": ""
      }, {
        "id": "3",
        "menuName": "订单管理",
        "menuCode": "30",
        "children": [{
          "menuName": "订单列表",
          "menuCode": "31"
        }, {
          "menuName": "退货列表",
          "menuCode": "32",
          "children": []
        }]
      }, {
        "id": "4",
        "menuName": "商家管理",
        "menuCode": "",
        "children": []
      }]
    };
  },
  methods: {
    click(index) {
      console.log(index);
    }
  }
};

var SavNotify$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('btn', { staticClass: "is-primary", nativeOn: { "click": function ($event) {
          _vm.basicNotify($event);
        } } }, [_vm._v(" Primary")])], 1);
  },
  staticRenderFns: [],
  methods: {
    basicNotify() {
      this.$notify.open({ content: '您点击了我！' });
    }
  }
};

var layout = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('layout', [_c('div', { staticClass: "body" }, [_c('div', { staticClass: "container" }, [_c('h1', { staticClass: "title" }, [_vm._v("\r\n                Hero title\r\n              ")]), _vm._v(" "), _c('h2', { staticClass: "subtitle" }, [_vm._v("\r\n                Hero subtitle\r\n              ")])])])])], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      console.log('click');
    }
  }
};

var grid = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('GridRow', [_c('GridCol', [_c('code', [_vm._v("123")])])], 1)], 1);
  },
  staticRenderFns: [],
  methods: {}
};

var savtable = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('SavTable', { attrs: { "columns": _vm.columns, "datas": _vm.datas } }, _vm._l(_vm.datas, function (data) {
      return _c('tr', _vm._l(_vm.columns, function (col) {
        return _c('td', [_vm._v(_vm._s(data[col.key]))]);
      }));
    }))], 1);
  },
  staticRenderFns: [],
  data: function () {
    return {
      columns: [{ title: 'Name', key: 'name' }, { title: 'Age', key: 'age' }],
      datas: [{ name: '张三', age: 10 }, { name: '李四', age: 10 }, { name: '王五', age: 10 }]
    };
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
}, {
  path: '/SavMenu',
  component: SavMenu$1
}, {
  path: '/SavTree',
  component: SavTree$1
}, {
  path: '/SavNotify',
  component: SavNotify$1
}, {
  path: '/layout',
  component: layout
}, {
  path: '/grid',
  component: grid
}, {
  path: '/savtable',
  component: savtable
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