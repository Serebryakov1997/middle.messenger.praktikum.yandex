export const registerTmpl = `
    <div class="{{styles.containerClass}}">
        <div class="{{styles.headerClass}}">{{headerName}}</div>
        <form action="{{buttonLink}}">
            {{{inputEmail}}}
            {{{inputLogin}}}
            {{{inputFirstName}}}
            {{{inputLastName}}}
            {{{inputFhoneNumber}}}
            {{{inputPasswd}}}
            {{{inputPasswdAgain}}}
            {{{registerButton}}}
        </form>
        <a class="{{styles.underButtonClass}}" href="{{loginLink}}">{{underButtonText}}</a>
    </div>
`;
