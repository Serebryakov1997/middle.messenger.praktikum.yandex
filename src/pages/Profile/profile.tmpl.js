export const profileTmpl = `
    <div class="{{containerClass}}">
        <img name={{name}} class={{name}}>
        <img src="../src/pages/Profile/img/camera.png" class="{{cameraClass}}">
        <p name={{displayFieldName}} class="{{displayNameClass}}">{{displayName}}</p>
        <p class="{{statusClass}}">{{statusName}}</p>
        {{{emailField}}}
        {{{loginField}}}
        {{{firstNameField}}}
        {{{secondNameField}}}
        {{{displayNameField}}}
        {{{phoneField}}}
        <a class="{{changeDataClass}}" href="{{changeDataLink}}">{{changeDataName}}</a>
        <a class="{{changeDataClass}} {{changePasswordClass}}" href="{{changePasswordLink}}">{{changePasswdName}}</a>
        <a class="{{changeDataClass}} {{logoutClass}}" href="{{toLoginLink}}">{{logoutName}}</a>
    </div>
`;