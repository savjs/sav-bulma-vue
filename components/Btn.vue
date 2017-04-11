<template>
  <router-link v-if="to" :class="[styles]" :to="to">
    <slot></slot>
  </router-link>
  <button v-else :class="[styles]"  @click="handleClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script>
  import theme from './theme'
  export default {
    props: {
      styles: {
        default: theme.btn
      },
      to: {
        default: false
      },
      disabled: {
        default: false
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>
