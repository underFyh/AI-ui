import { App } from 'vue';
import Button from '@ai-ui/button';
import Icon from '@ai-ui/icon';

const subcomponents = [
    Button,
    Icon
]

// 全局注册所有的子组件
const install = (app: App): void => {
    subcomponents.forEach(component => {
        app.component(component.name, component)
    })
}


export default {
    install
}
