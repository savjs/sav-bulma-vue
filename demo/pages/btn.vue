<template>
  <div>
    <btn :styles="'button is-large'" @click="onclick" :disabled="true">aaa</btn>
  </div>
</template>
<script>
  export default {
    methods:{
      onclick:function(){
        alert('click')
      }
    }
  }
</script>