<template>
  <div>
      <Badge count="3">
        <a  class="demo-badge"></a>
      </Badge>
      <Badge dot>
        <span class="icon">
            <Icon class="fa-github"></Icon>
        </span> 
      </Badge>
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

