import { Main } from './pages/Main/main';
import { Login } from './pages/Login/login';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    function getPage() {
        switch (window.location.pathname) {
            case '/':
                return Main();
            case '/login':
                return Login();
        }
    }

    root.innerHTML = getPage();
})