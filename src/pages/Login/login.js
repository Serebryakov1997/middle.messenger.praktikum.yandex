import './login.css';
import { Input } from '../../components/Input/input';
import { loginTmpl } from './login.tmpl';
import Handlebars from 'handlebars';
import { Label } from '../../components/Label/label';

export const Login = () => Handlebars.compile(loginTmpl)({
    containerClass: 'login-container',
    headerClass: 'login-header',
    headerName: 'Вход',
    loginLabel: Label('Логин'),
    inputLogin: Input('Логин', 'ivanivanov', 'login-input__login'),
    inputPasswd: Input('Пароль', '', 'login-input__password')
});

{/* <div class={{ styles.login-header }}>Вход</div>
<form class={{ styles.login-form }}>
    {{{labelLogin}}}
    {{{inputLogin}}}
</form>
</div> */}