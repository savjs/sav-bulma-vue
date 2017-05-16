var tree = {
    props: [
        {
            name: 'data',
            type: 'Array',
            default: [],
            description: `可嵌套的节点属性的数组，生成 tree 的数据`
        },
        {
            name: 'multiple',
            type: 'Boolean',
            default: false,
            description: `是否支持多选`
        },
        {
            name: 'show-checkbox',
            type: 'Boolean',
            default: [],
            description: `是否显示多选框`
        }
    ],
    events: [
        {
            name: 'on-select-change',
            description: `点击树节点时触发`
        },
        {
            name: 'on-check-change',
            description: `点击复选框时触发`
        },
        {
            name: 'on-toggle-expand',
            description: `展开和收起子列表时触发`
        }
    ],
    methods: [
        {
            name: 'getCheckedNodes',
            description: '获取被勾选的节点'
        },
        {
            name: 'getSelectedNodes',
            description: '获取被选中的节点'
        }
    ],
    examples: []
}

export {tree}