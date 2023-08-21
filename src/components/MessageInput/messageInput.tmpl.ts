export const messageInputTmpl = `
    <input id="{{inputChatMsgId}}" class="{{styles.msgInputClass}}" type="text" placeholder="{{msgInputPlaceholder}}">
        <img id="{{inputChatImgId}}" class="{{styles.imgClipClass}}" src="/src/components/MessageInput/imgs/clip.png">
        {{message}}
        <button id="{{msgSendButtonId}}" class="{{styles.msgSendButtonClass}}"></button>
    </input>
`;
