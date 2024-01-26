export const chatsTmpl = `
    <form id="{{chatsFormId}}" class="{{styles.chatsFormClass}}">
        {{{linkToProfile}}}
        
        <input class="{{styles.chatsSearchBarClass}}" placeholder="{{chatsSearchBar}}">
        
        {{{selectChatLegendText}}}
        {{{createChatText}}}
        {{{chatCreationWindow}}}

        <div class="{{styles.chatsListClass}}">
            {{{chatsList}}}
        </div>

        <div class="{{styles.addUserChatWindowClass}}">
            {{{addUserToChatWindow}}}
        </div>

        {{{selectedChatArea}}}
    </form>
`;
