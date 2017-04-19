<template>
  <sav-input :type="text" :placeholder="请输入" @on-click="alert('ok')">
    <span slot="prependContent">用户名:</span>
  </sav-input>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>