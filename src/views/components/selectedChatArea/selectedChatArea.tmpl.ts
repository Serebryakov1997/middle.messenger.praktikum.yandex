export const selectedChatAreaTmpl = `
<div id="{{chatAreaId}}" class="{{styles.chatAreaClass}}">
    <a id="{{chatAreaNameId}}" class="{{styles.chatAreaNameClass}}">{{title}}</a>
    <a id="{{chatAreaLastTimeId}}" class="{{styles.chatLastTimeClass}}">{{time}}</a>
    {{{addUserText}}}
    {{{deleteUserText}}}
    {{{deleteChatText}}}

    <div class="{{styles.msgListClass}}">
        {{{msgsList}}}
    </div>

    {{{chatDeleteWindow}}}
    {{{addUserToChatWindow}}}
    {{{deleteUserFromChatWindow}}}

    {{{chatInput}}}

    <div class="{{styles.validErrMsgClass}}">
        {{{validErrorMsg}}}
    </div>
    {{{chatButton}}}
</div>
`;
