var input = {
    props: [
        {
            name: 'type',
            type: 'String',
            default: 'text',
            description: `html input 的type类型`
        },
        {
            name: 'value',
            type: 'String|Number',
            default: '',
            description: `这里根据type具体的类型定的`
        },
        {
            name: 'placeholder',
            type: 'String',
            default: '请输入',
            description: `input 中的placeholder作用`
        },
        {
            name: 'disabled',
            type: 'Boolean',
            default: false,
            description: `input是否禁用模式`
        },
        {
            name: 'readonly',
            type: 'Boolean',
            default: false,
            description: `设置输入框为只读`
        },
        {
            name: 'maxlength',
            type: 'Number',
            default: 36,
            description: `最大输入长度`
        },
        {
            name: 'minlength',
            type: 'Number',
            default: 0,
            description: `最小输入长度`
        },
        {
            name: 'icon',
            type: 'String',
            default: '',
            description: `输入框尾部图标`
        },
    ],
    slots: [
        {
            name: 'prependContent',
            comment: '前置内容'
        },
        {
            name: 'appendContent',
            comment: '后置内容'
        },
    ],
    events: [
        {
            name: 'onEnter',
            description: `按下回车键时触发`
        },
        {
            name: 'onClick',
            description: `设置 icon 属性后，点击图标时触发`
        },
        {
            name: 'onChange',
            description: `数据改变时触发`
        },
        {
            name: 'onFocus',
            description: `输入框聚焦时触发`
        },
        {
            name: 'onBlur',
            description: `输入框失去焦点时触发`
        },
    ],
    examples: [
        {
            name: 'type',
            text: `
            <input :type="text"><input>
            `
        },
        {
            name: 'value',
            text: `
            <input :value="标题"><input>
            `
        },
        {
            name: 'placeholder',
            text: `
            <input :placeholder="请输入"><input>
            `
        },
        {
            name: 'disabled',
            text: `
            <input :disabled="true"><input>
            `
        },
        {
            name: 'readonly',
            text: `
            <input :readonly="true"><input>
            `
        },
        {
            name: 'maxlength',
            text: `
            <input :maxlength="20"><input>
            `
        },
        /*slot*/
        {
            name: 'prependContent',
            text: `
            <input slot="prependContent">
                <span slot="prependContent">用户名:</span>
                <span slot="appendContent">必填</span>
            <input>
            `
        },
    ]
}