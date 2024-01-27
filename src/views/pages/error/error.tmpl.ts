export const errorTmpl = `
    <form class="{{styles.errorFormClass}}">
        <div class="{{styles.payloadClass}}">
            <p class="{{styles.codeErrorClass}}">{{codeError}}</p>
            <p class="{{styles.codeErrorTextClass}}">{{codeErrorText}}</p>
            {{{linkToChats}}}
        </div>
    </form>
`;
