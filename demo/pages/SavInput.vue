<template>
  <div>
    <sav-input>
      <span slot="leftIcon" class="icon is-small is-left" style="top:8px;">
        <i class="fa fa-user"></i>
      </span>
      <span slot="rightIcon" class="icon is-small is-right" style="top:8px;">
        <i class="fa fa-check"></i>
      </span>
    </sav-input>
    <div style="width:200px;margin-bottom:15px;">
      <sav-input>
      <span slot="leftIcon" class="icon is-small is-left" style="top:8px;">
        <i class="fa fa-user"></i>
      </span>
    </sav-input>
    </div>
    <sav-input placeholder="请输入用户名">
    </sav-input>
    <sav-input placeholder="姓名" disabled="true">
    </sav-input>
  </div>
</template>
<script>
  export default {
    methods:{
      click () {
        console.log('click')
      }
    }
  }
</script>
