(function (VueRouter,Vue) {
'use strict';

VueRouter = 'default' in VueRouter ? VueRouter['default'] : VueRouter;
Vue = 'default' in Vue ? Vue['default'] : Vue;

var App = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { staticClass: "is-sav-theme" }, [_vm._m(0), _vm._v(" "), _c('router-view')], 1);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { staticClass: "hero is-large" }, [_c('div', { staticClass: "hero-head " }, [_c('header', { staticClass: "nav is-sav-nav" }, [_c('div', { staticClass: "container" }, [_c('div', { staticClass: "nav-left" }, [_c('a', { staticClass: "nav-item is-sav-nav-img" })]), _vm._v(" "), _c('span', { staticClass: "nav-toggle" }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')]), _vm._v(" "), _c('div', { staticClass: "nav-right nav-menu is-sav-nav-menu" }, [_c('a', { staticClass: "nav-item is-sav-nav-item is-tab is-hidden-mobile is-sav-item-active" }, [_vm._v("\r\n              文档\r\n      ")]), _vm._v(" "), _c('a', { staticClass: "nav-item is-sav-nav-item is-tab is-hidden-mobile" }, [_vm._v("\r\n              demo\r\n      ")]), _vm._v(" "), _c('a', { staticClass: "nav-item", attrs: { "href": "https://github.com/savjs/sav-bulma-vue" } }, [_c('span', { staticClass: "icon" }, [_c('i', { staticClass: "fa fa-github" })])])])])])])]);
  }],
  data() {
    return {};
  }
};

var Badge = {
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

var Icon = {
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



var data = Object.freeze({
	badge: Badge,
	btn: btn,
	btngroup: ButtonGroup,
	checkbox: checkbox,
	icon: Icon,
	input: input,
	modal: modal,
	radio: radio,
	radiogroup: radiogroup,
	select: select
});

var Index = {
  render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { staticClass: "section is-sav-section-theme" }, [_c('div', { staticClass: "container is-sav-container-theme" }, [_c('div', { staticClass: "columns is-sav-columns" }, [_c('div', { staticClass: "column is-2 is-sav-column is-sav-border-right" }, [_c('aside', { staticClass: "list-group is-sav-side-nav" }, [_c('a', { staticClass: "list-group-item", attrs: { "href": "#/" } }, [_vm._v("更新日志")]), _vm._v(_vm._s(_vm.compList.length) + "\r\n      "), _c('a', { staticClass: "list-group-item", attrs: { "href": "#/customize" } }, [_vm._v("基础组件")]), _vm._v(" "), _c('div', { staticClass: "menu is-sav-menu" }, [_c('p', { staticClass: "menu-label" }, [_vm._v("\r\n          Basic\r\n        ")]), _vm._v(" "), _c('ul', { staticClass: "menu-list is-sav-menu-list" }, _vm._l(_vm.compList, function (v, k) {
      return _c('li', [_c('router-link', { class: { 'is-sav-menu-is-active': _vm.$route.params.component == k }, attrs: { "to": '/' + k } }, [_vm._v(_vm._s(k))])], 1);
    }))])])]), _vm._v(" "), _vm.$route.params.component in _vm.compList ? _c('div', { staticClass: "column is-sav-column is-10 markdown" }, [_c('section', { staticClass: "wrapper-content" }, [_c('h1', [_vm._v(_vm._s(_vm.$route.params.component))]), _vm._v(" "), _c('p', [_vm._v("\r\n        代码示例\r\n      ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', { staticClass: "columns example is-sav-columns" }, [_c('div', { staticClass: "column is-6 " }, [_c('div', { staticClass: "example-case" }, [_c('div', [_c('button', { directives: [{ name: "show", rawName: "v-show", value: _vm.$route.params.component == 'btn', expression: "$route.params.component == 'btn'" }], staticClass: "button is-primary is-sav-is-primary" }, [_c('span', [_vm._v("Primary")])])])]), _vm._v(" "), _c('header', { staticClass: "example-header" }, [_c('span', [_vm._v("\r\n                " + _vm._s(_vm.compList[_vm.$route.params.component].props[0].name) + "\r\n          "), _c('a', { attrs: { "href": "#按钮类型" } }, [_vm._v("#")])])]), _vm._v(" "), _c('div', { staticClass: "example-desc" }, [_c('p', [_vm._v("\r\n              " + _vm._s(_vm.compList[_vm.$route.params.component].props[0].description) + "\r\n            ")])])]), _vm._v(" "), _c('div', { staticClass: "example-split" }), _vm._v(" "), _c('div', { staticClass: "column is-6 " }, [_c('code', [_vm._v("\r\n            " + _vm._s(_vm.compList[_vm.$route.params.component].examples[0] ? _vm.compList[_vm.$route.params.component].examples[0].text : '') + "\r\n          ")])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h1', { staticClass: "title" }, [_vm._v("API")]), _vm._v(" "), _c('div', { staticClass: "tabs" }, [_c('ul', [_c('li', { class: { 'is-active is-sav-tabs-is-active': _vm.activeItem === 1 } }, [_c('a', { on: { "click": function ($event) {
          _vm.activeItem = 1;
        } } }, [_vm._v("PROPS")])]), _vm._v(" "), _c('li', { class: { 'is-active is-sav-tabs-is-active': _vm.activeItem === 2 } }, [_c('a', { on: { "click": function ($event) {
          _vm.activeItem = 2;
        } } }, [_vm._v("SLOTS")])]), _vm._v(" "), _c('li', { class: { 'is-active is-sav-tabs-is-active': _vm.activeItem === 3 } }, [_c('a', { on: { "click": function ($event) {
          _vm.activeItem = 3;
        } } }, [_vm._v("EVENTS")])])])]), _vm._v(" "), _c('table', { directives: [{ name: "show", rawName: "v-show", value: _vm.activeItem === 1, expression: "activeItem === 1" }], staticClass: "table is-bordered " }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l(_vm.compList[_vm.$route.params.component].props, function (v) {
      return _c('tr', _vm._l(v, function (vv) {
        return _c('td', [_vm._v("\r\n          " + _vm._s(vv) + "\r\n        ")]);
      }));
    }))]), _vm._v(" "), _c('table', { directives: [{ name: "show", rawName: "v-show", value: _vm.activeItem === 2, expression: "activeItem === 2" }], staticClass: "table is-bordered " }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l(_vm.compList[_vm.$route.params.component].slots, function (v) {
      return _c('tr', _vm._l(v, function (vv) {
        return _c('td', [_vm._v("\r\n          " + _vm._s(vv) + "\r\n        ")]);
      }));
    }))]), _vm._v(" "), _c('table', { directives: [{ name: "show", rawName: "v-show", value: _vm.activeItem === 3, expression: "activeItem === 3" }], staticClass: "table is-bordered " }, [_vm._m(2), _vm._v(" "), _c('tbody', _vm._l(_vm.compList[_vm.$route.params.component].events, function (v) {
      return _c('tr', _vm._l(v, function (vv) {
        return _c('td', [_vm._v("\r\n          " + _vm._s(vv) + "\r\n        ")]);
      }));
    }))])])]) : _vm._e(), _vm._v(" "), !(_vm.$route.params.component in _vm.compList) ? _c('div', [_vm._m(3), _vm._v(" "), _vm._m(4)]) : _vm._e()])])]);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('thead', [_c('tr', [_c('th', [_vm._v("\r\n          属性\r\n        ")]), _vm._v(" "), _c('th', [_vm._v("\r\n          类型\r\n        ")]), _vm._v(" "), _c('th', [_vm._v("\r\n          默认值\r\n        ")]), _vm._v(" "), _c('th', [_vm._v("\r\n          说明\r\n        ")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('thead', [_c('tr', [_c('th', [_vm._v("\r\n          属性\r\n        ")]), _vm._v(" "), _c('th', [_vm._v("\r\n          说明\r\n        ")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('thead', [_c('tr', [_c('th', [_vm._v("\r\n          属性\r\n        ")]), _vm._v(" "), _c('th', [_vm._v("\r\n          说明\r\n        ")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('header', { staticClass: "example-header" }, [_c('span', [_vm._v("\r\n                sav-bulma-vue组件\r\n          "), _c('a', { attrs: { "href": "#按钮类型" } }, [_vm._v("#")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "example-desc" }, [_c('p', [_vm._v("\r\n              sav-bulma-vue组件是一款基于savjs,bulma和Vuejs的前端UI组件库，致力于提供一整套高质量前后端视觉解决方案，提高设计，开发的效率。由海风前端ued团队倾情出品，感谢以下同事的付出：大鹏，晓飞，会会，叶子，鹿鹿。此版本为beta版，更多功能敬请期待...\r\n            ")])]);
  }],
  data() {
    return {
      compList: data,
      activeItem: 1
    };
  },
  methods: {
    click() {
      console.log('click');
    }
  }
};

var routes = [{
  path: '/:component?',
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
