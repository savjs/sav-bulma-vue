<template>
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <slot name="header">
        <p class="modal-card-title">Modal title</p>
        <button class="delete"></button>
      </slot>
    </header>
    <section class="modal-card-body">
      <slot></slot>
    </section>
    <footer class="modal-card-foot">
      <slot name="footer">
        <a class="button is-success">Save changes</a>
        <a class="button">Cancel</a>                   
      </slot>
    </footer>
  </div>
</div>
</template>
<script>
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
      data () {
        return {
          modal1: false
        }
      },
      methods: {
        ok () {
          this.$Message.info('点击了确定')
        },
        cancel () {
          this.$Message.info('点击了取消')
        }
      }
    }
</script>
