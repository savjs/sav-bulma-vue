var Notify = {
  props: [   
    {
      name: 'type',
      type: 'String',
      default: false,
      description: `主题颜色，可选值为default primary info success danger warning`
    },
    {
      name: 'title',
      type: 'String',
      default: false,
      description: `标题`
    },
    {
      name: 'content',
      type:  'String',
      default: false,
      description: `内容`
    },
    {
      name: 'duration',
      type:  'Number',
      default: 1,
      description: `倒计时关闭的秒数 单位秒`
    },
    {
      name: 'icon',
      type:  'Number',
      default: false,
      description: `图标`
    },
    {
      name: 'placement',
      type:  'String',
      default: 'top-right',
      description: `notify的位置,可选值top-right top-center top-left bottom-right bottom-center bottom-left`
    },
    {
      name: 'closable',
      type:  'Boolean',
      default: true,
      description: `是否可关闭`
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
      name: 'primaryNotify',
      text: `
        <btn :class="'btn is-large'"  :disabled="disabled || null" @click="primaryNotify">点击我</btn>
      `
    }
   
  ]
}

export {Notify}