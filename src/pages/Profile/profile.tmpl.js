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
        <p class="{{changeLineClass}}">{{changeDataName}}</p>
        <p class="{{changeLineClass}}">{{changePasswdName}}</p>
        <p class="{{changeLineClass}} {{logout}}">{{logoutName}}</p>
    </div>
`;