<template>  
  <p class="control">
    <span class="select">
      <select :name="name" :v-model="value" :disabled="disabled" :readonly="readonly" @change="change">
        <option v-for="(option, index) in options" :value="option.value" :selected="option.value==value" >{{option.text}}</option>
      </select>
    </span>
  </p>
</template>
<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      options: {
        type: Array,
        default: []
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: Object,
        default: {value: '0', text: '请选择'}
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    },
    created () {
      this.options.unshift(this.placeholder)
    },

    methods: {
      change ($event) {
        console.log($event)
        // let index = this.$el.querySelectorAll('select[name=' + this.name + ']').selectedIndex
        // console.log(index)
        console.log('----')
        this.$emit('change', this.value)
      }
    }
  }
</script>
