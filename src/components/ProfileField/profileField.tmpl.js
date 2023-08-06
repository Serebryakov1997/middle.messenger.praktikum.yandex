export const profileFieldTmpl = `
    <label for="{{changeDataInputId}}">{{labelNameInput}}</label>
    <input id="{{changeDataInputId}}" type="{{styles.profileFieldType}}" value="{{profileFieldValue}}" placeholder="{{changeDataInputPlaceholder}}" name="{{changeDataFieldName}}" {{readOnly}}>
    <a href="#" class="{{changeDataInputControl}}"></a>
`;
