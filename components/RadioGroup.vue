<template>
  <div class="radio-group">
    <label :class="[theme.radiogroup]" v-for="opt in options">
      <radio
        :name="name"
        v-model = "opt.value"
        :value="opt.value == value"
        :checked="opt.value == value"
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
        default: [],
      },
      value: {
        default: ''
      },
      name:{
        default: ''
      }
    },
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
