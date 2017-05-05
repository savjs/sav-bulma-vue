var layout = {
  props: [
    {
      name: 'description',
      type: 'String',
      default: '',
      description: `布局组件`
    }
  ],
  slots: [
    {
      name: 'default',
      description: '默认的插槽,布局主体部分，支持html'
    },
    {
      name: 'header',
      description: '布局头部，支持html'
    },
    {
      name: 'footer',
      description: '布局底部，支持html'
    }
  ],
  events: [
  ],
  examples: [
    {
      name: 'layout',
      text: `
        <layout>
          <div class="body">
            <div class="container">
              <h1 class="title">
                Hero title
              </h1>
              <h2 class="subtitle">
                Hero subtitle
              </h2>
            </div>
          </div>
        </layout>
      `
    }
  ]
}

export {layout}