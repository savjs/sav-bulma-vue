var checkbox = {
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
      description: `相当于 input[type=checkbox] 元素的 name 属性`
    },
    {
      name: 'disabled',
      type: 'Boolean',
      default: false,
      description: `是否禁用当前项`
    }
  ],
  slots: [
    {
      name: 'default',
      description: '默认的插槽,多选框的label，支持html'
    }
  ],
  events: [
      {
          name: 'change',
          description: `在选项状态发生改变时触发，同 input[type=checkbox] 元素的change事件一致，传入 value 属性值`
      }
  ],
  examples: [
    {
      name: 'value',
      file: 'examples/CheckValue.vue'
    },
    {
      name: 'disabled',
      text: `
        <div class="check-group">
                <check-box  v-model="check3" :disabled="true">气球</check-box>
                <check-box  v-model="check4" :disabled="false">热气球</check-box>
        </div>
      `
    }
  ]
}

export {checkbox}