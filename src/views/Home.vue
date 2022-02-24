<template>
  <section id="welcome-wrapper">
    <h1 class="hidden">Sign In</h1>
    <h2>Welcome to the Chat App!</h2>

    <input type="text" name="username" v-model="username" placeholder="Your Name">

    <div class="controls">
      <button
        :class="{ 'disabled': canJoin }"
        :disabled='canJoin'
        @click="goToChat"
      >Join Chat!</button>

      <button @click="goToChat">Join Anonymously!</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'TheLoginPage',

    data() {
      return {
        loggedIn: false,
        username: ''
      }
    },

    computed: {
      canJoin: function() {
        // check the value of the input - if it's blank, cna't join chat
        return (this.username.trim() === '');
      }
    },

    methods: {
      goToChat() {
        // this is how we change the route (push)
        this.$router.push({ name: 'Chat', params: { ChatUserName: this.username || 'anonymous' }});
      }
    }
    
  }
</script>


<style lang="scss">
  @import "@/assets/sass/home.scss";
  
</style>