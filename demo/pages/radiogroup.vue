<template>
  <div>
    <radiogroup :options="[{text:'aa',value:1},{text:'bb',value:2}]" :value="2" name="ccc" @input="click"></radiogroup>
  </div>
</template>
<script>
  export default {
    methods:{
      click (v) {
        console.log('click',v)
      }
    }
  }
</script>