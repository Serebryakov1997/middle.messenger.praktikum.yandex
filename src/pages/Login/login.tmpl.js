export const loginTmpl = `
    <div class="{{styles.containerClass}}">
        <div class="{{styles.headerClass}}">{{headerName}}</div>
        <form action={{buttonLink}}>
            {{{inputLogin}}}
            {{{inputPasswd}}}
            {{{loginButton}}}
        </form>
        <a class="{{styles.underButtonClass}}" href="{{registerLink}}">{{underButtonText}}</a>
    </div>
`;
