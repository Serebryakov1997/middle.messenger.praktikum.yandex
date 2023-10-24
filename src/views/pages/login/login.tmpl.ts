export const loginTmpl = `
<form action="{{buttonLink}}">
    <div class="{{styles.containerClass}}">
        <div class="{{styles.headerClass}}">{{headerName}}</div>
        {{{labelLogin}}}
        {{{inputLogin}}}
        {{{validErrorLogin}}}
        {{{labelPasswd}}}
        {{{inputPasswd}}}
        {{{validErrorPasswd}}}
        {{{loginButton}}}
        {{{underButtonLink}}}
    </div>
</form>
`;
