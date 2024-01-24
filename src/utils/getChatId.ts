export function getChatId(): number {
    const needChat = document.getElementById('chat-area-name-id');
    const chatName = needChat?.textContent;
    const chatElement = document.getElementsByName(<string>chatName);
    const chatId = chatElement.item(0).getAttribute('id');
    return Number(chatId);
}
