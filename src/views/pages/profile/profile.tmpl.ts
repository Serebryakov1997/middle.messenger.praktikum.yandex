export const profileTmpl = `
    <form class="{{styles.containerClass}}">
        <img src="{{imgRef}}" name={{name}} class={{name}}>
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

        {{{backToChats}}}
        {{{changeDataLink}}}
        {{{changePasswdLink}}}
        {{{logoutLink}}}
    </form>
`;
