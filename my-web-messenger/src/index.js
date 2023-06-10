import { Main } from './pages/Main/main';
import { NotFound } from './pages/NotFound/notFound';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    root.innerHTML = '';

    function getPage() {
        switch (window.location.pathname) {
            case '/':
                return Main();
            default:
                return NotFound();
        }
    }

    root.innerHTML = getPage();
})