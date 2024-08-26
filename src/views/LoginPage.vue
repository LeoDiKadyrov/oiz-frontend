<template>
  <div class="home">
    <RegistrationAuthentication msg="Welcome to"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationAuthentication from '@/components/RegistrationAuthentication.vue'

export default {
  name: 'LoginPage',
  components: {
    RegistrationAuthentication
  }
}
</script>
