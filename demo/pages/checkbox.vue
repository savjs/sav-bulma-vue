<template>
  <div>
    <checkbox :trueValue="opt.value" :value="opt.value == v" @change="click" v-for="opt in [{text:'aa',value:1},{text:'bb',value:2}]" name="aaa">{{opt.text}}</checkbox>
    
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
        this.v = v
      }
    }
  }
</script>