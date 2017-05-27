<template>
  <div>
    <radio v-model="v">单选框</radio>
    {{v}}
  </div>
</template>
<script>
  export default {
    data(){
      return {
        v:false
      }
    },
    methods:{
      click () {
        console.log('click')
      }
    }
  }
</script>