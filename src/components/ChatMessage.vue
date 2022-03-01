<template>

    <div class="message" :class="from[0]">
            <!-- <h1>{{ user }}</h1> -->
        <div class="message-wrapper" :class="from[2]">

            <div class="avatar" :class="avatar">
                <!-- <img src="~@/assets/images/emoji_1.png" alt=""> -->
            </div>                

            <div class="text-wrapper" :class="from[1]">
                <p class="message-text">
                    {{ message }}
                </p>
            </div>
            <p class="time">{{ time }}</p>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'ChatMessage',

    props: {
        user: String,
        message: String,
        time: String,
        from: [],
        avatar: String

    }
}
</script>

<style lang="scss">
    @import "@/assets/sass/message.scss";

    // .avatar {
    //     background-image: url('~@/assets/images/emoji_1.png');
    // }
</style>