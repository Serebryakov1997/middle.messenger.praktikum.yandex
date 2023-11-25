import { Block } from '../Block/block';
import { renderDOM } from '../../utils/renderDOM';

export class Route {

    _pathname: string;
    _blockClass: any;
    _block: Block | undefined;
    // _props: Record<string, unknown>;

    constructor(pathname: string, view: any) {
        this._pathname = pathname;
        this._blockClass = view;
        // this._props = props;
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
        // if (!this._block && this._blockClass) {
        //     // console.log('this._block: ', this._block);
        //     // console.log('this._blockClass: ', this._blockClass);
        //     this._block = this._blockClass;
        //     renderDOM('#app', this._block!);
        //     return;
        // }

        if (typeof this._blockClass === 'function') {
            this._block = new this._blockClass();
            renderDOM('#app', this._block!);
            // return;
            this._block!.show();
        } else {
            this._block = this._blockClass;
            renderDOM('#app', this._block!);
            // return;
            this._block!.show();
        }

    }
}
