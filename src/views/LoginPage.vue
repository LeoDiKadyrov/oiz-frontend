<template>
  <div class="home">
    <RegAuth msg="Login" :isLoginPage="true" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegAuth from '@/components/RegAuth.vue'

export default {
  name: 'LoginPage',
  components: {
    RegAuth
  }
}
</script>
