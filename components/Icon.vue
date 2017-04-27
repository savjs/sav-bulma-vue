<template>
    <span class="icon">
       <i :class="classes" :style="styles"></i>
    </span>

</template>
<script>
    const prefixCls = 'fa'
export default {
      name: 'Icon',
      props: {
        type: String,
        size: [Number, String],
        color: String
      },
      computed: {
        classes () {
          return `${prefixCls} ${prefixCls}-${this.type}`
        },
        styles () {
          let style = {}

          if (this.size) {
            style['font-size'] = `${this.size}px`
          }

          if (this.color) {
            style.color = this.color
          }

          return style
        }
      }
    }
</script>
