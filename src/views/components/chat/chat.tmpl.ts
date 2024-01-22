export const chatTmpl = `
<div class="{{styles.chatClass}}">
    <div class="{{styles.mockImgClass}}"></div>
    <a class="{{styles.chatNameClass}}">{{title}}</a>
    <a class="{{styles.lastPartMsgClass}}">{{content}}</a>
    <a class="{{styles.numberOfUnreadMsgsClass}}">{{unread_count}}</a>
    <a class="{{styles.timeOfLastMsgClass}}">{{time}}</a>
</div>
`;

// <form class="chat-list-class">
//     {{#each chatProps}}
//         <div class={{this.styles.chatClass}}>
//             <div class={{this.styles.mockImgClass}}></div>
//             <a class={{this.styles.chatNameClass}}>{{this.title}}</a>

//             {{#if this.last_message}}
//                 <a class="{{styles.lastPartMsgClass}}">{{this.last_message.content}}</a>
//             {{/if}}

//             {{#if this.unread_count}}
//                 <a class={{this.styles.numberOfUnreadMsgsClass}}>{{this.unread_count}}</a>
//             {{/if}}

//             {{#if this.last_message}}
//                 <a class="{{styles.timeOfLastMsgClass}}">{{this.last_message.time}}</a>
//             {{/if}}
//         </div>
//     {{/each}}
// </form>

//         <div id="{{numericChat}}" class="{{styles.chatClass}}">
//             <div class="{{styles.mockImgClass}}"></div>
//             <a class="{{styles.chatNameClass}}">{{chatName}}</a>
//             <a class="{{styles.lastPartMsgClass}}">{{lastPartMsg}}</a>
//             <a class="{{styles.numberOfUnreadMsgsClass}}">{{numberOfUnreadMsgs}}</a>
//             <a class="{{styles.timeOfLastMsgClass}}">{{timeOfLastMsg}}</a>
//         </div>
