<script setup lang="ts">
import Header from "../partial/Header.vue";
import Footer from "../partial/Footer.vue";
</script>

<template>
    <div class="flex flex-col min-h-screen bg-[#3d3c47] text-white">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
