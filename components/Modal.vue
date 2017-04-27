<template>
<div :class="wrapClasses">
  <div class="modal-background" @click="mask"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <slot name="header">
        <p class="modal-card-title">{{title}}</p>
        <button class="delete" @click="close"></button>
      </slot>
    </header>
    <section class="modal-card-body">
      <slot></slot>
    </section>
    <footer class="modal-card-foot">
      <slot name="footer">
        <a class="button is-success" @click="ok">{{okText}}</a>
        <a class="button" @click="cancel">{{cancelText}}</a>                   
      </slot>
    </footer>
  </div>
</div>
</template>
<script>
import theme from './theme'
export default {
  props: {
    title: {
      type: 'String',
      default: '提示框'
    },
    show: {
      type: 'Boolean',
      default: false
    },
    okText: {
      type: 'String',
      default: '确定'
    },
    cancelText: {
      type: 'String',
      default: '取消'
    },
    width: {
      type: 'Number',
      default: 500
    },
    scrollable: {
      type: 'Boolean',
      default: false
    }
  },
  watch: {
    show (val) {
      this.isShow = val
    }
  },
  computed: {
    wrapClasses () {
      return [
        theme.modal,
                { 'is-active': this.isShow }
      ]
    }
  },
  data () {
    return {
      theme,
      isShow: this.show,
      modal1: false
    }
  },
  mounted () {
    document.addEventListener('keydown', this.EscClose)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.EscClose)
  },
  methods: {
    open () {
      this._show()
    },
    _show () {
      this.isShow = true
      this.$emit('show')
    },
    close () {
      this.isShow = false
      this.$emit('close')
    },
    ok () {
      this.isShow = false
      this.$emit('onok')
    },
    cancel () {
      this.close()
      this.$emit('oncancel')
    },
    mask () {
      this.close()
    },
    handleWrapClick (event) {
          // const className = event.target.getAttribute('class');
         // if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.mask();
    },
    EscClose (e) {
      if (this.isShow) {
        if (e.keyCode === 27) {
          this.close()
        }
      }
    }
  }
}
</script>
