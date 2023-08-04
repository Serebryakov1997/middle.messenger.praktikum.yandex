export const notFoundTmpl = `
    <div class="{{styles.notFoundClass}}">
        <a class="{{styles.codeErrorClass}}">{{codeError}}</a>
        <a class="{{styles.codeErrorTextClass}}">{{codeErrorText}}</a>
        <a class="{{styles.linkToChatsClass}}" href="{{linkToChats}}">{{linkToChatsName}}</a>
    </div>
`;