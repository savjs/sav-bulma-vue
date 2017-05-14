import Btn from '../components/Btn.vue'
import Checkbox from '../components/Checkbox.vue'
import Radio from '../components/Radio.vue'
import Radiogroup from '../components/RadioGroup.vue'
import Modal from '../components/Modal.vue'
import BtnGroup from '../components/BtnGroup.vue'
import Badge from '../components/Badge.vue'
import Icon from '../components/Icon.vue'
import SavInput from '../components/SavInput.vue'
import SavSelect from '../components/SavSelect.vue'
import SavMenu from '../components/SavMenu.vue'
import SavTree from '../components/SavTree.vue'
import SavNotify from '../components/SavNotify.vue'

import Layout from '../components/Layout.vue'
import GridRow from '../components/GridRow.vue'
import GridCol from '../components/GridCol.vue'
import SavTable from '../components/SavTable.vue'
const install = function (Vue, options = {}) {
  Object.keys(components).forEach((it) => {
    Vue.component(it, components[it])
    Vue.prototype.$notify = Notify
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
  Badge,
  SavInput,
  SavSelect,
  SavMenu,
  SavTree,
  SavNotify,
  Layout,
  GridRow,
  GridCol,
  SavTable
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})

module.exports = Object.assign(components, {install})
