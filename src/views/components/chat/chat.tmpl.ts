export const chatTmpl = `
<form class="chat-list-class">
    {{#each chatProps}}
        <div class={{this.styles.chatClass}}>
            <div class={{this.styles.mockImgClass}}></div>
            <a class={{this.styles.chatNameClass}}>{{this.title}}</a>

            {{#if this.last_message}}
                <a class="{{styles.lastPartMsgClass}}">{{this.last_message.content}}</a>
            {{/if}}

            {{#if this.unread_count}}
                <a class={{this.styles.numberOfUnreadMsgsClass}}>{{this.unread_count}}</a>
            {{/if}}

            {{#if this.last_message}}
                <a class="{{styles.timeOfLastMsgClass}}">{{this.last_message.time}}</a>
            {{/if}}
        </div>
    {{/each}}
</form>
`;

/*
<form>
{{#each chats}}
    <div class="{{styles.chatClass}}">
        <div class="{{styles.mockImgClass}}"></div>
        <a class="{{styles.chatNameClass}}">{{this.title}}</a>
    </div>
{{/each}}
</form>
*/

/*
{{#each chats}}
        <div class="{{styles.chatClass}}">
            <div class="{{styles.mockImgClass}}"></div>
            <a class="{{styles.chatNameClass}}">{{this.title}}</a>

            {{#if this.last_message}}
            <a class="{{styles.lastPartMsgClass}}">{{this.last_message.content}}</a>
            {{/if}}

            {{#if this.unread_count}}
            <a class="{{styles.numberOfUnreadMsgsClass}}">{{this.unread_count}}</a>
            {{/if}}

            <a class="{{styles.timeOfLastMsgClass}}">{{this.last_message.content}}</a>
        </div>
    {{/each}}
*/



//         <div id="{{numericChat}}" class="{{styles.chatClass}}">
//             <div class="{{styles.mockImgClass}}"></div>
//             <a class="{{styles.chatNameClass}}">{{chatName}}</a>
//             <a class="{{styles.lastPartMsgClass}}">{{lastPartMsg}}</a>
//             <a class="{{styles.numberOfUnreadMsgsClass}}">{{numberOfUnreadMsgs}}</a>
//             <a class="{{styles.timeOfLastMsgClass}}">{{timeOfLastMsg}}</a>
//         </div>
