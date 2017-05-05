var gridrow = {
  props: [
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
      name: 'gridrow',
      text: `
        <gridrow>
          <gridcol>
            <code>123</code>
          </gridcol>
        </gridrow>
      `
    }
  ]
}

export {gridrow}