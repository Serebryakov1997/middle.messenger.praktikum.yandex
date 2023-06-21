import './profileChangeData.css';
import { profileChangeDataTmpl } from './profileChangeData.tmpl';
import { Button, ProfileChangePasswdField, ProfileField } from '../../components';
import Handlebars from 'handlebars';
import { DEV_LINK_ADDRESS, getInputValue, setInputValue } from '../../utils';

console.log('value from user: ', getInputValue('password-input'));
export const ProfileChangeData = () => Handlebars.compile(profileChangeDataTmpl)({
    containerClass: 'profile-container',
    avatarName: 'avatar',
    // emailField: ProfileChangePasswdField(
    //     'email',
    //     'email-input',
    //     'Почта',
    //     '',
    //     // setInputValue('email-input', )
    // )
    // emailField: ProfileField('email', 'Почта', 'pochta@yandex.ru'),
    // loginField: ProfileField('login', 'Логин', 'ivanivanov'),
    // firstNameField: ProfileField('first_name', 'Имя', 'Иван'),
    // secondNameField: ProfileField('second_name', 'Фамилия', 'Иванов'),
    // displayNameField: ProfileField('display_name', 'Имя в чате', 'Иван'),
    // phoneField: ProfileField('phone', 'Телефон', '+7(909)9673030'),
    buttonSave: Button('button-save', DEV_LINK_ADDRESS + 'profile', 'Сохранить')
});