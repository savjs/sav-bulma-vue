var ButtonGroup = {
  props: [
    {
      name: 'styles',
      type: String  
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
        <Button-group :styles="'control'">
            <btn :styles="'button is-large'" @click="onclick" :disabled="true">aaa</btn>
           <btn :styles="'button is-large'" @click="onclick" :disabled="true">aaa</btn>
        </Button-group>
      `
    }
  ]
}

export {ButtonGroup}