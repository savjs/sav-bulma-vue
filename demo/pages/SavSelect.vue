<template>
  <div>
    <sav-select value="3" name="grade" :options="[{value:'3',text:'one'},{value:'4',text:'two'}]" :placeholder="{value:'0',text:'请选择'}"></sav-select>
    <sav-select value="0" name="grade" :options="[{value:'3',text:'one'},{value:'4',text:'two'}]" :placeholder="{value:'0',text:'请选择'}"></sav-select>
    <sav-select value="0" name="grade" :options="[{value:'3',text:'one'},{value:'4',text:'two'}]" :placeholder="{value:'0',text:'请进行选择'}"></sav-select>
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
