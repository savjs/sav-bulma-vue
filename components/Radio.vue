<template>
  <label :class="[theme.radio]">
    <span :class="radioClasses">
      <span :class="innerClasses"></span>
      <input type="radio" :checked="currentValue" @change="handleChange" :disabled="disabled || null" :name="name"/>
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
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      name:{
        type: String,
        default:''
      },
      trueValue: {
        type: [String, Number],
        default: ''
      }
    },
    computed:{
      radioClasses () {
        return [
          `hf-radio`,
          {
            [`hf-radio-checked`]: this.currentValue,
            [`hf-radio-disabled`]: this.disabled
          }
        ]
      },
      innerClasses () {
          return `hf-radio-inner`;
      },
    },
    data () {
      return {
        theme,
        currentValue: this.value,
      }
    },
    watch:{
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
        
        const checked = $event.target.checked;
        this.currentValue = checked;
        this.$emit('input', checked)
      },
      updateModel () {
        this.currentValue = this.value
      }
    }
  }
</script>
