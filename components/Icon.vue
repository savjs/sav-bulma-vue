<template>  
    <i :class="[theme.icon]"></i>      
</template>
<script>
  import theme from './theme'
  export default {
    props:{
        icon: {
            type: String,
            default: ''
        }
    },
    data () {
       return {theme}
    },
    methods: {     
    }
  }
</script>
