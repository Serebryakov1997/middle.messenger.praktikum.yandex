export const profileFieldTmpl = `
    <label class="{{styles.labelClass}}" for="{{changeDataInputId}}">{{labelNameInput}}</label>
    <input class="{{styles.inputClass}}" id="{{changeDataInputId}}" type="{{styles.profileFieldType}}" value="{{profileFieldValue}}" placeholder="{{changeDataInputPlaceholder}}" name="{{changeDataFieldName}}" {{readOnly}}>
    <a href="#" class="{{changeDataInputControl}}"></a>
`;
