export const chatTmpl = `
    <div class="{{styles.chatClass}}">
        <div class="{{styles.mockImgClass}}"></div>
        <a class="{{styles.chatNameClass}}">{{chatName}}</a>
        <a class="{{styles.lastPartMsgClass}}">{{lastPartMsg}}</a>
        <a class="{{styles.numberOfUnreadMsgsClass}}">{{numberOfUnreadMsgs}}</a>
        <a class="{{styles.timeOfLastMsg}}">{{timeOfLast}}</a>
    </div>
`;
