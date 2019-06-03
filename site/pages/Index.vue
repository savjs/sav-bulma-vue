<template>
<section class="section is-sav-section-theme">
<div class="container is-sav-container-theme">
  <GridRow>
    <GridCol :col="2" class="is-sav-column is-sav-border-right">
      <aside class="list-group is-sav-side-nav">
      <a href="#/" class="list-group-item">更新日志</a>{{compList.length}}
      <a href="#/customize" class="list-group-item">基础组件</a>
      <div class="menu is-sav-menu">
        <p class="menu-label">
          Basic
        </p>
        <ul class="menu-list is-sav-menu-list">
          <li v-for = "(v,k) in compList" >
          <router-link :to="'/'+k" :class="{'is-sav-menu-is-active':$route.params.component == k}">{{k}}</router-link>
          <!--a :href="'#/'+k">{{k}}</a--></li>
        </ul>
      </div>
      </aside>
    </GridCol>
    <GridCol :col="10" class="is-sav-column markdown" v-if="$route.params.component in compList">
       <section class="wrapper-content">
      <h1 >{{$route.params.component}}</h1>
      <p>
        代码示例
      </p>
      </br>

      <GridRow class="example is-sav-columns">
        <GridCol :col="6">
          <div class="example-case">
            <div>
                <component :is="comps[this.$route.params.component]">
                </component>
              
              
            </div>
          </div>
          <header class="example-header"><span>
                {{compList[$route.params.component].props[0].name}}
          <a href="#按钮类型">#</a></span></header>
          <div class="example-desc">
            <p>
              {{compList[$route.params.component].props[0].description}}
            </p>
          </div>
        </GridCol>
        <div class="example-split">
        </div>
        <GridCol :col="6" >
          <code>
            {{compList[$route.params.component].examples[0] ? compList[$route.params.component].examples[0].text :''}}
          </code>
        </GridCol>
      </GridRow>
      </br>
      <h1 class="title">API</h1>
      <div class="tabs">
        <ul>
          <li :class="{'is-active is-sav-tabs-is-active': activeItem === 1}"><a @click="activeItem = 1">PROPS</a></li>
          <li :class="{'is-active is-sav-tabs-is-active': activeItem === 2}"><a @click="activeItem = 2">SLOTS</a></li>
          <li :class="{'is-active is-sav-tabs-is-active': activeItem === 3}"><a @click="activeItem = 3">EVENTS</a></li>
        </ul>
      </div>
      

      <SavTable :columns="p.columns" :datas="compList[$route.params.component].props" v-show="activeItem === 1" v-if="compList[$route.params.component] && compList[$route.params.component].props">
            </SavTable>

      <SavTable :columns="s.columns" :datas="compList[$route.params.component].slots" v-show="activeItem === 2" v-if="compList[$route.params.component].slots">
            </SavTable>
      <SavTable :columns="e.columns" :datas="compList[$route.params.component].events" v-show="activeItem === 3" v-if="compList[$route.params.component].events">
            </SavTable>
      </section>
    </GridCol>
    <div v-if="!($route.params.component in compList)">
      <header class="example-header"><span>
                sav-bulma-vue组件
          <a href="#按钮类型">#</a></span></header>
          <div class="example-desc">
            <p>
              sav-bulma-vue组件是一款基于savjs,bulma和Vuejs的前端UI组件库，致力于提供一整套高质量前后端视觉解决方案，提高设计，开发的效率。由某某前端ued团队倾情出品，感谢以下同事的付出：**，**，**，**，**。此版本为beta版，更多功能敬请期待...
            </p>
          </div></div>
  </GridRow>
</div>
</section>
</template>
<script>
import * as data from '../../docs/index.js'
import * as comps from '../../demo/pages/index2.js'
  export default {
    data (){
      return {
        curComp:this.$route.params.component,
        compList : data,
        comps:comps,
        activeItem : 1,
        p:{
          columns: [
            { title:'属性', key: 'name' },
            { title:'类型', key: 'type' },
            { title:'默认值', key: 'default' },
            { title:'说明', key: 'description' },
          ],
          datas:(data[this.$route.params.component] && data[this.$route.params.component].props) ? data[this.$route.params.component].props : []
        },
        s:{
          columns: [
            { title:'属性', key: 'name' },
            { title:'说明', key: 'description' },
          ],
          datas:(data[this.$route.params.component] && data[this.$route.params.component].slots) ? data[this.$route.params.component].slots : []
        },
        e:{
          columns: [
            { title:'属性', key: 'name' },
            { title:'说明', key: 'description' },
          ],
          datas: (data[this.$route.params.component] && data[this.$route.params.component].events) ? data[this.$route.params.component].events : []
        }
      }
    },
    watch:{
    },
    methods:{
      click () {
        console.log('click')
      }
    },
    mounted(){
      console.log('click2')

      this.currentView = comps[this.$route.params.component]
    }
  }
</script>