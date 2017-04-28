<template>
  <span v-if="dot" :class="[theme.badge]" :dot="dot"  >
    <slot></slot>
    <sup class="badge-dot" v-show="badge"></sup>
  </span>
  <span v-else :class="[theme.badge ]"  >
    <slot></slot>
    <sup v-if="count" class="badge-count" v-show="badge">{{ finalCount }}</sup>
  </span>
</template>
<script>
/**
 * Badge 徽标数
 * @param dot {Object}  小红点
 * @param count  {Number} 显示的数字
 */
  import theme from './theme'
  export default {
    name: 'Badge',
    props: {
      count: [Number, String], // 显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏
      dot: {
          type: Boolean,  // 不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0
          default: false
      },
      overflowCount: {  // 展示封顶的数字值
          type: [Number, String],
          default: 99
      }
    },
    computed: {           
      finalCount () {
        return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count;
      },
      badge () {
        let status = false;
        if (this.count) {
          status = !(parseInt(this.count) === 0);
        }
        if (this.dot) {
          status = true;
          if (this.count) {
              if (parseInt(this.count) === 0) {
                  status = false;
              }
          }
        }
        return status;
      }
    },
    data () {
      return {
          theme,
          alone: false
      };
    },
    mounted () {
      const child_length = this.$refs.badge.children.length;
      if (child_length === 1) {
          this.alone = true;
      }
    }
  };
</script>
