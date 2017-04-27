var select = {
    props: [
        {
            name: 'value',
            type: 'String | Number | Array',
            default: 'one',
            description: `指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array,这里定义的可以做为此组件的默认值`
        },
        {
            name: 'option',
            type: 'Array',
            default: [],
            description: `可供选择的option对象[{text:'足球',value:1}]`
        },
        {
            name: 'multiple',
            type: 'Boolean',
            default: 'false',
            description: `这里根据type具体的类型定的`
        },
        {
            name: 'placeholder',
            type: 'String',
            default: '请输入',
            description: `select 中的placeholder作用`
        },
        {
            name: 'disabled',
            type: 'Boolean',
            default: false,
            description: `select是否禁用模式`
        },
        {
            name: 'readonly',
            type: 'Boolean',
            default: false,
            description: `设置输入框为只读`
        }
    ],
    events: [
        {
            name: 'on-change',
            description: `数据改变时触发`
        }
    ],
    examples: []
}