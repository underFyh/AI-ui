import {computed, getCurrentInstance, WritableComputedRef} from "vue";
import { ICheckboxProps } from './checkbox.types';

// 1. v-model属性通过计算属性处理
const useModelValue = (props: ICheckboxProps) => {
    const { emit } = getCurrentInstance();
    const model = computed({
        get() {
            return props.modelValue
        },
        set(val) {
            emit('update:modelValue', val)
        }
    })
    return model;
}

// 2. 根据modelValue值判断是否
const useCheckStatus = (props: ICheckboxProps, model: WritableComputedRef<unknown>) => {
    const isChecked = computed(() => {
        // 还会进行其他处理
        const value = model.value;
        return value;
    })
    return isChecked;
}

// 3. 绑定事件
const useChangeEvent = (props: ICheckboxProps) => {
    const { emit } = getCurrentInstance();
    const handlerChange = (e:InputEvent) => {
        const target = e.target as HTMLInputElement;
        let val:boolean = target.checked ? true : false;
        emit('change', val)
    }
    return handlerChange;
}

export const useCheckbox = (props: ICheckboxProps) => {
    let model = useModelValue(props);
    let isChecked = useCheckStatus(props, model);
    let handlerChange = useChangeEvent(props);

    return {
        model,
        isChecked,
        handlerChange
    }
}