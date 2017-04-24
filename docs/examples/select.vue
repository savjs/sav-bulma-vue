<template>
  <sav-select :type="text" :placeholder="请选择" @on-change="ok" >
  </sav-select>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {
            ok () {
                alert("ok")
            },
            
        }
  }
</script>