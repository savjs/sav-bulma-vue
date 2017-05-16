'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

let Vue;

function open(propsData) {
  const NotifyComponent = Vue.extend(SavNotify);
  return new NotifyComponent({
    el: document.createElement('div'),
    propsData
  });
}

function installNotify(vue) {
  Vue = vue;
  Vue.prototype.$notify = handler;
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

function install(Vue) {
  Object.keys(components).forEach(it => {
    Vue.component(it, components[it]);
  });
  installNotify(Vue);
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
});

exports.install = install;
