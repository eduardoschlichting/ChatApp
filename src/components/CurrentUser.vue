<template>
        <li class="user-panel">

        <div class="user-wrapper">
            <div class="online"></div>

            <div class="avatar" :class="avatar">
                <!-- <img src="~@/assets/images/emoji_1.png" alt=""> -->
            </div>

            <p>{{ username }}</p>   
        </div> 
            
        </li>
</template>

<script>

export default {
    name: 'CurrentUser',

    props: {
        username: String,
        avatar: String
    }
}
</script>

<style lang="scss">
    @import "@/assets/sass/user.scss";
    @import "@/assets/sass/chat.scss";
    @import "@/assets/sass/message.scss";

</style>