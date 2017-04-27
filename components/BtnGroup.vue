<template>
  <div :class="[theme.btngroup]" >
    <slot></slot>
  </div>
</template>

<script>
  import theme from './theme'
  export default {

    data () {
      return {theme}
    },
    methods: {
     
    }
  }
</script>
