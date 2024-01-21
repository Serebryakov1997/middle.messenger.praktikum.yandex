export const chatsTmpl = `
    <form id="{{chatsFormId}}" class="{{styles.chatsFormClass}}">
        {{{linkToProfile}}}
        
        <input class="{{styles.chatsSearchBarClass}}" placeholder="{{chatsSearchBar}}">
        <a id="{{selectChatLegendId}}" class="{{styles.selectChatLegendClass}}">{{selectChatLegend}}</a>
        
        {{{chatsList}}}
 
        {{{createChatText}}}
        {{{chatCreationWindow}}}
        
        <div id="{{chatAreaId}}" class="{{styles.chatAreaClass}}">
            <a id="{{chatAreaNameId}}" class="{{styles.chatAreaNameClass}}"></a>
            <a id="{{chatAreaLastTimeId}}" class="{{styles.chatLastTimeClass}}"></a>
            {{{chatInput}}}
            {{{chatButton}}}
        </div>
    </form>
`;
