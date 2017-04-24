<template>
  <label :class="[theme.checkbox]">
    <span :class="checkboxClasses">
      <span :class="innerClasses"></span>
      <input type="checkbox" :checked="currentValue" @change="handleChange" :disabled="disabled || null"/>
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
      }
    },
    computed: {
      checkboxClasses () {
        return [
          `hf-checkbox`,
          {
            [`hf-checkbox-checked`]: this.currentValue,
            [`hf-checkbox-disabled`]: this.disabled
          }
        ]
      },
      innerClasses () {
        return `hf-checkbox-inner`
      }
    },
    data () {
      return {
        theme,
        currentValue: this.value
      }
    },
    watch: {
      value () {
        this.updateModel()
      }
    },
    methods: {
      handleChange ($event) {
        if (this.disabled || $event.target.disabled) {
          $event.preventDefault()
          return
        }
  
        const checked = $event.target.checked
        this.currentValue = checked
        this.$emit('input', checked)
      },
      updateModel () {
        this.currentValue = this.value
      }
    }
  }
</script>
