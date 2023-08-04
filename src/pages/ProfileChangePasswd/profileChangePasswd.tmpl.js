export const profileChangePasswdTmpl = `
    <main>
        <div class={{styles.containerClass}}>
            <img name={{avatarName}} class={{avatarName}}>
            {{{oldPasswd}}}
            {{{newPasswd}}}
            {{{repeatNewPasswd}}}
            {{{buttonSave}}}
        </div>
    </main>
`;
