export const loginTmpl = `
<form action={{buttonLink}}>
    <div class="{{styles.containerClass}}">
        <div class="{{styles.headerClass}}">{{headerName}}</div>
        {{{labelLogin}}}
        {{{inputLogin}}}
        {{{inputPasswd}}}
        {{{loginButton}}}
        <a class="{{styles.underButtonClass}}" href="{{registerLink}}">{{underButtonText}}</a>
    </div>
</form>
`;
