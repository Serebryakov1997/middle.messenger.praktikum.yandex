import { Main, Login, Register, Plug, Profile, ProfileChangeData } from './pages';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    function getPage() {
        switch (window.location.pathname) {
            case '/':
                return Main();
            case '/login':
                return Login();
            case '/register':
                return Register();
            case '/chats':
                return Plug();
            case '/profile':
                return Profile();
            case '/profile_change_data':
                return ProfileChangeData();
        }
    }

    root.innerHTML = getPage();
})