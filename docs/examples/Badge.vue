<template>
  <router-link v-if="to" :class="[theme.btn]" :to="to" @click="handleClick"  :disabled="disabled || null">
    <slot></slot>
  </router-link>
  <button v-else :class="[theme.btn]"  @click="handleClick" :disabled="disabled || null">
    <slot></slot>
  </button>
</template>
<script>
  import theme from './theme'
  export default {
    props: {
      to: {
        default: false
      },
      disabled: {
        default: false
      }
    },
    data () {
      return {theme}
    },
    methods: {
      handleClick ($event) {
        if (this.disabled || $event.target.disabled) {
          $event.preventDefault()
        }
      }
    }
  }
</script>
