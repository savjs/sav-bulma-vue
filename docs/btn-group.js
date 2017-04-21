var ButtonGroup = {
  props: [
    {
      name: 'type',
      type: 'String' ,
      default: 'btn',
      description: `用于按钮组` 
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
        <div class="control ">
            <btn :class="'btn is-large'"  :disabled="disabled || null" >aaa</btn>
        </div>
        
      `
    }
  ]
}
export {ButtonGroup}