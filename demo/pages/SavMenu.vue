<template>
  <div>
    <sav-menu :logoInfo="{href:'/',imgSrc:'http://s-www.hfjy.com/pc/images/logo.png',imgAlt:'Sav-vue'}" :menus="[{href:'http://vip.hfjy.com',text:'广告站点'},{href:'http://i.hfjy.com',text:'服务中心'},{href:'http://www.hfjy.com',text:'海风官网',active:true}]" @click="click"></sav-menu>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods:{
      click (index) {
        console.log(index)
      }
    }
  }
</script>
