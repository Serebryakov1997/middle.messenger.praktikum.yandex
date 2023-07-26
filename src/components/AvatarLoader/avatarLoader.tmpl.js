export const avatarLoaderTmpl = `
    <form id="{{styles.avatarLoaderId}}" class="{{styles.avatarLoaderClass}}">
        <div class="{{styles.dashedBorderClass}}">
            <a class="{{styles.textClass}}">{{text1Name}}</a>
            <a class="{{styles.textOrClass}}">{{textOrName}}</a>
            {{{avatarButton}}}
        </div>
    </form>
`;