import { Login } from './pages/Login/login';
import { Main } from './pages/Main/main';
import { NotFound } from './pages/NotFound/notFound';
// import './pages/Login/login.css';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    root.innerHTML = '';

    function getPage() {
        switch (window.location.pathname) {
            case '/login':
                return Login();
            case '/':
                return Main();
            default:
                return NotFound();
        }
    }

    root.innerHTML = getPage();
})