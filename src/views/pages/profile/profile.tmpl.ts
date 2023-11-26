export const profileTmpl = `
    <form class="{{styles.containerClass}}">
        <img name={{name}} class={{name}}>
        <p name={{displayFieldName}} class="{{styles.displayNameClass}}">{{displayName}}</p>
        <p class="{{styles.statusClass}}">{{statusName}}</p>
        
        {{{labelEmail}}}
        {{{inputEmail}}}

        {{{labelLogin}}}
        {{{inputLogin}}}

        {{{labelFirstName}}}
        {{{inputFirstName}}}

        {{{labelSecondName}}}
        {{{inputSecondName}}}

        {{{labelChatName}}}
        {{{inputChatName}}}

        {{{labelPhone}}}
        {{{inputPhone}}}

        {{{changeDataLink}}}
        {{{changePasswdLink}}}
        {{{logoutLink}}}
    </form>
`;


// backup
// export const profileTmpl = `
//     <form>
//         <div class="{{styles.containerClass}}">
//             <img name={{name}} class={{name}}>
//             <p name={{displayFieldName}} class="{{styles.displayNameClass}}">{{displayName}}</p>
//             <p class="{{styles.statusClass}}">{{statusName}}</p>
            
//             {{{labelEmail}}}
//             {{{inputEmail}}}

//             {{{labelLogin}}}
//             {{{inputLogin}}}

//             {{{labelFirstName}}}
//             {{{inputFirstName}}}

//             {{{labelSecondName}}}
//             {{{inputSecondName}}}

//             {{{labelChatName}}}
//             {{{inputChatName}}}

//             {{{labelPhone}}}
//             {{{inputPhone}}}

//             {{{changeDataLink}}}
//             {{{changePasswdLink}}}
//             {{{logoutLink}}}
//         </div>
//     </form>
// `;

