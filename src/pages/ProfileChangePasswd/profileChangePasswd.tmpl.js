export const profileChangePasswdTmpl = `
    <div class={{styles.containerClass}}>
        <img name={{avatarName}} class={{avatarName}}>
        <form>
            {{{oldPasswd}}}
            {{{newPasswd}}}
            {{{repeatNewPasswd}}}
            {{{buttonSave}}}
        </form>
    </div>
`;
