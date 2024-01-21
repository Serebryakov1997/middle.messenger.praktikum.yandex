import './avatarImg.css';
import { RecourcesController } from '../../../controllers/resources-controller';
import { Block } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import { avatarImgTmpl } from './avatarImg.tmpl';


export class AvatarBase extends Block {
    constructor() {
        super({
            name: 'avatar'
        });
    }

    render(): DocumentFragment {
        RecourcesController.getStaticFiles();
        return this.compile(avatarImgTmpl, this.props);
    }
}


const mapStateToProps = (state: IState) => ({
    imgRef: 'https://ya-praktikum.tech/api/v2/resources/' + state.user?.avatar
});

export const Avatar = withStore(mapStateToProps)(AvatarBase);
