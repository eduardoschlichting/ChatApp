<template>

    <div class="message" :class="from[0]">
            <!-- <h1>{{ user }}</h1> -->
        <div class="message-wrapper"  >

            <div class="avatar"></div>                

        <div class="text-wrapper" :class="from[1]">
            <p class="message-text">
                {{ message }}
            </p>
        </div>
            
        </div>
        <p class="time">{{ time }}</p>
    </div>
</template>

<script>

export default {
    name: 'ChatMessage',

    props: {
        user: String,
        message: String,
        time: String,
        from: []

    }
}
</script>

<style lang="scss">
    @import "@/assets/sass/message.scss";
</style>