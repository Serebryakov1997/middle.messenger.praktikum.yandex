import {
    Login,
    Register,
    Profile,
    ProfileChangeData,
    ProfileChangePasswd,
    PageError,
    Chats
} from './pages';

const page500 = PageError('500', 'Мы уже фиксим');

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app')!;

    function getPage() {
        switch (window.location.pathname) {
            case '/':
                return Login() || page500;
            case '/register':
                return Register() || page500;
            case '/chats':
                return Chats() || page500;
            case '/profile':
                return Profile() || page500;
            case '/profile_change_data':
                return ProfileChangeData() || page500;
            case '/profile_change_passwd':
                return ProfileChangePasswd() || page500;
            default:
                return PageError('404', 'Не туда попали') || page500;
        }
    }

    root.innerHTML = getPage();
})
