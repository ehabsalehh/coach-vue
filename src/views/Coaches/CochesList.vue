<template>
  <div class="coaches">
    <h1>This is an coaches page</h1>
    <ul>
      <li><RouterLink to="/coaches/1">ehab</RouterLink></li>
      <li><RouterLink to="/coaches/2">ebrahem</RouterLink></li>
      <li><RouterLink to="/coaches/3">saleh</RouterLink></li>
    </ul>
    <router-view></router-view>

  </div>
</template>
<script setup>
</script>