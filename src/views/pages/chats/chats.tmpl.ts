export const chatsTmpl = `
    <form id="{{chatsFormId}}" class="{{styles.chatsFormClass}}">
        {{{linkToProfile}}}
        
        <input class="{{styles.chatsSearchBarClass}}" placeholder="{{chatsSearchBar}}">
        <a id="{{selectChatLegendId}}" class="{{styles.selectChatLegendClass}}">{{selectChatLegend}}</a>

        <div class="{{styles.chatsListClass}}">
            {{{chatsList}}}
        </div>
 
        {{{createChatText}}}

        <div class="{{styles.actionWindowClass}}">
            {{{chatCreationWindow}}}
        </div>

        <div class="{{styles.chatDeleteWindowClass}}">
            {{{chatDeleteWindow}}}
        </div>

        <div class="{{styles.addUserChatWindowClass}}">
            {{{addUserToChatWindow}}}
        </div>

        <div id="{{chatAreaId}}" class="{{styles.chatAreaClass}}">
            <a id="{{chatAreaNameId}}" class="{{styles.chatAreaNameClass}}"></a>
            <a id="{{chatAreaLastTimeId}}" class="{{styles.chatLastTimeClass}}"></a>
            {{{addUserText}}}
            {{{deleteChatText}}}
            
            {{{chatInput}}}
            {{{chatButton}}}
        </div>
    </form>
`;
