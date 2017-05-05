<template>
  <div :class="[ theme.layout]">
    <section v-if="showHeader" class="hero">
      <div class="container"><slot name="header"></slot></div>
    </section>
    <section class="section">
      <div class="container"><slot></slot></div>
    </section>
    <footer v-if="showFooter" class="footer">
      <div class="container">
        <slot name="footer"></slot>
      </div>
    </footer>
  </div>
</template>

<script>
  import theme from './theme'
  export default {
    data () {
      return {
        theme
      }
    },
    computed: {
      showHeader: function () {
        return this.$slots.header
      },
      showFooter: function () {
        return this.$slots.footer
      }
    }
  }
</script>
