import { App } from 'vue';
import Button from '@ai-ui/button';
import Icon from '@ai-ui/icon';
import ButtonGroup from '@ai-ui/button-group'
import Row from '@ai-ui/row';
import Col from '@ai-ui/col';
import Checkbox from '@ai-ui/checkbox';
import CheckboxGroup from '@ai-ui/checkbox-group';


const subcomponents = [
    Button,
    ButtonGroup,
    Icon,
    Row,
    Col,
    Checkbox,
    CheckboxGroup
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
