<template>
  <div class="home">
    <RegAuth msg="Register" :isRegistrationPage="true" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegAuth from '@/components/RegAuth.vue'

export default {
  name: 'RegistrationPage',
  components: {
    RegAuth
  }
}
</script>
