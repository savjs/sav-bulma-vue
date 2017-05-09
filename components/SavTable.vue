<template>
  <table :class="[theme.table]">
    <thead v-if="!isHideHeader && columns.length">
      <tr><th v-for="col in columns">{{col.title}}</th></tr>
    </thead>
    <tbody>
      <slot>
        <tr v-for="data in datas">
          <td v-for="col in columns">{{data[col.key]}}</td>
        </tr>
      </slot>
    </tbody>
  </table>
</template>

<script type="text/javascript">
  import theme from './theme'
  export default {
    props: {
      columns: {
        type: Array,
        default: []
      },
      datas: {
        type: Array,
        default: []
      },
      isHideHeader: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
