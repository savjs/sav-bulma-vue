import btn from './btn.vue'
import checkbox from './checkbox.vue'
import radio from './radio.vue'
import radiogroup from './radiogroup.vue'
import modal from './modal.vue'
import BtnGroup from './BtnGroup.vue'
import Badge from './Badge.vue'
import Icon from './Icon.vue'
import SavInput from './SavInput.vue'
import SavSelect from './SavSelect.vue'
import SavMenu from './SavMenu.vue'
import SavTree from './SavTree.vue'
import SavNotify from './SavNotify.vue'

import layout from './layout.vue'
import grid from './grid.vue'
import savtable from './savtable.vue'
import SavTab from './SavTab.vue'

export {
    Badge as badge,
    btn,
    BtnGroup as btngroup,
    checkbox,
    Icon as icon,
    SavInput as input,
    modal,
    radio,
    radiogroup,
    SavSelect as select,
    grid as gridrow,
    grid as gridcol,
    layout,
    SavTree as savTable,
    SavNotify as Notify,
    SavMenu as menu,
    SavTree as tree
}
export default [
  {
    path: '/btn',
    component: btn
  },
  {
    path: '/checkbox',
    component: checkbox
  },
  {
    path: '/radio',
    component: radio
  },
  {
    path: '/radiogroup',
    component: radiogroup
  },
  {
    path: '/modal',
    component: modal
  },
  {
    path: '/BtnGroup',
    component: BtnGroup
  },
  {
    path: '/Badge',
    component: Badge
  },
  {
    path: '/Icon',
    component: Icon
  },
  {
    path: '/SavInput',
    component: SavInput
  },
  {
    path: '/SavSelect',
    component: SavSelect
  },
  {
    path: '/SavMenu',
    component: SavMenu
  },
  {
    path: '/SavTree',
    component: SavTree
  },
  {
    path: '/SavNotify',
    component: SavNotify
  },
  {
    path: '/layout',
    component: layout
  },
  {
    path: '/grid',
    component: grid
  },
  {
    path: '/savtable',
    component: savtable
  },
  {
    path: '/savtab',
    component: SavTab
  }
]
