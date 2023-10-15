import { Block } from './block';

export function validationError(targetChildrens: { [key: string]: Block }, msg: string) {

  const valErrorLoginBlock = targetChildrens['validErrorLogin'];
  const valErrElem = valErrorLoginBlock.getContent();

  valErrElem.textContent = msg;
  valErrElem.style.fontSize = '10px';
  valErrElem.style.marginTop = '40px';
  valErrElem.style.marginLeft = '60px';
  valErrElem.style.marginRight = '40px';
  valErrElem.style.color = 'red';
  valErrorLoginBlock.show();

  const inputLoginEl = targetChildrens['inputLogin'].getContent();
  inputLoginEl.style.borderBlockColor = 'red';

  const loginButtonEl = targetChildrens['loginButton'].getContent();
  loginButtonEl.style.pointerEvents = 'none';
}
