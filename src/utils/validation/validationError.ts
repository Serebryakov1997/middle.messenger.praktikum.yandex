import { Block } from '../../core/Block/block';

export function validationError(targetChildrens: { [key: string]: Block }, msg: string) {
  const valErrorBlock = targetChildrens.validError;
  const valErrElem = valErrorBlock.getContent();

  valErrElem.style.position = 'relative';
  valErrElem.textContent = msg;
  valErrElem.style.fontSize = '12px';
  valErrElem.style.marginTop = '30px';
  valErrElem.style.marginLeft = '60px';
  valErrElem.style.marginRight = '40px';
  valErrElem.style.color = 'red';
  valErrorBlock.show();

  const inputEl = targetChildrens.input.getContent();
  inputEl.style.borderBlockColor = 'red';

  const buttonEl = targetChildrens.button.getContent();
  buttonEl.style.pointerEvents = 'none';
}
