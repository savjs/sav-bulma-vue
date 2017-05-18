<template>

<layout>
  <section slot="header">
  <sav-menu :logoInfo="{href:'#/',imgSrc:'http://s-www.hfjy.com/pc/images/logo.png',imgAlt:'Sav-vue'}" :menus="[{href:'#/',text:'文档',active:true},{href:'./demo',text:'demo'},{href:'https://github.com/savjs/sav-bulma-vue',text:'github'}]"></sav-menu>
  </section>
  <router-view></router-view>  
</layout>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    }
  }
</script>