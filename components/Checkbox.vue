<template>
  <label :class="[theme.checkbox]">
    <span :class="checkboxClasses">
      <span :class="innerClasses"></span>
      <input type="checkbox" :checked="value" @change="handleChange" :disabled="disabled || null" :value="trueValue"/>
    </span>
    <span class="check-text"><slot></slot></span>
  </label>
</template>

<script type="text/javascript">
  import theme from './theme'
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      trueValue: {
        type: [String, Number],
        default: ''
      }
    },
    computed: {
      checkboxClasses () {
        return [
          `sav-checkbox`,
          {
            [`sav-checkbox-checked`]: this.value,
            [`sav-checkbox-disabled`]: this.disabled
          }
        ]
      },
      innerClasses () {
        return `sav-checkbox-inner`
      }
    },
    data () {
      return {
        theme
      }
    },
    watch: {
    },
    methods: {
      handleChange ($event) {
        if (this.disabled || $event.target.disabled) {
          $event.preventDefault()
          return
        }
        const checked = $event.target.checked
        this.$emit('input', checked)
        this.$emit('change', this.trueValue, checked)
      }
    }
  }
</script>
