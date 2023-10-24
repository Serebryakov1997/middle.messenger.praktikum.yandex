export const errorTmpl = `
    <form class="{{styles.errorFormClass}}">
        <div class="{{styles.payloadClass}}">
            <p class="{{styles.codeErrorClass}}">{{codeError}}</p>
            <p class="{{styles.codeErrorTextClass}}">{{codeErrorText}}</p>
            <a class="{{styles.linkToChatsClass}}" href="{{linkToChats}}">{{linkToChatsName}}</a>
        </div>
    </form>
`;
