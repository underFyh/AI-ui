import {App} from 'vue';
import Col from './src/col';

Col.install = (app:App):void => {
    app.component(Col.name, Col);
}

type IWithInstall<T> = T & { install(app: App): void };
const _Col: IWithInstall<typeof Col> = Col;

export default _Col;