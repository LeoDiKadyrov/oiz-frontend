<template>
  <div class="about">
    <RegAuth msg="Forgot Password" :isForgotPasswordPage="true" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegAuth from '@/components/RegAuth.vue'

export default {
  name: 'ForgotPassword',
  components: {
    RegAuth
  }
}
</script>
