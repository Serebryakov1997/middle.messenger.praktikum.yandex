export const profileTmpl = `
    <form>
        <div class="{{styles.containerClass}}">
            <img name={{name}} class={{name}}>
            <button class="{{styles.cameraClass}}" type="{{styles.buttonType}}" onclick="{{displayBlock}}"></button>
            <p name={{displayFieldName}} class="{{styles.displayNameClass}}">{{displayName}}</p>
            <p class="{{styles.statusClass}}">{{statusName}}</p>
            {{{avatarBlock}}}
            {{{emailField}}}
            {{{loginField}}}
            {{{firstNameField}}}
            {{{secondNameField}}}
            {{{displayNameField}}}
            {{{phoneField}}}
            <a class="{{styles.changeDataClass}}" href="{{changeDataLink}}">{{changeDataName}}</a>
            <a class="{{styles.changeDataClass}} {{styles.changePasswordClass}}" href="{{changePasswordLink}}">{{changePasswdName}}</a>
            <a class="{{styles.changeDataClass}} {{styles.logoutClass}}" href="{{toLoginLink}}">{{logoutName}}</a>
        </div>
    </form>
`;
