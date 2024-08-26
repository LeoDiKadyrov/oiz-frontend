<template>
  <div class="about">
    <RegistrationAuthentication msg="Welcome to ForgotPassword"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationAuthentication from '@/components/RegistrationAuthentication.vue'

export default {
  name: 'ForgotPassword',
  components: {
    RegistrationAuthentication
  }
}
</script>
