export const profileChangeDataTmpl = `
    <form action="{{buttonLink}}">
        <div class="{{styles.containerClass}}">
            <img name="{{avatarName}}" class="{{styles.avatarNameClass}}">
            {{{labelEmail}}}
            {{{inputEmail}}}
            {{{validErrorEmail}}}

            {{{labelLogin}}}
            {{{inputLogin}}}
            {{{validErrorLogin}}}

            {{{labelFirstName}}}
            {{{inputFirstName}}}
            {{{validErrorFirstName}}}

            {{{labelSecondName}}}
            {{{inputSecondName}}}
            {{{validErrorSecondName}}}

            {{{labelChatName}}}
            {{{inputChatName}}}
            {{{validErrorChatName}}}

            {{{labelPhone}}}
            {{{inputPhone}}}
            {{{validErrorPhone}}}

            {{{buttonSave}}}
        </div>
    </form>
`;
