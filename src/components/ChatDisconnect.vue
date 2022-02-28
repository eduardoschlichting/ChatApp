<template>
    <div class="disconnected">
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
