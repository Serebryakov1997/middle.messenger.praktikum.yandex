export const registerTmpl = `
    <div class="{{containerClass}}">
        <div class="{{headerClass}}">{{headerName}}</div>
        {{{inputEmail}}}
        {{{inputLogin}}}
        {{{inputFirstName}}}
        {{{inputLastName}}}
        {{{inputFhoneNumber}}}
        {{{inputPasswd}}}
        {{{inputPasswdAgain}}}
        {{{registerButton}}}
        <a class="{{underButtonClass}}" href="{{loginLink}}">{{underButtonText}}</a>
    </div>
`;