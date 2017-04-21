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
      description: `列表选项`
    }
  ],
  examples: [
    {
      name: 'value',
      file: 'examples/RadioGroup.vue'
    }
  ]
}

export {radiogroup}