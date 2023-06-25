import './avatarLoader.css';
import { avatarLoaderTmpl } from './avatarLoader.tmpl';
import Handlebars from 'handlebars';


const styles = {
    avatarLoaderClass: 'avatar-loader',
    avatarLoaderId: 'avatar-loader-id'
};


export const AvatarLoader = () => Handlebars.compile(avatarLoaderTmpl)({
    styles: styles,
});