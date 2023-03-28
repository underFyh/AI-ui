export interface ICheckboxProps {
    name?: string   // input 属性
    label?: string | boolean | number // 标签 v-model为数组的时候
    modelValue: string | boolean | number // 双向绑定值
    indeterminate?: boolean // 是否半选
    disabled?: boolean // 是否禁用
    checked?: boolean // 是否选中
}