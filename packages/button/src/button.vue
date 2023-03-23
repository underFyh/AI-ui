<template>
    <button :class="className" @click="handlerInnerClick">
        <i v-if="loading" class="ai-icon-loading2"></i>
        <i v-if="icon && !loading" :class="icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
type IButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default';
export default defineComponent({
    name: 'AiButton',
    props: {
        type: {
            type: String as PropType<IButtonType>,
            default: 'default',
            validator: (val: string) => ['primary', 'success', 'info', 'warning', 'danger', 'default'].includes(val)
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: Boolean,
        round: Boolean,
        loading: Boolean
    },
    emits: ['click'],
    setup(props, ctx) {
        const className = computed(() => [
            'ai-button',
            'ai-button--' + props.type,
            {
                'is-disabled': props.disabled,
                'is-loading': props.loading,
                'is-round': props.round
            }
        ])

        const handlerInnerClick = (e) => {
            ctx.emit('click', e);
        }

        return {
            className,
            handlerInnerClick
        }
    }
})
</script>
