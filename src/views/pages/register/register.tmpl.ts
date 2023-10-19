export const registerTmpl = `
    <form action="{{buttonLink}}">
        <div class="{{styles.registerContainerClass}}">
            <div class="{{styles.registerHeaderClass}}">{{registerHeaderName}}</div>
            {{{labelEmail}}}
            {{{inputEmail}}}
            {{{validErrorEmail}}}
    
            {{{labelLogin}}}
            {{{inputLogin}}}
            {{{validErrorLogin}}}
    
            {{{labelName}}}
            {{{inputName}}}
            {{{validErrorName}}}
    
            {{{labelSurName}}}
            {{{inputSurName}}}
            {{{validErrorSurName}}}
    
            {{{labelPhone}}}
            {{{inputPhone}}}
            {{{validErrorPhone}}}
    
            {{{labelPasswd}}}
            {{{inputPasswd}}}
            {{{validErrorPasswd}}}
    
            {{{labelRepeatPasswd}}}
            {{{inputRepeatPasswd}}}
            {{{validErrorRepeatPasswd}}}

            {{{registerButton}}}
            {{{underButtonLink}}}
        </div>
    </form>
`;
