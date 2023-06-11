export const loginTmpl = `
    <form class={{formName}}>
        <div class={{textFormName}}>{{blockName}}</div>
        <div class={{textLoginName}}>
            {{loginName}}
        </div>
        {{{inputLoginComponent}}}
        <div class="{{textPasswordName}} {{position}}">
            {{passwordName}}
        </div>
    </form>
`;