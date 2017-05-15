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
import {installNotify} from '../components/notify'

import Layout from '../components/Layout.vue'
import GridRow from '../components/GridRow.vue'
import GridCol from '../components/GridCol.vue'
import SavTable from '../components/SavTable.vue'

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
  Layout,
  GridRow,
  GridCol,
  SavTable
}

export function install (Vue) {
  Object.keys(components).forEach((it) => {
    Vue.component(it, components[it])
  })
  installNotify(Vue)
}

Object.defineProperty(components, 'install', {
  value: install,
  enumerable: false,
  configurable: true
})
