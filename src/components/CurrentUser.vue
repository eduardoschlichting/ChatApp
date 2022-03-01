<template>
        <li class="user-panel">
            <div class="avatar" :class="avatar">
                <!-- <img src="~@/assets/images/emoji_1.png" alt=""> -->
            </div>

            {{ username }}
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