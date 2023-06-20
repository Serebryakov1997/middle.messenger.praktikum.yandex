export const profileChangePasswdFieldTmpl = `
    <form class="{{styles.changeDataFieldClass}}">
        <label for="{{changeDataInputId}}">{{labelNameInput}}</label>
        <input id="{{changeDataInputId}}" placeholder="{{changeDataInputPlaceholder}}" name="{{changeDataFieldName}}">
        <a href="#" class="{{changeDataInputControl}}"></a>
    </form>
`;