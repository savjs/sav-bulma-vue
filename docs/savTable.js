var savTable = {
  props: [   
    {
      name:'columns',
      type: 'Array',
      default: [],
      description: `表头数组`
    },
    {
      name:'datas',
      type: 'Array',
      default: [],
      description: `表格要显示的数据`
    },
    {
      name:'isHideHeader',
      type: 'Boolean',
      default: false,
      description: `是否显示表头`
    }
  ],
  slots: [
    {
      name: 'default',
      comment: '可以自定义表格体内容'
    }
  ],
  examples: [
    {
      name: 'savTable',
      text: `
        <template>
          <div>
            <simple-table :columns="columns" :datas="datas">
              <tr v-for="data in datas" >
                <td v-for="col in columns">{{data[col.key]}}</td>
              </tr>
            </simple-table>
          </div>
        </template>

        <script type="text/javascript">
          export default {
            data: function () {
              return {
                columns: [
                  { title:'Name', key: 'name' },
                  { title:'Age', key: 'age' },
                ],
                datas: [
                  { name: '张三', age: 10 },
                  { name: '李四', age: 10 },
                  { name: '王五', age: 10 }
                ]
              };
            }
          }
        </script>
      `
    }
  ]
}

export {savTable}