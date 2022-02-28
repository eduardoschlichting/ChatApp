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
          <!-- // when the user itself joins -->
          <!-- <li class="user-panel">
            {{ ChatUserName }}
        </li> -->

          <CurrentUser 
            v-for="user in usersConnected"
            :key="user.user"
           :username="user"/>
        </ul>
      </section>

      <!-- right hand side -> chat UI -->
       <section id="chat-messages-ui">

         <h3 v-if="ChatUserName">
           You joined
         </h3>

        <ChatJoin v-if="userConnectedMessage" :message="userConnectedMessage"/>
        <ChatDisconnected v-if="userDisconnectedMessage" :message="userDisconnectedMessage"/>
         <!-- render a component for every message -->
         <ChatMessage
         :class="ChatUserName === msg.user ? 'you' : 'other'"
          v-for="msg in messages"
          :key="msg.id"
          :message="msg.message"
          :user="msg.user"
          :time="msg.time"
          
         />

          <h3>
           {{ userTyping }}
         </h3>

       </section>

        <section id="text-wrapper">
            <input id="message"
            v-model="message"
            
            @keydown="sendMessageOnEnter"
            placeholder="What's on your mind?" />

            <button id="sendMessage"
            @click="sendMessage"
            :disabled="hasMessage"
            :class="{'disabled' : hasMessage }"
            >
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </section>
    </section>
  </main>
</template>

<script>
import io from "socket.io-client";
import vars from "@/env.js";
import ChatMessage from "@/components/ChatMessage.vue";
import CurrentUser from "@/components/CurrentUser.vue";
import ChatJoin from "@/components/ChatJoin.vue";
import ChatDisconnected from "@/components/ChatDisconnect.vue";

export default {
  name: 'TheChatComponent',

  props: {
    ChatUserName: String
  },

  mounted() {
    let vm = this

    this.socket.on("CONNECTED", (id) => {
      // debugger;
      // array of ids
      vm.socketID = id;
      // console.log("hello from socketID", vm.socketID);
      vm.socket.emit('user-connected', {user: this.ChatUserName || "Anonymous"});
    })

    vm.socket.on('users-on-server', (data) => {
      // console.log(data);
      // console.log(vm.socketID);

      // sends back to the server the userID with the username
      vm.usersConnected = data.user;
      
      // console.log(vm.usersConnected);
    })

    vm.socket.on('user-conn-message', (msg) => {
      vm.userConnectedMessage = msg.message; 
    })

    vm.socket.on('disconnected', (data) => {
  
      vm.userDisconnectedMessage = data.messageDisc;

      const userDisconnected = data.user;

      // Deletes the user once left the chat, updating the current users func
      vm.$delete(vm.usersConnected, userDisconnected);
      
    })

    vm.socket.on('MESSAGE', (message) => {

      vm.messages = [...vm.messages, message];
      // when we get the message, set the user typing to none
      vm.userTyping = '';
    })

    vm.socket.on('user-typing', (data) => {
        // sets the user typing
        vm.userTyping = `${data.user} is typing...`;
      
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
      // socketID: [],
      usersConnected : [],
      message: '',
      messages: [],
      timeNow: '',
      userConnectedMessage: '',
      userDisconnectedMessage: '',
      userTyping: '',

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
    const time = new Date();
    this.timeNow = time.toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
    
    this.socket.emit('SEND_MESSAGE', { user: this.ChatUserName || "Anonymous", message: this.message, time: this.timeNow});

    // when we are done with it, empty the message field
    this.message = '';
    },

    sendMessageOnEnter(event) {
      // checks for the message content
      // then sends the message
      if(this.hasMessage == false && event.keyCode == 13 )
       {
         this.sendMessage();

        //  window.scrollTo(0,document.querySelector('#chat-messages-ui').scrollHeight);
        

      } else {
          this.socket.emit('TYPING', { user: this.ChatUserName || 'anonymous' });
        }
    }

  },

  components: {
    ChatMessage,
    CurrentUser,
    ChatJoin,
    ChatDisconnected
  }
}
</script>

<style lang="scss">
  @import "@/assets/sass/chat.scss";
</style>