<template>
   <div :class="btn-group">
    <slot></slot>
  </div>
</template>
<script>
  import theme from './theme'
  export default {
    props: {

    },
    data () {
      return {theme}
    },
    methods: {

    }
  }
</script>
