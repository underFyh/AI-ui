import {computed, defineComponent, h, inject} from 'vue';

export default defineComponent({
    name: 'AiCol',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    setup(props, {slots}) {
        const gutter = inject('AiRow', 0);
        const style = computed(() => {
            if (gutter !== 0) {
                return {
                    paddingLeft: gutter/2 + 'px',
                    paddingRight: gutter/2 + 'px'
                }
            }
            return {}
        })
        const className = computed(() => {
            const res = [];
            const pos = ['span', 'offset'] as const;
            pos.forEach(i => {
                const size = props[i];
                if (typeof size === 'number' && size > 0) {
                    res.push(`ai-col-${i}-${props[i]}`)
                }
            });
            return [
                'ai-col',
                ...res
            ]
        })

        return () => h(props.tag, { class: className.value, style: style.value }, slots.default?.());
    }
})