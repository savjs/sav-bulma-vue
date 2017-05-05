var gridcol = {
  props: [
    {
      name: 'col',
      type: 'Number',
      default: 12,
      description: `宽度，默认12`
    },
    {
      name: 'offset',
      type: 'Number',
      default: 0,
      description: `偏移，默认不偏移`
    },
    {
      name: 'type',
      type: 'String',
      default: '',
      description: `自定义类名`
    }
  ],
  slots: [
    {
      name: 'default',
      description: '默认的插槽,支持html'
    }
  ],
  events: [
  ],
  examples: [
    {
      name: 'gridcol',
      text: `
        <gridcol>
          <code>123</code>
        </gridcol>
      `
    }
  ]
}

export {gridcol}