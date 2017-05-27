<template>
  <label :class="[theme.radio]">
    <span :class="radioClasses">
      <span :class="innerClasses"></span>
      <input type="radio" :checked="value" @change="handleChange" :disabled="disabled || null" :name="name" :value="trueValue" />
    </span>
    <span class="radio-text"><slot></slot></span>
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
      name: {
        type: String,
        default: ''
      },
      trueValue: {
        type: [String, Number],
        default: ''
      }
    },
    computed: {
      radioClasses () {
        return [
          `sav-radio`,
          {
            [`sav-radio-checked`]: this.value,
            [`sav-radio-disabled`]: this.disabled
          }
        ]
      },
      innerClasses () {
        return `sav-radio-inner`
      }
    },
    data () {
      return {
        theme
      }
    },
    methods: {
      handleChange ($event) {
        if (this.disabled || $event.target.disabled) {
          $event.preventDefault()
          return
        }
  
        const checked = $event.target.checked
        this.$emit('input', checked)
        this.$emit('change', this.trueValue)
      }
    }
  }
</script>
