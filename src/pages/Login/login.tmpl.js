export const loginTmpl = `
    <div class={{ styles.login-container }}>
        <div class={{ styles.login-header }}>Вход</div>
            <form class={{ styles.login-form }}>
                {{{labelLogin}}}
                {{{inputLogin}}}
            </form>
        </div>
    </div>
`;