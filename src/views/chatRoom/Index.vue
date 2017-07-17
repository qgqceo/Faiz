<template>
    <div>
        <h2>这是聊天界面</h2>
        <button v-on:click="toggle">toggle</button>
        <p v-if="isActive">是第三方士大夫</p>
    </div>
</template>

<script>
export default {
    name: 'chatRoom',
    data () {
        return {
            isActive: true
        }
    },
    methods: {
        toggle: function () {
            this.$data.isActive = !this.$data.isActive;
        }
    }
}
</script>

