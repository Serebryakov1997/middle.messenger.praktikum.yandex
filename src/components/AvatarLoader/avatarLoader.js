import './avatarLoader.css';
import { avatarLoaderTmpl } from './avatarLoader.tmpl';
import Handlebars from 'handlebars';


const styles = {
    avatarLoaderClass: 'avatar-loader',
    avatarLoaderId: 'avatar-loader-id',
    dashedBorderClass: 'dash-border',
    textClass: 'text-class'
};


export const AvatarLoader = () => Handlebars.compile(avatarLoaderTmpl)({
    styles: styles,
    text1Name: 'Перетащите файл сюда'
});