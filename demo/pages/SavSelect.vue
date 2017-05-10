<template>
  <div>
    <div class="field">
      <label class="label">指定默认选项</label>
      <sav-select value="3" name="grade" :options="[{value:'3',text:'one'},{value:'4',text:'two'}]" :placeholder="{value:'0',text:'请选择'}"></sav-select>
    </div>
    <div class="field">
      <sav-select value="0" name="grade" :options="[{value:'3',text:'one'},{value:'4',text:'two'}]"></sav-select>
    </div>
    <div class="field">
      <label class="label">指定placeholder</label>
      <sav-select value="0" name="grade" :options="[{value:'3',text:'one'},{value:'4',text:'two'}]" :placeholder="{value:'0',text:'请进行选择'}"></sav-select>
    </div>
    <div class="field">
      <label class="label">change事件</label>
      <sav-select value="0" name="grade" :options="[{value:'3',text:'one'},{value:'4',text:'two'}]" :placeholder="{value:'0',text:'请进行选择'}" @change="change"></sav-select>
    </div>
  </div>
</template>
<script>
  export default {
    methods:{
      change (value) {
        console.log("111")
        console.log(value)
      }
    }
  }
</script>
