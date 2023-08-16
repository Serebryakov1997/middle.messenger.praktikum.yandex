export const profileChangeDataTmpl = `
    <form action={{buttonLink}}>
        <div class="{{styles.containerClass}}">
            <img name={{avatarName}} class={{avatarName}}>
            {{{emailField}}}
            {{{loginField}}}
            {{{firstNameField}}}
            {{{secondNameField}}}
            {{{displayNameField}}}
            {{{phoneField}}}
            {{{buttonSave}}}
        </div>
    </form>
`;
