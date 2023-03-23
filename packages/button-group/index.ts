import {App} from 'vue';
import ButtonGroup from '../button/src/buttonGroup.vue';

ButtonGroup.install = (app: App): void => {
    app.component(ButtonGroup.name, ButtonGroup);
}

type IWithInstall<T> = T & { install(app: App): void };
const _ButtonGroup: IWithInstall<typeof ButtonGroup> = ButtonGroup;

export default _ButtonGroup;
