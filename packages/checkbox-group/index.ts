import {App} from 'vue';
import CheckboxGroup from '../checkbox/src/checkboxGroup.vue';

CheckboxGroup.install = (app: App): void => {
    app.component(CheckboxGroup.name, CheckboxGroup);
}

type IWithInstall<T> = T & { install(app: App): void };
const _CheckboxGroup: IWithInstall<typeof CheckboxGroup> = CheckboxGroup;

export default _CheckboxGroup;