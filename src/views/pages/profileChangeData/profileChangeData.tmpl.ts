export const profileChangeDataTmpl = `
    <form>
        <div class="{{styles.containerClass}}">
            <img src="{{imgRef}}" name="{{avatarName}}" class="{{styles.avatarNameClass}}">
                {{{clickableText}}}
            </img>
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
