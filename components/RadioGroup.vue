<template>
  <div class="radio-group">
    <label :class="[theme.radiogroup]" v-for="opt in options">
      <radio
        :name="name"
        :trueValue = "opt.value"
        :value="opt.value == value"
        :disabled="opt.disabled"
        @change="handleChange" >{{opt.text}}</radio>
    </label>
  </div>
</template>
<script>
  import theme from './theme'
  export default {
    props: {
      options: {
        type: Array,
        default: []
      },
      value: {
        default: ''
      },
      name: {
        default: ''
      }
    },
    data () {
      return {
        theme
      }
    },
    methods: {
      handleChange (value) {
        this.$emit('input', value)
      }
    }
  }
</script>
