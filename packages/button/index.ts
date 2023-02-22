import {App} from 'vue';
import Button from './src/button.vue';

Button.install = (app: App): void => {
}


type IWithInstall<T> = T & { install(app: App): void };
const _Button: IWithInstall<typeof Button> = Button;

export default _Button;
