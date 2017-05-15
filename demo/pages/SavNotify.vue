<template>
  <div>
    <btn class="is-primary" @click.native="basicNotify"> Primary</btn>
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

