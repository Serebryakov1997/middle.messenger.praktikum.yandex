export const selectedChatAreaTmpl = `
<div id="{{chatAreaId}}" class="{{styles.chatAreaClass}}">
    <a id="{{chatAreaNameId}}" class="{{styles.chatAreaNameClass}}">{{title}}</a>
    <a id="{{chatAreaLastTimeId}}" class="{{styles.chatLastTimeClass}}">{{time}}</a>
    {{{addUserText}}}
    {{{deleteUserText}}}
    {{{deleteChatText}}}

    {{{chatDeleteWindow}}}
    {{{addUserToChatWindow}}}

    <div class="{{styles.msgListClass}}">
        {{{msgsList}}}
    </div>

    {{{chatInput}}}

    <div class="{{styles.validErrMsgClass}}">
        {{{validErrorMsg}}}
    </div>
    {{{chatButton}}}
</div>
`;
