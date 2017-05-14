<template>  
  <aside class="menu">
    <p class="menu-label">
      中国
    </p>
    <ul class="menu-list">
      <li><a>北京</a></li>
      <li>
        <a class="is-active">上海</a>
        <ul>
          <li><a>浦东</a></li>
          <li><a>黄埔</a></li>
          <li>
            <a>静安</a>
            <ul>
              <li><a>地址一</a></li>
              <li><a>地址二</a></li>
              <li><a>地址三</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a>广州</a></li>
      <li><a>浙江</a></li>
      <li><a>河南</a></li>
    </ul>
    <p class="menu-label">
      美国
    </p>
    <ul class="menu-list">
      <li><a>旧金山</a></li>
      <li><a>纽约</a></li>
    </ul>
    <p class="menu-label">
      英国
    </p>
    <ul class="menu-list">
      <li><a>伦敦</a></li>
    </ul>
  </aside>
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
