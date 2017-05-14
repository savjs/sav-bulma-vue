<template>
  <div>
    <sav-tree @click="click"></sav-tree>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: [
          {
            value: '0',
            text: '中国',
            children: [
              {
                value: '1',
                text: '上海',
                children: [
                  {
                    value: '11',
                    text: '黄埔'
                  },
                  {
                    value: '12',
                    text: '静安'
                  },
                  {
                    value: '13',
                    text: '浦东'
                  },
                ]
              },
              {
                value: '2',
                text: '北京'
              },
              {
                value: '3',
                text: '广州'
              },
            ]
        },
        {
          value: '100', 
          text:'美国'
        },
        {
          value: '200', 
          text:'英国'
        }
      ]
      }
    },
    methods:{
      click (index) {
        console.log(index)
      }
    }
  }
</script>
