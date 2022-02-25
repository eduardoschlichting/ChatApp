<template>
        <li class="user-panel">
            {{ username }}
        </li>
</template>

<script>

export default {
    name: 'CurrentUser',

    props: {
        username: String
    }
}
</script>

<style lang="scss">
    @import "@/assets/sass/user.scss";
</style>