<template>  
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a v-if="logoInfo.imgSrc" class="nav-item" :href="logoInfo.href">
          <img :src="logoInfo.imgSrc" :alt="logoInfo.imgAlt">
        </a>
        <a v-for="(item, index) in menus" :class="{'nav-item':true,'is-tab':true,'is-hidden-mobile':true,'is-active':index==active}" @click="click(index)" :href="item.href">{{item.text}}</a>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <a v-for="(item, index) in menus" :class="{'nav-item':true,'is-tab':true,'is-hidden-tablet':true,'is-active':item.active}" @click="click(index)" :href="item.href">{{item.text}}</a>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    props: {
      logoInfo: {
        type: Object,
        default: {href: '/', imgSrc: '', imgAlt: ''}
      },
      menus: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        active: 1
      }
    },
    created () {
      for (let i in this.menus) {
        if (this.menus[i].active) {
          this.active = i
        }
      }
    },
    methods: {
      click (index) {
        this.active = index
        this.$emit('click', index)
      }
    }
  }
</script>
