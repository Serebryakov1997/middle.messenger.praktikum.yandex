export const loginTmpl = `
<form class="{{styles.containerClass}}">
    <div class="{{styles.headerClass}}">{{headerName}}</div>
    {{{labelLogin}}}
    {{{inputLogin}}}
    {{{validErrorLogin}}}
    {{{labelPasswd}}}
    {{{inputPasswd}}}
    {{{validErrorPasswd}}}
    {{{loginButton}}}
    {{{underButtonLink}}}
</form>
`;

// backup
// export const loginTmpl = `
// <form>
//     <div class="{{styles.containerClass}}">
//         <div class="{{styles.headerClass}}">{{headerName}}</div>
//         {{{labelLogin}}}
//         {{{inputLogin}}}
//         {{{validErrorLogin}}}
//         {{{labelPasswd}}}
//         {{{inputPasswd}}}
//         {{{validErrorPasswd}}}
//         {{{loginButton}}}
//         {{{underButtonLink}}}
//     </div>
// </form>
// `;

