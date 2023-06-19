// export const buttonTmpl = `
//     <button class="{{buttonClass}}" onclick={{buttonLink}}>{{buttonName}}</button>
// `;
export const buttonTmpl = `
    <form class={{buttonClass}} action={{buttonLink}}>
        <button type="submit">{{buttonName}}</button>
    </form>
`;