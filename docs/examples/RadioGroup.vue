<template>
  <form-control text="姓别">
      <radio-group :options="radioOptions" v-model="radioModel" :theme="theme"></radio-group>
  </form-control>
</template>
<script>
  import theme from './theme'
  export default {
    props: {

    },
    data () {
      return {
        theme,
        radioModel: 'double',
        radioOptions: [
          {text: '男性', value:'male'},
          {text: '女性', value:'female'},
          {text: '变性', value:'', disabled: true},
          {text: '双性', value:'double', disabled: true},
        ],
      }
    },
    methods: {

    }
  }
</script>
