export const profileChangeDataTmpl = `
    <form>
        <div class="{{styles.containerClass}}">
            {{{avatarImg}}}
            {{{changeAvatarText}}}
            {{{avatarLoader}}}

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
