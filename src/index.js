import { Main, Login, Register, Chats } from './pages';


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
                return Chats();
        }
    }

    root.innerHTML = getPage();
})