import { Block } from './block';
import { renderDOM } from './renderDOM';

export class Route {

    _pathname: string;
    _blockClass: any;
    _block: Block | undefined;
    _props: Record<string, unknown>;

    constructor(pathname: string, view: any, props: Record<string, unknown>) {
        this._pathname = pathname;
        this._blockClass = view;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        if (pathname === this._pathname) {
            return true;
        }
        return false;
    }

    render() {
        if (!this._block) {

            this._block = this._blockClass;
            renderDOM('#app', this._block!);
            return;
        }

        this._block.show();
    }
}
