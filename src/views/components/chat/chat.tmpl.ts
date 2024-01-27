export const chatTmpl = `
<div id="{{chatId}}" name="{{title}}" class="{{styles.chatClass}}">
    <div class="{{styles.mockImgClass}}"></div>
    <a class="{{styles.chatNameClass}}">{{title}}</a>
    <a class="{{styles.lastPartMsgClass}}">{{content}}</a>
    <a class="{{styles.numberOfUnreadMsgsClass}}">{{unread_count}}</a>
    <a class="{{styles.timeOfLastMsgClass}}">{{time}}</a>
</div>
`;
