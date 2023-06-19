import { DEV_LINK_ADDRESS } from '../../utils';
import './plug.css';
import { plugTmpl } from './plug.tmpl';
import Handlebars from 'handlebars';


export const Plug = () => Handlebars.compile(plugTmpl)({
    containerClass: 'plug-container',
    headerClass: 'plug-header',
    headerName: 'Сайт в разработке...',
    linkClass: 'link',
    profileLink: DEV_LINK_ADDRESS + 'profile',
    linkName: 'Перейти в профиль'
});