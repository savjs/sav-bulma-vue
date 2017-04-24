var Badge = {
  props: [   
    {
      name: 'count',
      type: 'Number | String',
      default: false,
      description: `显示的数字`
    },
    {
      name: 'overflow-count',
      type: 'Boolean',
      default: 99,
      description: `封顶的数字值`
    },
    {
      name: 'dot',
      type:  'Boolean',
      default: false,
      description: `只有一个小红点，如需隐藏 dot ，需要设置count为 0`
    },
    {
      name: 'class-name',
      type:  'String',
      default: false,
      description: `自定义的class名称dot 模式下无效`
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
      name: 'count',
      text: `
        <Badge count="3">
            <a href="#" class="demo-badge"></a>
        </Badge>
      `
    },
    {
      name: 'overflow-count',
      text: `
       <Badge count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
        </Badge>
      `
    },
    {
      name: 'overflow-count',
      text: `
       <Badge count="1000" overflow-count="999">
         <Icon type="fa-address-book" size="26"></Icon>
        </Badge>
      `
    }
  ]
}

export {Badge}