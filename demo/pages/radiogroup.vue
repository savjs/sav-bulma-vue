<template>
  <div>
    <radiogroup :options="[{text:'aa',value:1},{text:'bb',value:2}]" v-model="v" name="ccc" ></radiogroup>
    {{v}}
  </div>
</template>
<script>
  export default {
    data(){
      return {
        v:2
      }
    },
    methods:{
      click (v) {
        console.log('click',v)
      }
    }
  }
</script>