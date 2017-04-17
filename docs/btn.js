var btn = {
  props: [
    {
      name: 'disabled',
      type: 'Boolean',
      default: false,
      description: `按钮是否禁用`
    },
    {
      name: 'styles',
      type: 'String',
      default: 'button',
      description: `为按钮定义的样式`
    }
  ],
  slots: [
    {
      name: 'default',
      comment: '内容'
    }
  ],
  events: [
      {
          name: 'click',
          description: `点击事件`
      },

  ],
  examples: [
    {
      name: 'styles',
      text: `
        <btn :styles="'button is-large'" @click="onclick" :disabled="true">aaa</btn>
      `
    },
    {
      name: 'disabled',
      text: `
        <btn :styles="'button is-large'" @click="onclick" :disabled="true">aaa</btn>
      `
    }
  ]
}

export {btn}