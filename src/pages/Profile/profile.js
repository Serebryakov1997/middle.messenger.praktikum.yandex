import './profile.css';
import { profileTmpl } from './profile.tmpl';
import Handlebars from 'handlebars';


export const Profile = () => Handlebars.compile(profileTmpl)({
    containerClass: 'profile-container',
    name: 'avatar'
});