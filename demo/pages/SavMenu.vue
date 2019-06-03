<template>
  <div>
    <sav-menu :logoInfo="{href:'/',imgSrc:'http://s-www.test.com/pc/images/logo.png',imgAlt:'Sav-vue'}" :menus="[{href:'http://vip.test.com',text:'广告站点'},{href:'http://i.test.com',text:'XXX中心 '},{href:'http://www.test.com',text:'XXX官网',active:true}]" @click="click"></sav-menu>
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
