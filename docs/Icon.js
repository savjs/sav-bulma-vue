var Icon = {
  props: [
    {
      name: 'type',
      type: 'String',
      default: '',
      description: `图标的名称`
    },
    {
      name: 'color',
      type: 'String',
      default: '',
      description: `图标的颜色`
    },
    {
      name: 'size',
      type: 'Number | String',
      default: '',
      description: `图标的大小`
    }
  ],
  examples: [
    {
      name: 'type',
      text: `
      <Icon :styles="'checkmark'"></Icon>      
      `
    }
  ]
}

export {Icon}