<script setup lang="ts">
definePageMeta({
    middleware: [
        function (to, from) {
            return navigateTo('/');
        },
    ],
});
</script>

<template>
    <div>
        <!-- Redirecting... -->
    </div>
</template>