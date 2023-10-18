import { Block } from './block';

export function backUpForValid(children: {[key: string]: Block}) {
    children.validError!.getContent().style.display = 'none';
    children.input.getContent().style.borderBlockColor = 'black';
    children.loginButton.getContent().style.pointerEvents = '';
    children.underButtonLink.getContent().style.pointerEvents = '';
}
