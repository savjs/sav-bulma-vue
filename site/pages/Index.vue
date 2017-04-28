<template>
<section class="section is-sav-section-theme">
<div class="container is-sav-container-theme">
  <div class="columns is-sav-columns">
    <div class="column is-2 is-sav-column is-sav-border-right">
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
    </div>
    <div class="column is-sav-column is-10 markdown" v-if="$route.params.component in compList">
      <section class="wrapper-content">
      <h1 >{{$route.params.component}}</h1>
      <p>
        代码示例
      </p>
      </br>
      <div class="columns example is-sav-columns">
        <div class="column is-6 ">
          <div class="example-case">
            <div>
              <button class="button is-primary is-sav-is-primary" v-show="$route.params.component == 'btn'">
              <span>Primary</span>
              </button>
              
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
        </div>
        <div class="example-split">
        </div>
        <div class="column is-6 ">
          <code>
            {{compList[$route.params.component].examples[0] ? compList[$route.params.component].examples[0].text :''}}
          </code>
        </div>
      </div>
      </br>
      <h1 class="title">API</h1>
      <div class="tabs">
        <ul>
          <li :class="{'is-active is-sav-tabs-is-active': activeItem === 1}"><a @click="activeItem = 1">PROPS</a></li>
          <li :class="{'is-active is-sav-tabs-is-active': activeItem === 2}"><a @click="activeItem = 2">SLOTS</a></li>
          <li :class="{'is-active is-sav-tabs-is-active': activeItem === 3}"><a @click="activeItem = 3">EVENTS</a></li>
        </ul>
      </div>
      <table class="table is-bordered " v-show="activeItem === 1">
      <thead>
      <tr>
        <th>
          属性
        </th>
        
        <th>
          类型
        </th>
        <th>
          默认值
        </th>
        <th>
          说明
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="v in compList[$route.params.component].props">
        <td v-for="vv in v">
          {{vv}}
        </td>
      </tr>
      </tbody>
      </table>
      <table class="table is-bordered " v-show="activeItem === 2">
      <thead>
      <tr>
        <th>
          属性
        </th>
        <th>
          说明
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="v in compList[$route.params.component].slots">
        <td v-for="vv in v">
          {{vv}}
        </td>
      </tr>
      </tbody>
      </table>
      <table class="table is-bordered " v-show="activeItem === 3">
      <thead>
      <tr>
        <th>
          属性
        </th>
        <th>
          说明
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="v in compList[$route.params.component].events">
        <td v-for="vv in v">
          {{vv}}
        </td>
      </tr>
      </tbody>
      </table>
      </section>
    </div>
    <div v-if="!($route.params.component in compList)">
      <header class="example-header"><span>
                sav-bulma-vue组件
          <a href="#按钮类型">#</a></span></header>
          <div class="example-desc">
            <p>
              sav-bulma-vue组件是一款基于savjs,bulma和Vuejs的前端UI组件库，致力于提供一整套高质量前后端视觉解决方案，提高设计，开发的效率。由海风前端ued团队倾情出品，感谢以下同事的付出：大鹏，晓飞，会会，叶子，鹿鹿。此版本为beta版，更多功能敬请期待...
            </p>
          </div></div>
  </div>
</div>
</section>
</template>
<script>

import * as data from '../../docs/index.js'


  export default {
    data (){
      return {
        compList : data,
        activeItem : 1
      }
    },
    methods:{
      click () {
        console.log('click')
      }
    }
  }
</script>