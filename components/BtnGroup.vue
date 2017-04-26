<template>
  <div class="control has-addons">
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
      handleChange ($event) {
        if (this.disabled || $event.target.disabled) {
          $event.preventDefault()
        }
        this.$emit('input', $event.target.value)
        this.$emit('change', $event.target.value)
      }
    }
  }
</script>
