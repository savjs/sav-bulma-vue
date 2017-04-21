var btn = {
  props: [   
    {
      name: 'type',
      type: 'String',
      default: false,
      description: `按钮类型 可选值为is-primary is-info is-success is-warning is-danger或者不设置`
    },
    {
      name: 'to',
      type: 'Boolean',
      default: false,
      description: `超链接`
    },
    {
      name: 'size',
      type:  'String',
      default: 'button',
      description: `按钮大小`
    },
    {
      name: 'disabled',
      type:  'Boolean',
      default: false,
      description: `设置按钮为禁用状态`
    },
    {
      name: 'loading',
      type:  'Boolean',
      default: false,
      description: `设置按钮为加载中状态`
    },
    {
      name: 'icon',
      type:  'String',
      default: '',
      description: `设置按钮的图标类型`
    }
  ],
  slots: [
    {
      name: 'default',
      comment: '内容'
    }
  ],
  examples: [
    {
      name: 'type',
      text: `
        <btn :class="'btn is-large'"  :disabled="disabled || null" >aaa</btn>
      `
    },
    {
      name: 'disabled',
      text: `
        <btn :class="'button is-large'" :disabled="disabled || null">aaa</btn>
      `
    }
  ]
}

export {btn}