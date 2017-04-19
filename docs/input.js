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
            comment: '前置内容，可以是icon也可以是文字'
        },
        {
            name: 'appendContent',
            comment: '后置内容，可以是icon也可以是文字'
        },
    ],
    events: [
        {
            name: 'on-nter',
            description: `按下回车键时触发`
        },
        {
            name: 'on-click',
            description: `设置 icon 属性后，点击图标时触发`
        },
        {
            name: 'on-change',
            description: `数据改变时触发`
        },
        {
            name: 'on-focus',
            description: `输入框聚焦时触发`
        },
        {
            name: 'on-blur',
            description: `输入框失去焦点时触发`
        },
    ],
    examples: [
        {
            name: 'type',
            text: `
            <sav-input :type="text"></sav-input>
            `
        },
        {
            name: 'value',
            text: `
            <sav-input :value="标题"></sav-input>
            `
        },
        {
            name: 'placeholder',
            text: `
            <sav-input :placeholder="请输入"></sav-input>
            `
        },
        {
            name: 'disabled',
            text: `
            <sav-input :disabled="true"></sav-input>
            `
        },
        {
            name: 'readonly',
            text: `
            <sav-input :readonly="true"></sav-input>
            `
        },
        {
            name: 'maxlength',
            text: `
            <sav-input :maxlength="20"></sav-input>
            `
        },
        /*slot*/
        {
            name: 'prependContent',
            text: `
            <sav-input>
                <span slot="prependContent">hello@:</span>
                <span slot="appendContent">@</span>
            </sav-input>
            `
        },
    ]
}