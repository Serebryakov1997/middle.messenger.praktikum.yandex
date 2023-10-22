export const errorTmpl = `
<form class="{{styles.erroFormClass}}">
    <div class="{{styles.payloadClass}}">
        <div class="{{styles.codeErrorClass}}">{{codeError}}</div>
        <div class="{{styles.codeErrorTextClass}}">{{codeErrorText}}</div>
        <a class="{{styles.linkToChatsClass}}" href="{{linkToChats}}">{{linkToChatsName}}</a>
    </div>
</form>
`;


// export const errorTmpl = `
// <form class="{{styles.pageErrorClass}}">
//     <a class="{{styles.codeErrorClass}}">{{codeError}}</a>
//     <a class="{{styles.codeErrorTextClass}}">{{codeErrorText}}</a>
//     <a class="{{styles.linkToChatsClass}}" href="{{linkToChats}}">{{linkToChatsName}}</a>
// </form>
// `;
