export const profileChangePasswdTmpl = `
    <form>
        <div class="{{styles.containerClass}}">
            <img name="{{avatarName}}" class="{{styles.avatarNameClass}}">
            {{{labelPasswd}}}
            {{{inputPasswd}}}
            {{{validErrorPasswd}}}

            {{{labelNewPasswd}}}
            {{{inputNewPasswd}}}
            {{{validErrorNewPasswd}}}

            {{{labelRepeatNewPasswd}}}
            {{{inputRepeatNewPasswd}}}
            {{{validErrorRepeatNewPasswd}}}

            {{{buttonSave}}}
        </div>
    </form>
`;
