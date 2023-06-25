export const avatarLoaderTmpl = `
    <form id="{{styles.avatarLoaderId}}" class="{{styles.avatarLoaderClass}}">
        <div class="{{styles.dashedBorderClass}}">
            <a class="{{styles.textClass}}">{{text1Name}}</a>
            <a class="{{styles.textClass}} {{styles.textOrClass}}">{{textOrName}}</a>
            <button class="{{styles.avatarButtonClass}}">{{avatarButton}}</button>
        </div>
    </form>
`;