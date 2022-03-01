<template>
    <div class="left">
        <h3> {{ message }}</h3>
    </div>
</template>

<script>
export default {
    name: 'ChatDisconnected',

    props: {
        message: String
    }
}
</script>

<style lang="scss">
     @import "@/assets/sass/chat.scss";
</style>
