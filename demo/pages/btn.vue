<template>
  <div>
    <btn @click.native="click">常规按钮</btn>
    <btn class="is-primary" @click.native="click" >Primary</btn>
    <btn class="is-info" @click.native="click" >info</btn>
    <btn class="is-success" @click.native="click" >success</btn>
    <btn class="is-warning" @click.native="click" >warning</btn>
    <btn class="is-danger" @click.native="click" >danger</btn>
    <btn class="is-primary is-loading" @click.native="click" >loading</btn>
    <btn class="is-primary is-disabled" @click.native="click" >disabled</btn>
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