<template>
  <div>
    <btn @click.native="click">常规按钮</btn>
    <btn class="is-primary" @click="basicNotify"> Primary</btn>
    <btn class="is-info"  @click="infoNotify" >info</btn>
    <btn class="is-success" @click="successNotify" >success</btn>
    <btn class="is-warning" @click="warningNotify">warning</btn>
    <btn class="is-danger" @click="dangerNotify" >danger</btn>
  </div>
</template>
<script>
  export default {
    methods: {
      basicNotify() {
        this.$notify.open({content: '您点击了我！',})
      },
      primaryNotify() {
        this.$notify.open({content: '您点击了我！', type: 'primary'})
      },
      infoNotify() {
        this.$notify.info({content: '您点击了我！'})
      },
      successNotify() {
        this.$notify.success({content: '您点击了我！'})
      },
      warningNotify() {
        this.$notify.warning({content: '您点击了我！'})
      },
      dangerNotify() {
        this.$notify.open({content: '您点击了我！', type: 'danger'})
      }
    }
  }
</script>

