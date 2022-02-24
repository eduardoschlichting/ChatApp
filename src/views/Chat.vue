<template>
  <main>
    <h1 class="welcome-message">Welcome {{ ChatUserName }}!</h1>

    <section id="chat">
      <!-- left hand side -> users go here -->
      <section id="chat-users-ui">
        <h2>Current Users:</h2>

        <!-- lay this out however you like - we're just using a list -->
        <ul id="current-users">
          <!-- render a users component for every connected user here -->
        </ul>
      </section>

      <!-- right hand side -> chat UI -->
       <section id="chat-messages-ui">
         <!-- render a component for every message -->
         <ChatMessage 
          v-for="msg in messages"
          :key="msg.id"
          :message="msg.message"
          :user="msg.user"
         />
          
          <section id="text-wrapper">
            <textarea id="message"
            v-model="message"
            @keyup.enter="sendMessageOnEnter"
            placeholder="What's on your mind?"></textarea>

            <button id="sendMessage"
            @click="sendMessage"
            :disabled="hasMessage"
            :class="{'disabled' : hasMessage }"
            >
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </section>

       </section>

    </section>
  </main>
</template>

<script>
import io from "socket.io-client";
import vars from "@/env.js";
import ChatMessage from "@/components/ChatMessage.vue";

export default {
  name: 'TheChatComponent',

  props: {
    ChatUserName: String
  },

  mounted() {
    let vm = this;

    this.socket.on("CONNECTED", (id) => {
      // debugger;
      vm.socketID = id;
    })

    this.socket.on('MESSAGE', (message) => {
      // debugger;
      vm.messages = [...vm.messages, message];
      console.log(message);
    })
  },

  computed: {
    hasMessage: function () {
      // trim gets rid of the whitespace and evaluates if it is empty after it trims
      return this.message.trim() === '';
    }
  },

  data() {
    return {
      // store the connection ID so we can user it later
      socketID: '',
      message: '',
      messages: [],

      socket: io(vars.basePath, {
        withCredentials: false,
        extraHeaders: {
          'Access-Control-Allow-Origin': '*'
        }
      })
    }
  },

  methods: {
    sendMessage() {
    // send something to the server using the socket api
    this.socket.emit('SEND_MESSAGE', { user: this.ChatUserName || "Anonymous", message: this.message});

    // when we are done with it, empty the message field
    this.message = '';
    },

    sendMessageOnEnter(event) {
      // checks for the message content
      // then sends the message
      if(this.hasMessage == false && event.keyCode == 13)
       {
         this.sendMessage();
       } else {
         this.socket.emit("TYPING", { user: this.username || 'anonymous' });
       }
    }
  },

  components: {
    ChatMessage
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/chat.scss";
</style>