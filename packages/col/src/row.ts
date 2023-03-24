import {computed, defineComponent, h, provide} from 'vue';

export default defineComponent({
    name: 'AiRow',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        gutter: {
            type: Number,
            default: 10
        },
        justify: {
            type: String,
            default: 'start', // flex-start flex-end space-around
        }
    },
    setup(props, {slots}) {
        provide('AiRow', props.gutter);

        const className = computed(() => [
            'ai-row',
            props.justify !== 'start' ? `is-justify-${props.justify}` : ''
        ])
        const style = computed(() => {
            let res = {
                marginLeft: '',
                marginRight: ''
            }
            if (props.gutter) {
                res.marginLeft = res.marginRight = `-${props.gutter / 2}px`
            }
            return res
        })
        // ?.语法是ts中的链判断运算符, Vue3中的插槽是一个函数必须进行调用才能返回
        return () => h(props.tag, {class: className.value, style: style.value}, slots.default?.());
    }
})