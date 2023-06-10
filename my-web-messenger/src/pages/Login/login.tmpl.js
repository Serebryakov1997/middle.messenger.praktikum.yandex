export const loginTmpl = `
    <form class="login-form">
        <input
            type="text"
            class="text-input login-form__username-input"
        />
        <div class="login-form__buttons">
            <button class="login-form__submit button">
                <span class="button__capture button__capture_red">{{name}}</span>
            </button>
            <button class="button__active_disabled login-form__reset button">
                RESET
            </button>
    </form>
`;