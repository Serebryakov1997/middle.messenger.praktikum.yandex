export const profileFieldTmpl = `
    <form class="{{profileFieldClass}}" name="{{profileFieldName}}">
        {{fieldName}}
        <input type="{{inputType}}">{{value}}</input>
    </form>
`;

//backup
// export const profileFieldTmpl = `
//     <div class="{{profileFieldClass}}" name="{{profileFieldName}}">
//         {{fieldName}}
//         <div class="{{profileValueClass}}">{{value}}</div>
//     </div>
// `;