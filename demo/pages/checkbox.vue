<template>
  <div>
    <checkbox v-model="v">ttttt</checkbox>
    <checkbox :trueValue="opt.value" :value="opt.checked" @change="click" v-for="opt in opts" name="aaa">{{opt.text+'@'+opt.checked}}</checkbox>
    
  </div>
</template>
<script>
  export default {
    data(){
      return {
        v:2,
        opts:[{text:'aaaaa',value:1,checked:false},{text:'bbbbb',value:2,checked:true}]
      }
    },
    methods:{
      click (v,checked) {
        this.opts.forEach(function(it){
          if(it.value == v){
            it.checked = checked
          }
        })
      }
    }
  }
</script>