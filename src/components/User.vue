<template>
    <div class="user-panel">
        <div class="user-wrapper">
            <h1>{{ user }}</h1>
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