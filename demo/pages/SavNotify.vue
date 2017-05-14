<template>
  <div>
    <btn @click.native="click">常规按钮</btn>
    <btn class="is-primary" @click="basicNotify"> Primary</btn>
    
  </div>
</template>
<script>
  export default {
    methods: {
      basicNotify() {
        this.$notify.open({content: '您点击了我！'})
      }
    }
  }
</script>

