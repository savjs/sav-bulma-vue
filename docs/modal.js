var modal = {
  props: [
    {
      name: 'title',
      type: 'String',
      default: '提示框',
      description: `为多选框设置样式和外观风格`
    },
    {
      name: 'show',
      type: 'Boolean',
      default: false,
      description: `是否显示弹框`
    },
    {
      name: 'ok-text',
      type: 'String',
      default: '确定',
      description: `确定按钮文字`
    },
    {
      name: 'cancel-text',
      type: 'String',
      default: '取消',
      description: `取消按钮文字`
    },
    {
      name: 'width',
      type: 'Number',
      default:500 ,
      description: ` 对话框宽度，单位 px。对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto`
    },
    {
      name: 'scrollable',
      type: 'Boolean',
      default: false,
      description: `是否可以滚动`
    }
  ],
  slots: [
    {
      name: 'default',
      description: '默认的插槽,弹框的body部分，支持html'
    },
    {
      name: 'header',
      description: '自定义页头，支持html'
    },
    {
      name: 'footer',
      description: '自定义页脚内容，支持html'
    },
  ],
  events: [
      {
          name: 'on-ok',
          description: `点击确定的回调`
      },
      {
          name: 'on-cancel',
          description: `点击取消的回调`
      },
      {
          name: 'close',
          description: `弹框关闭时触发事件`
      },
      {
          name: 'show',
          description: `弹框显示时触发事件`
      }
  ],
  methods: [
      {
          name: 'close',
          description: `关闭弹框`
      },
      {
          name: 'show',
          description: `显示弹框`
      }
  ],
  examples: [
    {
      name: 'value',
      file: 'examples/Modal.vue'
    }

  ]
}

export {modal}