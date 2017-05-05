<template>
  <div :class="[theme.gridrow,type]"><slot></slot></div>
</template>
<script type="text/javascript">
  import theme from './theme'
  export default {
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        theme
      }
    }
  }
</script>
