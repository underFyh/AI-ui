import {App} from 'vue';
import Row from '../col/src/row';

Row.install = (app: App): void => {
    app.component(Row.name, Row);
}

type IWithInstall<T> = T & { install(app: App): void };
const _Row: IWithInstall<typeof Row> = Row;

export default _Row;
