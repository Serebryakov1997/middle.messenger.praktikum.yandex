export const registerTmpl = `
    <div class="{{styles.containerClass}}">
        <div class="{{styles.headerClass}}">{{headerName}}</div>
        {{{inputEmail}}}
        {{{inputLogin}}}
        {{{inputFirstName}}}
        {{{inputLastName}}}
        {{{inputFhoneNumber}}}
        {{{inputPasswd}}}
        {{{inputPasswdAgain}}}
        {{{registerButton}}}
        <a class="{{styles.underButtonClass}}" href="{{loginLink}}">{{underButtonText}}</a>
    </div>
`;