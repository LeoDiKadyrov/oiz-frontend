<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
        <div class="logo">
            <!-- Placeholder for Logo -->
            <div class="logo-icon"></div>
            <h1 class="logo-text">Oiz</h1>
        </div>
        
        <div class="login-box">
            <p>Enter your details to get sign in to your account.</p>
            
            <form>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="e.g. username@kinety.com">
                </div>
                
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="enter your password">
                </div>
                
                <a href="#" class="forgot-password">Forgot Password?</a>
                
                <button type="submit" class="continue-btn">Continue</button>
            </form>
            
            <p class="register">Don't have an account? <a href="#">Register Now</a></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationAuthentication',
  props: {
    msg: String
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
