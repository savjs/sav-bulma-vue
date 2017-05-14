import Vue from 'vue'
import SavNotify from './SavNotify'

function open (propsData) {
  const NotifyComponent = Vue.extend(SavNotify)
  return new NotifyComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  open (params) {
    const defaultParam = { direction: 'right', duration: 4500 }
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  },

  info (params) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'info' }
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  },

  warning (params) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'warning' }
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  },

  success (params) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'success' }
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  },

  danger (params) {
    const defaultParam = { direction: 'right', duration: 4500, type: 'danger' }
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  }

}
