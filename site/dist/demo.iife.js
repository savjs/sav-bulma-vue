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
      return _c('a', { class: { 'nav-item': true, 'is-tab': true, 'is-hidden-tablet': true, 'is-active': item.active }, attrs: { "href": item.href }, domProps: { "innerHTML": _vm._s(item.text) }, on: { "click": function ($event) {
            _vm.click(index);
          } } });
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
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: [_vm.theme.layout] }, [_vm.showHeader ? _c('section', { staticClass: "hero" }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _c('section', { staticClass: "section" }, [_c('div', { staticClass: "container" }, [_vm._t("default")], 2)]), _vm._v(" "), _vm.showFooter ? _c('footer', { staticClass: "footer" }, [_c('div', { staticClass: "container" }, [_vm._t("footer")], 2)]) : _vm._e()]);
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
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('layout', [_c('section', { slot: "header" }, [_c('sav-menu', { attrs: { "logoInfo": { href: '#/', imgSrc: 'http://s-www.hfjy.com/pc/images/logo.png', imgAlt: 'Sav-vue' }, "menus": [{ href: '#/', text: '文档', active: true }, { href: './demo', text: 'demo' }, { href: 'https://github.com/savjs/sav-bulma-vue', text: 'github' }] } })], 1), _vm._v(" "), _c('router-view')], 1);
  },
  staticRenderFns: [],
  data() {
    return {};
  }
};

var Badge$1 = {
  props: [{
    name: 'count',
    type: 'Number | String',
    default: false,
    description: `显示的数字`
  }, {
    name: 'overflow-count',
    type: 'Boolean',
    default: 99,
    description: `封顶的数字值`
  }, {
    name: 'dot',
    type: 'Boolean',
    default: false,
    description: `只有一个小红点，如需隐藏 dot ，需要设置count为 0`
  }, {
    name: 'class-name',
    type: 'String',
    default: false,
    description: `自定义的class名称dot 模式下无效`
  }],
  slots: [{
    name: 'default',
    comment: '内容'
  }],
  examples: [{
    name: 'count',
    text: `
        <Badge count="3">
            <a href="#" class="demo-badge"></a>
        </Badge>
      `
  }, {
    name: 'overflow-count',
    text: `
       <Badge count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
        </Badge>
      `
  }, {
    name: 'overflow-count',
    text: `
       <Badge count="1000" overflow-count="999">
         <Icon type="fa-address-book" size="26"></Icon>
        </Badge>
      `
  }]
};

var btn = {
  props: [{
    name: 'type',
    type: 'String',
    default: false,
    description: `按钮类型 可选值为is-primary is-info is-success is-warning is-danger或者不设置`
  }, {
    name: 'to',
    type: 'Boolean',
    default: false,
    description: `超链接`
  }, {
    name: 'size',
    type: 'String',
    default: 'button',
    description: `按钮大小`
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: false,
    description: `设置按钮为禁用状态`
  }, {
    name: 'loading',
    type: 'Boolean',
    default: false,
    description: `设置按钮为加载中状态`
  }, {
    name: 'icon',
    type: 'String',
    default: '',
    description: `设置按钮的图标类型`
  }],
  slots: [{
    name: 'default',
    comment: '内容'
  }],
  examples: [{
    name: 'type',
    text: `
        <btn :class="'btn is-large'"  :disabled="disabled || null" >aaa</btn>
      `
  }, {
    name: 'disabled',
    text: `
        <btn :class="'button is-large'" :disabled="disabled || null">aaa</btn>
      `
  }]
};

var ButtonGroup = {
  props: [{
    name: 'type',
    type: 'String',
    default: 'btn',
    description: `用于按钮组`
  }],
  slots: [{
    name: 'default',
    comment: '内容'
  }],
  examples: [{
    name: 'type',
    text: `
        <div class="control ">
            <btn :class="'btn is-large'"  :disabled="disabled || null" >aaa</btn>
        </div>
        
      `
  }]
};

var checkbox = {
  props: [{
    name: 'value',
    type: 'Boolean',
    default: false,
    description: `是否checked状态，可以使用 v-model 绑定数据`
  }, {
    name: 'name',
    type: 'String',
    default: '',
    description: `相当于 input[type=checkbox] 元素的 name 属性`
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: false,
    description: `是否禁用当前项`
  }],
  slots: [{
    name: 'default',
    description: '默认的插槽,多选框的label，支持html'
  }],
  events: [{
    name: 'change',
    description: `在选项状态发生改变时触发，同 input[type=checkbox] 元素的change事件一致，传入 value 属性值`
  }],
  examples: [{
    name: 'value',
    file: 'examples/CheckValue.vue'
  }, {
    name: 'disabled',
    text: `
        <div class="check-group">
                <check-box  v-model="check3" :disabled="true">气球</check-box>
                <check-box  v-model="check4" :disabled="false">热气球</check-box>
        </div>
      `
  }]
};

var Icon$1 = {
  props: [{
    name: 'type',
    type: 'String',
    default: '',
    description: `图标的名称`
  }, {
    name: 'color',
    type: 'String',
    default: '',
    description: `图标的颜色`
  }, {
    name: 'size',
    type: 'Number | String',
    default: '',
    description: `图标的大小`
  }],
  examples: [{
    name: 'type',
    text: `
      <Icon :styles="'checkmark'"></Icon>      
      `
  }]
};

var input = {
    props: [{
        name: 'type',
        type: 'String',
        default: 'text',
        description: `html input 的type类型`
    }, {
        name: 'value',
        type: 'String|Number',
        default: '',
        description: `这里根据type具体的类型定的`
    }, {
        name: 'placeholder',
        type: 'String',
        default: '请输入',
        description: `input 中的placeholder作用`
    }, {
        name: 'disabled',
        type: 'Boolean',
        default: false,
        description: `input是否禁用模式`
    }, {
        name: 'readonly',
        type: 'Boolean',
        default: false,
        description: `设置输入框为只读`
    }, {
        name: 'maxlength',
        type: 'Number',
        default: 36,
        description: `最大输入长度`
    }, {
        name: 'minlength',
        type: 'Number',
        default: 0,
        description: `最小输入长度`
    }, {
        name: 'icon',
        type: 'String',
        default: '',
        description: `输入框尾部图标`
    }],
    slots: [{
        name: 'prependContent',
        comment: '前置内容，可以是icon也可以是文字'
    }, {
        name: 'appendContent',
        comment: '后置内容，可以是icon也可以是文字'
    }],
    events: [{
        name: 'on-nter',
        description: `按下回车键时触发`
    }, {
        name: 'on-click',
        description: `设置 icon 属性后，点击图标时触发`
    }, {
        name: 'on-change',
        description: `数据改变时触发`
    }, {
        name: 'on-focus',
        description: `输入框聚焦时触发`
    }, {
        name: 'on-blur',
        description: `输入框失去焦点时触发`
    }],
    examples: [{
        name: 'type',
        text: `
            <sav-input :type="text"></sav-input>
            `
    }, {
        name: 'value',
        text: `
            <sav-input :value="标题"></sav-input>
            `
    }, {
        name: 'placeholder',
        text: `
            <sav-input :placeholder="请输入"></sav-input>
            `
    }, {
        name: 'disabled',
        text: `
            <sav-input :disabled="true"></sav-input>
            `
    }, {
        name: 'readonly',
        text: `
            <sav-input :readonly="true"></sav-input>
            `
    }, {
        name: 'maxlength',
        text: `
            <sav-input :maxlength="20"></sav-input>
            `
    },
    /*slot*/
    {
        name: 'prependContent',
        text: `
            <sav-input>
                <span slot="prependContent">hello@:</span>
                <span slot="appendContent">@</span>
            </sav-input>
            `
    }]
};

var modal = {
  props: [{
    name: 'title',
    type: 'String',
    default: '提示框',
    description: `弹框抬头标题`
  }, {
    name: 'show',
    type: 'Boolean',
    default: false,
    description: `是否显示弹框`
  }, {
    name: 'ok-text',
    type: 'String',
    default: '确定',
    description: `确定按钮文字`
  }, {
    name: 'cancel-text',
    type: 'String',
    default: '取消',
    description: `取消按钮文字`
  }, {
    name: 'width',
    type: 'Number',
    default: 500,
    description: ` 对话框宽度，单位 px。对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto`
  }, {
    name: 'scrollable',
    type: 'Boolean',
    default: false,
    description: `是否可以滚动`
  }],
  slots: [{
    name: 'default',
    description: '默认的插槽,弹框的body部分，支持html'
  }, {
    name: 'header',
    description: '自定义页头，支持html'
  }, {
    name: 'footer',
    description: '自定义页脚内容，支持html'
  }],
  events: [{
    name: 'onok',
    description: `点击确定的回调`
  }, {
    name: 'oncancel',
    description: `点击取消的回调`
  }, {
    name: 'close',
    description: `弹框关闭时触发事件`
  }, {
    name: 'show',
    description: `弹框显示时触发事件`
  }],
  methods: [{
    name: 'close',
    description: `关闭弹框`
  }, {
    name: 'open',
    description: `显示弹框`
  }],
  examples: [{
    name: 'value',
    file: 'examples/Modal.vue'
  }]
};

var radio = {
  props: [{
    name: 'value',
    type: 'Boolean',
    default: false,
    description: `是否checked状态，可以使用 v-model 绑定数据`
  }, {
    name: 'name',
    type: 'String',
    default: '',
    description: `相当于 input[type=radio] 元素的 name 属性`
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: false,
    description: `是否禁用当前项`
  }],
  slots: [{
    name: 'default',
    description: '默认的插槽,单选框的label，支持html'
  }],
  events: [{
    name: 'change',
    description: `在选项状态发生改变时触发，同 input[type=radio] 元素的change事件一致，传入 value 属性值`
  }],
  examples: [{
    name: 'value',
    file: 'examples/Radio.vue'
  }, {
    name: 'disabled',
    text: `
        <div class="radio-group">
                <radio  v-model="check3" :disabled="true">气球</radio>
                <radio  v-model="check4" :disabled="false">热气球</radio>
        </div>
      `
  }]
};

var radiogroup = {
  props: [{
    name: 'value',
    type: 'Boolean',
    default: false,
    description: `是否checked状态，可以使用 v-model 绑定数据`
  }, {
    name: 'name',
    type: 'String',
    default: '',
    description: `相当于 input[type=radio] 元素的 name 属性`
  }, {
    name: 'options',
    type: 'Array',
    default: [],
    description: `列表选项(详细)`
  }],
  events: [{
    name: 'change',
    description: `在选项状态发生改变时触发，同 input[type=radio] 元素的change事件一致，传入 value 属性值`
  }],
  examples: [{
    name: 'value',
    file: 'examples/RadioGroup.vue'
  }]
};

var select = {
    props: [{
        name: 'value',
        type: 'String | Number | Array',
        default: 'one',
        description: `指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array,这里定义的可以做为此组件的默认值`
    }, {
        name: 'option',
        type: 'Array',
        default: [],
        description: `可供选择的option对象[{text:'足球',value:1}]`
    }, {
        name: 'multiple',
        type: 'Boolean',
        default: 'false',
        description: `这里根据type具体的类型定的`
    }, {
        name: 'placeholder',
        type: 'String',
        default: '请输入',
        description: `select 中的placeholder作用`
    }, {
        name: 'disabled',
        type: 'Boolean',
        default: false,
        description: `select是否禁用模式`
    }, {
        name: 'readonly',
        type: 'Boolean',
        default: false,
        description: `设置输入框为只读`
    }],
    events: [{
        name: 'on-change',
        description: `数据改变时触发`
    }],
    examples: []
};

var gridrow = {
  props: [{
    name: 'type',
    type: 'String',
    default: '',
    description: `自定义类名`
  }],
  slots: [{
    name: 'default',
    description: '默认的插槽,支持html'
  }],
  events: [],
  examples: [{
    name: 'gridrow',
    text: `
        <gridrow>
          <gridcol>
            <code>123</code>
          </gridcol>
        </gridrow>
      `
  }]
};

var gridcol = {
  props: [{
    name: 'col',
    type: 'Number',
    default: 12,
    description: `宽度，默认12`
  }, {
    name: 'offset',
    type: 'Number',
    default: 0,
    description: `偏移，默认不偏移`
  }, {
    name: 'type',
    type: 'String',
    default: '',
    description: `自定义类名`
  }],
  slots: [{
    name: 'default',
    description: '默认的插槽,支持html'
  }],
  events: [],
  examples: [{
    name: 'gridcol',
    text: `
        <gridcol>
          <code>123</code>
        </gridcol>
      `
  }]
};

var layout = {
  props: [{
    name: 'description',
    type: 'String',
    default: '',
    description: `布局组件`
  }],
  slots: [{
    name: 'default',
    description: '默认的插槽,布局主体部分，支持html'
  }, {
    name: 'header',
    description: '布局头部，支持html'
  }, {
    name: 'footer',
    description: '布局底部，支持html'
  }],
  events: [],
  examples: [{
    name: 'layout',
    text: `
        <layout>
          <div class="body">
            <div class="container">
              <h1 class="title">
                Hero title
              </h1>
              <h2 class="subtitle">
                Hero subtitle
              </h2>
            </div>
          </div>
        </layout>
      `
  }]
};

var savTable = {
  props: [{
    name: 'columns',
    type: 'Array',
    default: [],
    description: `表头数组`
  }, {
    name: 'datas',
    type: 'Array',
    default: [],
    description: `表格要显示的数据`
  }, {
    name: 'isHideHeader',
    type: 'Boolean',
    default: false,
    description: `是否显示表头`
  }],
  slots: [{
    name: 'default',
    comment: '可以自定义表格体内容'
  }],
  examples: [{
    name: 'savTable',
    text: `
        <template>
          <div>
            <savtable :columns="columns" :datas="datas">
              <tr v-for="data in datas" >
                <td v-for="col in columns">{{data[col.key]}}</td>
              </tr>
            </savtable>
          </div>
        </template>

        <script type="text/javascript">
          export default {
            data: function () {
              return {
                columns: [
                  { title:'Name', key: 'name' },
                  { title:'Age', key: 'age' },
                ],
                datas: [
                  { name: '张三', age: 10 },
                  { name: '李四', age: 10 },
                  { name: '王五', age: 10 }
                ]
              };
            }
          }
        </script>
      `
  }]
};

var Notify = {
  props: [{
    name: 'type',
    type: 'String',
    default: false,
    description: `主题颜色，可选值为default primary info success danger warning`
  }, {
    name: 'title',
    type: 'String',
    default: false,
    description: `标题`
  }, {
    name: 'content',
    type: 'String',
    default: false,
    description: `内容`
  }, {
    name: 'duration',
    type: 'Number',
    default: 1,
    description: `倒计时关闭的秒数 单位秒`
  }, {
    name: 'icon',
    type: 'Number',
    default: false,
    description: `图标`
  }, {
    name: 'placement',
    type: 'String',
    default: 'top-right',
    description: `notify的位置,可选值top-right top-center top-left bottom-right bottom-center bottom-left`
  }, {
    name: 'closable',
    type: 'Boolean',
    default: true,
    description: `是否可关闭`
  }],
  slots: [{
    name: 'default',
    comment: '内容'
  }],
  examples: [{
    name: 'primaryNotify',
    text: `
        <btn :class="'btn is-large'"  :disabled="disabled || null" @click="primaryNotify">点击我</btn>
      `
  }]
};

var menu = {
    props: [{
        name: 'mode',
        type: 'String',
        default: 'vertical',
        description: `菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）`
    }, {
        name: 'active-name',
        type: 'String | Number',
        default: '',
        description: `激活菜单的 name 值`
    }, {
        name: 'open-names',
        type: 'Array',
        default: [],
        description: `展开的 Submenu 的 name 集合`
    }, {
        name: 'accordion',
        type: 'Boolean',
        default: false,
        description: `是否开启手风琴模式，开启后每次至多展开一个子菜单`
    }],
    events: [{
        name: 'on-select',
        description: `选择菜单（Menu-item）时触发`
    }, {
        name: 'on-open-change',
        description: `当 展开/收起子菜单时触发`
    }],
    examples: []
};

var tree = {
    props: [{
        name: 'data',
        type: 'Array',
        default: [],
        description: `可嵌套的节点属性的数组，生成 tree 的数据`
    }, {
        name: 'multiple',
        type: 'Boolean',
        default: false,
        description: `是否支持多选`
    }, {
        name: 'show-checkbox',
        type: 'Boolean',
        default: [],
        description: `是否显示多选框`
    }],
    events: [{
        name: 'on-select-change',
        description: `点击树节点时触发`
    }, {
        name: 'on-check-change',
        description: `点击复选框时触发`
    }, {
        name: 'on-toggle-expand',
        description: `展开和收起子列表时触发`
    }],
    methods: [{
        name: 'getCheckedNodes',
        description: '获取被勾选的节点'
    }, {
        name: 'getSelectedNodes',
        description: '获取被选中的节点'
    }],
    examples: []
};



var data = Object.freeze({
	badge: Badge$1,
	btn: btn,
	btngroup: ButtonGroup,
	checkbox: checkbox,
	icon: Icon$1,
	input: input,
	modal: modal,
	radio: radio,
	radiogroup: radiogroup,
	select: select,
	gridrow: gridrow,
	gridcol: gridcol,
	layout: layout,
	savTable: savTable,
	Notify: Notify,
	menu: menu,
	tree: tree
});

var btn$1 = {
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

var checkbox$1 = {
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

var radio$1 = {
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

var radiogroup$1 = {
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

var modal$1 = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('modal', { ref: "themodal" }, [_vm._v("xxxx")]), _vm._v(" "), _c('btn', { nativeOn: { "click": function ($event) {
          _vm.click($event);
        } } }, [_vm._v("显示弹框")])], 1);
  },
  staticRenderFns: [],
  methods: {
    click() {
      this.$refs.themodal.open();
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

var Badge$2 = {
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

var Icon$2 = {
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

var layout$1 = {
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



var comps = Object.freeze({
	badge: Badge$2,
	btn: btn$1,
	btngroup: BtnGroup$1,
	checkbox: checkbox$1,
	icon: Icon$2,
	input: SavInput$1,
	modal: modal$1,
	radio: radio$1,
	radiogroup: radiogroup$1,
	select: SavSelect$1,
	gridrow: grid,
	gridcol: grid,
	layout: layout$1,
	savTable: savtable,
	Notify: SavNotify$1,
	menu: SavMenu$1,
	tree: SavTree$1
});

var Index = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { staticClass: "section is-sav-section-theme" }, [_c('div', { staticClass: "container is-sav-container-theme" }, [_c('GridRow', [_c('GridCol', { staticClass: "is-sav-column is-sav-border-right", attrs: { "col": 2 } }, [_c('aside', { staticClass: "list-group is-sav-side-nav" }, [_c('a', { staticClass: "list-group-item", attrs: { "href": "#/" } }, [_vm._v("更新日志")]), _vm._v(_vm._s(_vm.compList.length) + "\r\n      "), _c('a', { staticClass: "list-group-item", attrs: { "href": "#/customize" } }, [_vm._v("基础组件")]), _vm._v(" "), _c('div', { staticClass: "menu is-sav-menu" }, [_c('p', { staticClass: "menu-label" }, [_vm._v("\r\n          Basic\r\n        ")]), _vm._v(" "), _c('ul', { staticClass: "menu-list is-sav-menu-list" }, _vm._l(_vm.compList, function (v, k) {
      return _c('li', [_c('router-link', { class: { 'is-sav-menu-is-active': _vm.$route.params.component == k }, attrs: { "to": '/' + k } }, [_vm._v(_vm._s(k))])], 1);
    }))])])]), _vm._v(" "), _vm.$route.params.component in _vm.compList ? _c('GridCol', { staticClass: "is-sav-column markdown", attrs: { "col": 10 } }, [_c('section', { staticClass: "wrapper-content" }, [_c('h1', [_vm._v(_vm._s(_vm.$route.params.component))]), _vm._v(" "), _c('p', [_vm._v("\r\n        代码示例\r\n      ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('GridRow', { staticClass: "example is-sav-columns" }, [_c('GridCol', { attrs: { "col": 6 } }, [_c('div', { staticClass: "example-case" }, [_c('div', [_c(_vm.comps[this.$route.params.component], { tag: "component" })], 1)]), _vm._v(" "), _c('header', { staticClass: "example-header" }, [_c('span', [_vm._v("\r\n                " + _vm._s(_vm.compList[_vm.$route.params.component].props[0].name) + "\r\n          "), _c('a', { attrs: { "href": "#按钮类型" } }, [_vm._v("#")])])]), _vm._v(" "), _c('div', { staticClass: "example-desc" }, [_c('p', [_vm._v("\r\n              " + _vm._s(_vm.compList[_vm.$route.params.component].props[0].description) + "\r\n            ")])])]), _vm._v(" "), _c('div', { staticClass: "example-split" }), _vm._v(" "), _c('GridCol', { attrs: { "col": 6 } }, [_c('code', [_vm._v("\r\n            " + _vm._s(_vm.compList[_vm.$route.params.component].examples[0] ? _vm.compList[_vm.$route.params.component].examples[0].text : '') + "\r\n          ")])])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('h1', { staticClass: "title" }, [_vm._v("API")]), _vm._v(" "), _c('div', { staticClass: "tabs" }, [_c('ul', [_c('li', { class: { 'is-active is-sav-tabs-is-active': _vm.activeItem === 1 } }, [_c('a', { on: { "click": function ($event) {
          _vm.activeItem = 1;
        } } }, [_vm._v("PROPS")])]), _vm._v(" "), _c('li', { class: { 'is-active is-sav-tabs-is-active': _vm.activeItem === 2 } }, [_c('a', { on: { "click": function ($event) {
          _vm.activeItem = 2;
        } } }, [_vm._v("SLOTS")])]), _vm._v(" "), _c('li', { class: { 'is-active is-sav-tabs-is-active': _vm.activeItem === 3 } }, [_c('a', { on: { "click": function ($event) {
          _vm.activeItem = 3;
        } } }, [_vm._v("EVENTS")])])])]), _vm._v(" "), _vm.p && _vm.p.datas ? _c('SavTable', { directives: [{ name: "show", rawName: "v-show", value: _vm.activeItem === 1, expression: "activeItem === 1" }], attrs: { "columns": _vm.p.columns, "datas": _vm.p.datas } }) : _vm._e(), _vm._v(" "), _vm.s && _vm.s.datas ? _c('SavTable', { directives: [{ name: "show", rawName: "v-show", value: _vm.activeItem === 2, expression: "activeItem === 2" }], attrs: { "columns": _vm.s.columns, "datas": _vm.s.datas } }) : _vm._e(), _vm._v(" "), _vm.e && _vm.e.datas ? _c('SavTable', { directives: [{ name: "show", rawName: "v-show", value: _vm.activeItem === 3, expression: "activeItem === 3" }], attrs: { "columns": _vm.e.columns, "datas": _vm.e.datas } }) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), !(_vm.$route.params.component in _vm.compList) ? _c('div', [_c('header', { staticClass: "example-header" }, [_c('span', [_vm._v("\r\n                sav-bulma-vue组件\r\n          "), _c('a', { attrs: { "href": "#按钮类型" } }, [_vm._v("#")])])]), _vm._v(" "), _c('div', { staticClass: "example-desc" }, [_c('p', [_vm._v("\r\n              sav-bulma-vue组件是一款基于savjs,bulma和Vuejs的前端UI组件库，致力于提供一整套高质量前后端视觉解决方案，提高设计，开发的效率。由海风前端ued团队倾情出品，感谢以下同事的付出：大鹏，晓飞，会会，叶子，鹿鹿。此版本为beta版，更多功能敬请期待...\r\n            ")])])]) : _vm._e()], 1)], 1)]);
  },
  staticRenderFns: [],
  data() {
    return {
      curComp: this.$route.params.component,
      compList: data,
      comps: comps,
      activeItem: 1,
      p: {
        columns: [{ title: '属性', key: 'name' }, { title: '类型', key: 'type' }, { title: '默认值', key: 'default' }, { title: '说明', key: 'description' }],
        datas: data[this.$route.params.component] && data[this.$route.params.component].props || []
      },
      s: {
        columns: [{ title: '属性', key: 'name' }, { title: '说明', key: 'description' }],
        datas: data[this.$route.params.component] && data[this.$route.params.component].slots || []
      },
      e: {
        columns: [{ title: '属性', key: 'name' }, { title: '说明', key: 'description' }],
        datas: data[this.$route.params.component] && data[this.$route.params.component].events || []
      }
    };
  },
  watch: {},
  methods: {
    click() {
      console.log('click');
    }
  },
  mounted() {
    console.log('click2');

    this.currentView = comps[this.$route.params.component];
  }
};

var routes = [{
  path: '/:component?',
  component: Index
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
