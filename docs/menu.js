var menu = {
    props: [
        {
            name: 'mode',
            type: 'String',
            default: 'vertical',
            description: `菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）`
        },
        {
            name: 'active-name',
            type: 'String | Number',
            default: '',
            description: `激活菜单的 name 值`
        },
        {
            name: 'open-names',
            type: 'Array',
            default: [],
            description: `展开的 Submenu 的 name 集合`
        },
        {
            name: 'accordion',
            type: 'Boolean',
            default: false,
            description: `是否开启手风琴模式，开启后每次至多展开一个子菜单`
        }
    ],
    events: [
        {
            name: 'on-select',
            description: `选择菜单（Menu-item）时触发`
        },
        {
            name: 'on-open-change',
            description: `当 展开/收起子菜单时触发`
        }
    ],
    examples: []
}

export {menu}