<template>
  <div>
    <Btn-group class="control has-addons">     
        <btn @click.native="click">常规按钮</btn>
        <btn @click.native="click">常规按钮</btn>
        <btn @click.native="click" class="is-success">常规按钮</btn>
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