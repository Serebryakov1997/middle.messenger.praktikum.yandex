export const loginTmpl = `
    <div class="{{styles.containerClass}}">
        <div class="{{styles.headerClass}}">{{headerName}}</div>
        {{{inputLogin}}}
        {{{inputPasswd}}}
        {{{loginButton}}}
        <a class="{{styles.underButtonClass}}" href="{{registerLink}}">{{underButtonText}}</a>
    </div>
`;
