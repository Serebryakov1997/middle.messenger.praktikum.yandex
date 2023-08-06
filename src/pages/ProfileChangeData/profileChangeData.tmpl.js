export const profileChangeDataTmpl = `
    <div class="{{styles.containerClass}}">
        <img name={{avatarName}} class={{avatarName}}>
        <form action={{buttonLink}}>
            {{{emailField}}}
            {{{loginField}}}
            {{{firstNameField}}}
            {{{secondNameField}}}
            {{{displayNameField}}}
            {{{phoneField}}}
            {{{buttonSave}}}
        </form>
    </div>
`;
