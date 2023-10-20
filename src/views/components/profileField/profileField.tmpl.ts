export const profileFieldTmpl = `
    <div class="{{styles.profileFieldClass}}">
        <label class="{{styles.labelClass}}" for="{{changeDataInputId}}">{{labelNameInput}}</label>
    </div>
    <div class="{{styles.validErrProfileClass}}" id="{{validErrorId}}"></div>
`;


// export const profileFieldTmpl = `
//     <div class="{{styles.profileFieldClass}}">
//         <label class="{{styles.labelClass}}" for="{{changeDataInputId}}">{{labelNameInput}}</label>
//         <input class="{{styles.inputClass}}" id="{{changeDataInputId}}" type="{{styles.profileFieldType}}" value="{{profileFieldValue}}" placeholder="{{changeDataInputPlaceholder}}" name="{{changeDataFieldName}}" {{readOnly}}>
//         <a href="#" class="{{styles.changeDataInputControl}}"></a>
//     </div>
// `;

