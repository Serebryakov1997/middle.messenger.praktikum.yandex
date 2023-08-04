export const pageErrorTmpl = `
    <main>
        <div class="{{styles.pageErrorClass}}">
            <a class="{{styles.codeErrorClass}}">{{codeError}}</a>
            <a class="{{styles.codeErrorTextClass}}">{{codeErrorText}}</a>
            <a class="{{styles.linkToChatsClass}}" href="{{linkToChats}}">{{linkToChatsName}}</a>
        </div>
    </main>
`;
