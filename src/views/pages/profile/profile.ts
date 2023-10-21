import './profile.css';
import { Block, DEV_LINK_ADDRESS } from '../../../utils';
import { profileTmpl } from './profile.tmpl';
import { ProfileField } from '../../components';

const ProfileFieldStyles = {
    profileFieldClass: 'profile-field',
    labelClass: 'profile-label',
    inputClass: 'profile-input',
    profileFieldType: 'text'
}


export class Profile extends Block {
    constructor() {
        super('form', {
            styles: {
                containerClass: 'profile-container',
                // cameraClass: 'camera-button',
                // buttonType: 'button',
                displayNameClass: 'display-name',
                statusClass: 'status',
                changeDataClass: 'change-data',
                changePasswordClass: 'change-passwd',
                logoutClass: 'logout',
            },
            name: 'avatar',
            dislpayFieldName: 'display_name',
            displayName: 'Иван',
            statusName: 'online',
            changeDataLink: `${DEV_LINK_ADDRESS}profile_change_data`,
            changeDataName: 'Изменить данные',
            changePasswordLink: `${DEV_LINK_ADDRESS}profile_change_passwd`,
            changePasswdName: 'Изменить пароль',
            toLoginLink: DEV_LINK_ADDRESS,
            logoutName: 'Выйти'
        });
    }


    protected init(): void {
        this.children = {
            // labelEmail: 
        }
    }

    render(): DocumentFragment {
        return this.compile(profileTmpl, this.props);
    }
}
