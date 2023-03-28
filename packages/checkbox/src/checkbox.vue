<template>
    <div class="ai-checkbox">
        <span class="ai-check__input">
            <input type="checkbox" v-model="model" :checked="isChecked" @change="handlerChange">
        </span>
        <span class="ai-checkbox-label">
            <slot></slot>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCheckbox } from "./useCheckbox";

export default defineComponent({
    name: 'AiCheckbox',
    props: {
        name: String,
        checked: Boolean,
        indeterminate: Boolean,
        disabled: Boolean,
        label: [String, Number, Boolean],
        modelValue: [String, Number, Boolean]
    },
    emits: ['update:modelValue', 'change'],
    setup(props) {
        return useCheckbox(props);
    }
})
</script>