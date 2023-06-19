export const loginTmpl = `
    <div class="{{containerClass}}">
        <div class="{{headerClass}}">{{headerName}}</div>
        {{{inputLogin}}}
        {{{inputPasswd}}}
        {{{loginButton}}}
        <a class="{{underButtonClass}}" href="{{registerLink}}">{{underButtonText}}</a>
    </div>
`;