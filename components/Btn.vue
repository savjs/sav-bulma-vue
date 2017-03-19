<template>
  <router-link v-if="to" :class="[style]" :to="to">
    <slot></slot>
  </router-link>
  <button v-else :class="[style]" >
    <slot></slot>
  </button>
</template>
<script>
  import theme from './theme'
  export default {
    props: {
      style: {
        default: theme.btn
      },
      to: {
        default: false
      }
    }
  }
</script>
