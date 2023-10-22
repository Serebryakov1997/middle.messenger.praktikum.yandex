export const chatsTmpl = `
    <form id="{{chatsFormId}}" class="{{styles.chatsFormClass}}">
        <input class="{{styles.chatsSearchBarClass}}" placeholder="{{chatsSearchBar}}">
        <div class="{{styles.chatAreaClass}}">
            {{{chatLabel}}}
            {{{chatInput}}}
            {{{chatButton}}}
        </div>
        <a id="{{selectChatLegendId}}" class="{{styles.selectChatLegendClass}}">{{selectChatLegend}}</a>
        {{{chatsList}}}
    </form>
`;
