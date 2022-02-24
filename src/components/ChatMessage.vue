<template>
    <div class="message-panel">
        <div class="message-wrapper">
            <h1>{{ user }} says:</h1>
            <p class="message-text">
                {{ message }}
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ChatMessage',

    props: {
        user: String,
        message: String
    }
}
</script>

<style lang="scss">
    @import "@/assets/sass/message.scss";
</style>