<template>
  <div>
    <div class="field">
      <label class="label">带前后slot</label>
      <sav-input>
        <span slot="leftIcon" class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
        <span slot="rightIcon" class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </sav-input>
    </div>
    <div class="field">
      <label class="label">指定placeholder</label>
      <sav-input placeholder="请输入用户名">
      </sav-input>
    </div>
    <div class="field">
      <label class="label">指定placeholder,并禁用</label>
      <sav-input placeholder="姓名" disabled="true">
      </sav-input>
    </div>
    <div class="field">
      <label class="label" v-text="demo4"></label>
      <sav-input @focus="focus">
      </sav-input>
    </div>
    <div class="field">
      <label class="label" v-text="demo5"></label>
      <sav-input @blur="blur">
      </sav-input>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        demo4 : 'focus事件',
        demo4Value : 'focus事件',
        demo5 : 'blur事件',
        demo5Value : 'blur事件'
      }
    },
    methods:{
      focus (value) {
        this.demo4 = 'focus事件后input中的value为' + value
        this.demo4Value =  value
      },
      blur (value) {
        this.demo5 = 'blur事件后input中的value为' + value
        this.demo5Value =  + value
      }
    }
  }
</script>
