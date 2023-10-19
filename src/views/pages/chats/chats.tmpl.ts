export const chatsTmpl = `
    <form id="{{chatsFormId}}" class="{{styles.chatsFormClass}}">
        <input class="{{styles.chatsSearchBarClass}}" placeholder="{{chatsSearchBar}}">
        <a id="{{selectChatLegendId}}" class="{{styles.selectChatLegendClass}}">{{selectChatLegend}}</a>
        {{{selectedChatArea}}}
        {{{chatsList}}}
        <div class="{{styles.messageClass}}">{{{msgsList}}}</div>
    </form>
`;
