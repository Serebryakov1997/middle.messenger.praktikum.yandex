import './avatarImgChanges.css';
import { Block } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import { ClickableText } from '../clickableText';
import { avatarImgChangedTmpl } from './avatarImgChanged.tmpl';

export class AvatarImgChangedBase extends Block {
    constructor() {
        super({
            styles: {
                avatarNameClass: 'avatar'
            },
            avatarName: 'avatar',
            name: 'avatar'
        });
    }

    protected init(): void {
        this.children.clickableText = new ClickableText({
            clickableText: 'Загрузить файл',
            events: {
                click: () => {
                    (<Block>this.children.avatarLoader).show();
                }
            }
        });
    }

    render(): DocumentFragment {
        return this.compile(avatarImgChangedTmpl, this.props);
    }

}


const mapStateToProps = (state: IState) => ({
    imgRef: 'https://ya-praktikum.tech/api/v2/resources/' + state.user?.avatar
});

export const AvatarChanged = withStore(mapStateToProps)(AvatarImgChangedBase);
