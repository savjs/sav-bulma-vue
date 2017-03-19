<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li><router-link to="/btn" >btn</router-link></li>
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