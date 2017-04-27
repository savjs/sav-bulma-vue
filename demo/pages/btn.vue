<template>
  <div>
    <btn @click.native="click">常规按钮</btn>
    <btn class="is-large" @click.native="click" class="is-success">大按钮</btn>
  </div>
</template>
<script>
  export default {
    methods:{
      click () {
        console.log('click')
      }
    }
  }
</script>