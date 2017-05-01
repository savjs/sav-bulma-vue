<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li><router-link to="/btn" >btn</router-link></li>
              <li><router-link to="/checkbox" >checkbox</router-link></li>
              <li><router-link to="/radio" >radio</router-link></li>
              <li><router-link to="/radiogroup" >radiogroup</router-link></li>
              <li><router-link to="/modal" >Modal</router-link></li>
               <li><router-link to="/BtnGroup" >BtnGroup</router-link></li>
              <li><router-link to="/Icon" >Icon</router-link></li>
              <li><router-link to="/Badge" >Badge</router-link></li>
              <li><router-link to="/SavInput" >Input</router-link></li>
              <li><router-link to="/SavSelect" >Select</router-link></li>
            </ul>
          </aside>
        </div>
        <div class="column"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    
  }
</script>