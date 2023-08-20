export const chatsTmpl = `
    <form class="{{styles.formChatsClass}}">
        {{{searchComponent}}}
        <div id="{{selectDefaultMsgId}}" class="{{styles.selectDefaultMsgClass}}">{{selectDefaultMsg}}</div>
        <ul class="{{styles.chatClass}}">
            {{{chatButton1}}}
            {{{chatButton2}}}
            {{{chatButton3}}}
            {{{chatButton4}}}
            {{{chatButton5}}}
            {{{chatButton6}}}
            {{{chatButton7}}}
            {{{chatButton8}}}
            {{{chatButton9}}}
        </ul>
        {{{selectionChat4}}}
        {{{message}}}
    </form>
`;
