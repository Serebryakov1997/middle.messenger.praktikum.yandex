export const chatListTmpl = `
{{#each chats}} 
    {{{this}}}
{{/each}}
`;

// {{#each chats}} 
//         {{this}}     
//     {{/each}}

// {{#each chats}}
//         <div class="{{styles.chatClass}}">
//             <div class="{{styles.mockImgClass}}"></div>
//             <a class="{{styles.chatNameClass}}">{{this.title}}</a>
//             <a class="{{styles.lastPartMsgClass}}">{{lastPartMsg}}</a>
//             <a class="{{styles.numberOfUnreadMsgsClass}}">{{numberOfUnreadMsgs}}</a>
//             <a class="{{styles.timeOfLastMsgClass}}">{{timeOfLastMsg}}</a>
//         </div>
//     {{/each}}
