<template>
  <div>
    <modal ref="themodal">xxxx</modal>
    <btn @click.native="click">显示弹框</btn>
  </div>
</template>
<script>
  export default {
    methods:{
      click () {
        this.$refs.themodal.open()

      }
    }
  }
</script>