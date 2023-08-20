export const chatButtonTmpl = `
    <button class="{{styles.chatClass}}" onclick="{{displayBlock}} {{hideText}}" type="button">
        <img class="{{styles.chatImgClass}}">
        <p class="{{styles.chatNameClass}}">{{chatName}}</p>
        <p class="{{styles.chatLastContentClass}}">{{chatLastContent}}</p>
        <p class="{{styles.timeClass}}">{{time}}</p>
    </button>
`;
