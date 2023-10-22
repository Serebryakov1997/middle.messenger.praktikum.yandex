export const chatsTmpl = `
    <form id="{{chatsFormId}}" class="{{styles.chatsFormClass}}">
        {{{linkToProfile}}}
        
        <input class="{{styles.chatsSearchBarClass}}" placeholder="{{chatsSearchBar}}">
        <a id="{{selectChatLegendId}}" class="{{styles.selectChatLegendClass}}">{{selectChatLegend}}</a>
        {{{chatsList}}}

        <div id="{{chatAreaId}}" class="{{styles.chatAreaClass}}">
            <a id="{{chatAreaNameId}}" class="{{styles.chatAreaNameClass}}"></a>
            <a id="{{chatAreaLastTimeId}}" class="{{styles.chatLastTimeClass}}"></a>
            {{{chatInput}}}
            {{{chatButton}}}
        </div>
    </form>
`;


// export const chatsTmpl = `
//     <form id="{{chatsFormId}}" class="{{styles.chatsFormClass}}">
//         <input class="{{styles.chatsSearchBarClass}}" placeholder="{{chatsSearchBar}}">
//         <div class="{{styles.chatAreaClass}}">
//             {{{chatLabel}}}
//             {{{chatInput}}}
//             {{{chatButton}}}
//         </div>
//         <a id="{{selectChatLegendId}}" class="{{styles.selectChatLegendClass}}">{{selectChatLegend}}</a>
//         {{{chatsList}}}
//     </form>
// `;

