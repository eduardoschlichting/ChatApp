<template>
    <div class="joined">
        <h3> {{ message }}</h3>
    </div>
</template>

<script>
export default {
    name: 'ChatJoin',

    props: {
        message: String
    }
}
</script>

<style lang="scss">
     @import "@/assets/sass/chat.scss";
</style>