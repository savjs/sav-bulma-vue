<template>
<section class="is-sav-theme">
<section class="hero is-large">
<div class="hero-head ">
  <header class="nav is-sav-nav">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item is-sav-nav-img">
      <!--img src="logo.jpg" alt="Logo"-->
      </a>
    </div>
    <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
    </span>
    <div class="nav-right nav-menu is-sav-nav-menu">
      <a class="nav-item is-sav-nav-item is-tab is-hidden-mobile is-sav-item-active">
              文档
      </a>
      <a class="nav-item is-sav-nav-item is-tab is-hidden-mobile">
              demo
      </a>
      <a class="nav-item" href="https://github.com/savjs/sav-bulma-vue">
      <span class="icon"><i class="fa fa-github"></i></span>
      </a>
    </div>
  </div>
  </header>
</div>
</section>
<router-view></router-view>
</section>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>