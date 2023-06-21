export const profileChangePasswdFieldTmpl = `
    <form class="{{styles.changeDataFieldClass}}">
        <label for="{{changeDataInputId}}">{{labelNameInput}}</label>
        <input id="{{changeDataInputId}}" type="{{styles.profileFieldType}}" value="{{profileFieldValue}}" placeholder="{{changeDataInputPlaceholder}}" name="{{changeDataFieldName}}" {{readOnly}}>
        <a href="#" class="{{changeDataInputControl}}"></a>
    </form>
`;