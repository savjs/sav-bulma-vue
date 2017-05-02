<template>
  <div>
    <span @click="InputValue">ok</span>
    <sav-input>
      <span slot="leftIcon" class="icon is-small is-left">
        <i class="fa fa-user"></i>
      </span>
      <span slot="rightIcon" class="icon is-small is-right">
        <i class="fa fa-check"></i>
      </span>
    </sav-input>
    <div style="width:200px;margin-bottom:15px;">
      <sav-input>
      <span slot="leftIcon" class="icon is-small is-left">
        <i class="fa fa-user"></i>
      </span>
    </sav-input>
    </div>
    <sav-input placeholder="请输入用户名">
    </sav-input>
    <sav-input placeholder="姓名" disabled="true">
    </sav-input>
    <sav-input @focus="focus" @blur="blur" value="数字">
    </sav-input>
  </div>
</template>
<script>
  export default {
    methods:{
      focus (value) {
        alert("输入的为:"+value)
      },
      blur (value) {
        alert("输入的为:"+value)
      }
    }
  }
</script>
