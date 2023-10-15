export const inputTmpl = `
<input class="{{styles.inputClass}}" id="{{name}}" type="text" name="{{name}}" placeholder="{{placeholder}}">
<div id="{{validErrorId}}"></div>
`;

// label вынести в отдельный компонент
// ошибку при валидации вынести в отдельный компонент

// export const inputTmpl = `
// <label for="{{name}}">{{labelName}}</label>
// <input class="{{styles.inputClass}}" id="{{name}}" type="text" name="{{name}}" placeholder="{{placeholder}}">
// <div id="{{styles.validErrClass}}"></div>
// `;
