export const chatsTmpl = `
    <form id="{{chatsFormId}}" class="{{styles.chatsFormClass}}">
        {{{linkToProfile}}}
        
        <input class="{{styles.chatsSearchBarClass}}" placeholder="{{chatsSearchBar}}">
        
        {{{selectChatLegendText}}}

        <div class="{{styles.chatsListClass}}">
            {{{chatsList}}}
        </div>
 
        {{{createChatText}}}

        <div class="{{styles.actionWindowClass}}">
            {{{chatCreationWindow}}}
        </div>

        <div class="{{styles.addUserChatWindowClass}}">
            {{{addUserToChatWindow}}}
        </div>

        {{{selectedChatArea}}}
    </form>
`;


// <div class="{{styles.chatDeleteWindowClass}}">
// {{{chatDeleteWindow}}}
// </div>
