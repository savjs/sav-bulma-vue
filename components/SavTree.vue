<template>
    <li>
        <span @click="toggle">
            <i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
            <i v-if="!isFolder" class="icon file-text"></i>
            {{ model.menuName }}
        </span>
        <ul v-show="open" v-if="isFolder">
            <sav-tree v-for="item in model.children" :model="item"></sav-tree>
        </ul>
    </li>
</template>
 <script>
    export default {
      name: 'SavTree',
      props: ['model'],
      data () {
        return {
          open: false,
          isFolder: true
        }
      },
      computed: {
        isFolder () {
          return this.model.children && this.model.children.length
        }
      },
      created () {
        console.log(this.model)
      },
      methods: {
        toggle () {
          if (this.isFolder) {
            this.open = !this.open
          }
        }
      }
    }
</script>
