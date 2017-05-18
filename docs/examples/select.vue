<template>
  <sav-select :type="text" :placeholder="请选择" @on-change="ok" :option="option"> 
  </sav-select>
</template>
<script>
  export default {
    data () {
      return {
        option : [{text:'足球',value:1},{text:'篮球',value:2}]
      }
    },
    methods: {
            ok () {
                alert("ok")
            },
            
        }
  }
</script>