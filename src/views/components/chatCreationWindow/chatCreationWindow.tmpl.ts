export const chatCreationWindowTmpl = `
    <form class="{{styles.chatCreationWindowClass}} {{styles.generalClass}}" id="{{chatCreationWindowId}}">
        <a class="{{styles.chatCreationTextClass}}">{{chatCreationText}}</a>
        {{{closeButton}}}
        {{{chatCreationLabel}}}
        {{{chatCreationInput}}}
        {{{validErrorChatName}}}
        {{{chatCreationButton}}}
    </form>
`;
