export const selectionChatTmpl = `
    <div id="{{selectionChatId}}" class="{{styles.selectionChatClass}}">
        <p class="{{styles.selectionChatNameClass}}">{{selectionChatName}}</p>
        <p class="{{styles.selectionChatTimeClass}}">{{selectionChatTime}}</p>
        <button class="{{styles.dotOptionsButtonClass}}">
            <div class="{{styles.dotOptionsClass}}"></div>
            <div class="{{styles.dotOptionsClass}} {{styles.dotOptionsHeightClass}}"></div>
            <div class="{{styles.dotOptionsClass}} {{styles.dotOptionsHeightClass}}"></div>
        </button>
        <img class="{{styles.imgSearchClass}}" src="/src/components/SelectionChat/imgs/search.png"></img>
    </div>
`;
