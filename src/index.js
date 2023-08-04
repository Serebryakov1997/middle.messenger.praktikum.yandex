import {
    Login,
    Register,
    Plug,
    Profile,
    ProfileChangeData,
    ProfileChangePasswd,
    NotFound
} from './pages';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    function getPage() {
        switch (window.location.pathname) {
            case '/':
                return Login();
            case '/register':
                return Register();
            case '/chats':
                return Plug();
            case '/profile':
                return Profile();
            case '/profile_change_data':
                return ProfileChangeData();
            case '/profile_change_passwd':
                return ProfileChangePasswd();
            default:
                return NotFound();
        }
    }

    root.innerHTML = getPage();
})