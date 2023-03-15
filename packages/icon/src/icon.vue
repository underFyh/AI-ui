<template>
    <i :class="`ai-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'AiIcon',
    props: {
        name: {
            type: String,
            default: ''
        }
    }
})
</script>

