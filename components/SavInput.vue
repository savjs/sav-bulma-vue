<template>  
    <p:class="{'control':true,'has-icons-left':hasIconsLeft,'has-icons-right':hasIconsRight}">
      <input class="input" :type="type" :name="name" :placeholder="placeholder" :disabled="disabled || null" :maxlength="maxlength" :minlength="minlength" :readonly="readonly" v-model="value" @blur="blur" @focus="focus"/>
      <slot name="leftIcon"></slot>
      <slot name="rightIcon"></slot>
    </p> 
</template>
<script>
  import lang from './lang'
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: lang.InputPlaceholder
      },
      readonly: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 36
      },
      minlength: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        lang,
        hasIconsLeft: false,
        hasIconsRight: false
      }
    },
    computed: {
    },
    mounted () {
      this.hasIconsLeft = this.$el.querySelector('.is-left') === null ? false : true
      this.hasIconsRight = this.$el.querySelector('.is-right') === null ? false : true
    },
    methods: {
      blur ($event) {
        if (this.disabled || $event.target.disabled) {
          $event.preventDefault()
        }
        console.log(this.value)
        this.$emit('blur', this.value)
      },
      focus ($event) {
        this.$emit('focus', this.value)
      }
    }
  }
</script>