import './avatarLoader.css';
import { DEV_LINK_ADDRESS } from '../../utils';
import { Button } from '../Button';
import { avatarLoaderTmpl } from './avatarLoader.tmpl';
import Handlebars from 'handlebars';


const styles = {
    avatarLoaderClass: 'avatar-loader',
    avatarLoaderId: 'avatar-loader-id',
    dashedBorderClass: 'dash-border',
    textClass: 'text-class',
    textOrClass: 'text-or-class'
};


export const AvatarLoader = () => Handlebars.compile(avatarLoaderTmpl)({
    styles: styles,
    text1Name: 'Перетащите файл сюда',
    textOrName: 'или',
    avatarButton: Button('', DEV_LINK_ADDRESS + 'profile', 'Выберите файл')
});