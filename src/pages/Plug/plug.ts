import './plug.css';
import { plugTmpl } from './plug.tmpl';
import { DEV_LINK_ADDRESS } from '../../utils';
import Handlebars from 'handlebars';


const styles = {
    containerClass: 'plug-container',
    headerClass: 'plug-header',
    linkClass: 'link',
};


export const Plug = () => Handlebars.compile(plugTmpl)({
    styles: styles,
    headerName: 'Сайт в разработке...',
    profileLink: DEV_LINK_ADDRESS + 'profile',
    linkName: 'Перейти в профиль'
});
