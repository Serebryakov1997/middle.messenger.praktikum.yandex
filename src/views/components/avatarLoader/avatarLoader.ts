import './avatarLoader.css';
import { Block } from '../../../utils';
import { avatarLoaderTmpl } from './avatarLoader.tmpl';
import { Button } from '../button';


interface AvatarLoaderProps {
    [key: string]: string | {};
    styles: {
        avatarLoaderClass: string;
        dashedBorderClass: string;
        textClass: string;
        textOrClass: string;
    }
    text1Name: string;
    textOrName: string;
}


export class AvatarLoader extends Block {
    constructor(props: AvatarLoaderProps) {
        super('div', props);
    }

    // protected init(): void {
    //     this.children.avatarButton = new Button('camera-button', {
    //         buttonName: 'Выберите файл',
    //         styles: {
    //             buttonClass: 'camera-button',
    //         },
    //         events: {
    //             click: () => { }
    //         }
    //     })
    // }

    render(): DocumentFragment {
        return this.compile(avatarLoaderTmpl, this.props);
    }
}
