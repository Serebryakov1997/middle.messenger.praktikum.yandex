export const profileTmpl = `
    <div class="{{styles.containerClass}}">
        <img name={{name}} class={{name}}>
        <img src="../src/pages/Profile/img/camera.png" class="{{styles.cameraClass}}">
        <p name={{displayFieldName}} class="{{styles.displayNameClass}}">{{displayName}}</p>
        <p class="{{styles.statusClass}}">{{statusName}}</p>
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
`;