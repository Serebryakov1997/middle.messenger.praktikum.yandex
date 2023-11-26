import { Block } from '../core/Block/block';

export function renderDOM(query: string, block: Block) {
  const root = document.querySelector(query);
  root!.innerHTML = "";
  root?.append(block.element!);
  block.dispatchComponentDidMount();
}
