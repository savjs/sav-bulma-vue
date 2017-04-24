<template>
  <div>
    <radiogroup :options="[{text:'aa',value:1},{text:'bb',value:2}]" :value="2" name="ccc"></radiogroup>
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