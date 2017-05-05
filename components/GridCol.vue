<template>
  <div :class="[theme.gridcol,col && ('is-' + col), offset && ('is-offset-' + offset), type]">
    <slot></slot>
  </div>
</template>
<script type="text/javascript">
  import theme from './theme'
  export default {
    props: {
      col: {
        type: Number,
        default: 12
      },
      offset: {
        type: Number,
        default: 0
      },
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
