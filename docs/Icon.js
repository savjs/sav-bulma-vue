var Icon = {
  props: [   
    {
      name: 'styles',
      type: String,
      size: [Number, String],
      color: String     
      default: 'Icon'
    }
  ]
  examples: [
    {
      name: 'styles',
      text: `
      <Icon :styles="'checkmark'"></Icon>      
      `
    }
  ]
}

export {Icon}