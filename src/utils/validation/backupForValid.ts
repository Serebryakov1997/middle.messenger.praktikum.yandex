import { Block } from '../../core/Block/block';

export function backUpForValid(children: { [key: string]: Block }) {
    /* eslint no-param-reassign: "off" */
    children.validError!.getContent().style.display = 'none';
    children.input.getContent().style.borderBlockColor = 'black';
    children.button.getContent().style.pointerEvents = '';
}
