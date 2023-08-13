export const profileChangePasswdTmpl = `
    <form action="{{buttonLink}}">
        <div class={{styles.containerClass}}>
            <img name={{avatarName}} class={{avatarName}}>
            {{{oldPasswd}}}
            {{{newPasswd}}}
            {{{repeatNewPasswd}}}
            {{{buttonSave}}}
        </div>
    </form>
`;
