<template>
  <div>
    <Btn-group >
      <btn @click.native="click">常规按钮</btn>
      <btn @click.native="click">常规按钮</btn>
      <btn @click.native="click">常规按钮</btn>
    </Btn-group>
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