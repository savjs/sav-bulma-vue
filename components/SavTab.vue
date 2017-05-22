<template>
  <div class="tab-panel">
    <div :class="[theme.tab]">
      <ul>
        <li 
          v-for="it in tabs"
          :class="[(it.value == value) && 'is-active']" 
          @mouseenter="hover && $emit('input', it.value)"
          @click="$emit('input', it.value)">
          <a>{{it.title}}</a>
        </li>
      </ul>
    </div>
    <div :class="['tab-container']">
      <div
        v-for="it in tabs"
        v-show="it.value == value"
        >
        <slot :name="it.value" ></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import theme from './theme'
  export default {
    props: {
      tabs: {
        type: Array,
        default: []
      },
      value: {
        type: String,
        default: ''
      },
      hover: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        theme
      }
    }
  }
</script>
