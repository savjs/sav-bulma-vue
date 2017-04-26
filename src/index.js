import Btn from '../components/Btn.vue'
import Checkbox from '../components/Checkbox.vue'
import Radio from '../components/Radio.vue'
import Radiogroup from '../components/RadioGroup.vue'
import Modal from '../components/Modal.vue'
import BtnGroup from '../components/BtnGroup.vue'
import Badge from '../components/Badge.vue'
import Icon from '../components/Icon.vue'

export function install (Vue) {
  Object.keys(components).forEach((it) => {
    Vue.component(it, components[it])
  })
}

let components = {
  Btn,
  Checkbox,
  Radio,
  Radiogroup,
  Modal,
  Icon,
  BtnGroup,
  Badge
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

export default components
