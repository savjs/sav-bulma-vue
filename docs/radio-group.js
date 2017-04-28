var radiogroup = {
  props: [
    {
      name: 'value',
      type: 'Boolean',
      default: false,
      description: `是否checked状态，可以使用 v-model 绑定数据`
    },
    {
      name: 'name',
      type: 'String',
      default: '',
      description: `相当于 input[type=radio] 元素的 name 属性`
    },
    {
      name: 'options',
      type: 'Array',
      default: [],
      description: `列表选项(详细)`
    }
  ],
  events:[{
    name: 'change',
    description: `在选项状态发生改变时触发，同 input[type=radio] 元素的change事件一致，传入 value 属性值`
  }],
  examples: [
    {
      name: 'value',
      file: 'examples/RadioGroup.vue'
    }
  ]
}

export {radiogroup}