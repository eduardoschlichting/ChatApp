<template>

    <div class="message-panel">
            <h1>{{ user }}</h1>

        <div class="message-wrapper">

            <p class="message-text">
                {{ message }}
            </p>
        </div>
            <p>{{ time }}</p>
    </div>
</template>

<script>

export default {
    name: 'ChatMessage',

    props: {
        user: String,
        message: String,
        time: String,

    }
}
</script>

<style lang="scss">
    @import "@/assets/sass/message.scss";
</style>