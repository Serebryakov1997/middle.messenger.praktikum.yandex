export const chatDeleteWindowTmpl = `
    <form class="{{styles.chatDeleteWindowClass}}" id="{{chatDeleteWindowId}}">
        <a class="{{styles.chatDeleteTextClass}}">{{chatDeleteText}} {{chatTitle}}</a>
        {{{yesButton}}}
        {{{noButton}}}
    </form>
`;
