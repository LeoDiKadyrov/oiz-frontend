<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
        <div class="logo">
            <!-- Placeholder for Logo -->
             <RouterLink to="/" class="logo__router">
                <div class="logo-icon"></div>
                <h1 class="logo-text">Oiz</h1>
             </RouterLink>
            
        </div>
        
        <div class="login-box">
            <p v-if="isLoginPage">Enter your details to sign in to your account.</p>
            <p v-if="isRegistrationPage">Fill in your details to create a new account.</p>
            <p v-if="isForgotPasswordPage">Enter your email to reset your password.</p>
            
            <form @submit.prevent="handleSubmit">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="e.g. username@kinety.com" required>
                </div>
                
                <div class="input-group" v-if="!isForgotPasswordPage">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="enter your password" v-if="!isForgotPasswordPage || isLoginPage" required>
                </div>

                <nav v-if="isLoginPage">
                    <RouterLink to="/forgot-password" class="forgot-password">Forgot Password?</RouterLink>
                </nav>
                
                <button type="submit" class="continue-btn">{{ buttonText }}</button>
            </form>
            
            <p class="register" v-if="!isRegistrationPage">
                Don't have an account?
                <nav>
                    <RouterLink to="/register">Register Now</RouterLink>
                </nav> 
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationAuthentication',
  props: {
    msg: String,
    isLoginPage: {
      type: Boolean,
      default: false,
    },
    isRegistrationPage: {
      type: Boolean,
      default: false,
    },
    isForgotPasswordPage: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    buttonText() {
      if (this.isLoginPage) return 'Continue';
      if (this.isRegistrationPage) return 'Register';
      if (this.isForgotPasswordPage) return 'Reset Password';
      return 'Submit';
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here based on the page type
      if (this.isLoginPage) {
        // Login logic
      } else if (this.isRegistrationPage) {
        // Registration logic
      } else if (this.isForgotPasswordPage) {
        // Forgot password logic
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
}

.logo {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.logo-icon {
    width: 40px;
    height: 40px;
    background-color: lightgray; /* Placeholder for the logo */
    border-radius: 50%;
    margin-right: 10px;
}

.logo-text {
    font-size: 24px;
    font-weight: bold;
}

.logo__router {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.login-box {
    width: 100%;
    max-width: 400px;
    text-align: center;
}

h2 {
    margin-bottom: 10px;
    font-size: 28px;
}

p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #666;
}

.input-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
}

input[type="email"], input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.forgot-password {
    display: block;
    margin-bottom: 20px;
    font-size: 14px;
    text-align: right;
    color: #666;
}

.continue-btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: lightgray; /* Placeholder color */
}

.register {
    margin-top: 20px;
    font-size: 14px;
}

.register a {
    text-decoration: none;
    color: #666;
}
</style>
