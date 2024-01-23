import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import { EventBus } from '../EventBus/event-bus';
import { isArray } from '../../utils';

export class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element: HTMLElement;

  props: Record<string, unknown>;

  eventBus: (() => EventBus);

  /* eslint no-use-before-define: "off" */
  children: Record<string, Block | Block[] | typeof Block>;

  id: string;

  /** JSDoc
       * @param {string} tagName
       * @param {Object} props
       *
       * @returns {void}
       */
  constructor(propsAndChildren: Record<string, unknown>) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildren(propsAndChildren);
    this.children = children;

    this.id = makeUUID();
    this.props = this._makePropsProxy({ ...props, id: this.id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    this._element = this._createDocumentElement();
  }

  _createDocumentElement() {
    return document.createElement('div');
  }

  _init() {
    this._createResources();
    this.init();
    this.initAsync();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  /* eslint class-methods-use-this: "off" */
  protected init() { }


  protected async initAsync() { }

  _componentDidMount() {
    this.componentDidMount(this.props);
  }

  protected componentDidMount(oldProps: Record<string, unknown>) {

  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(args: unknown) {
    const response = this.componentDidUpdate(this.props, <Record<string, unknown>>args);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(
    oldProps: Record<string, unknown>,
    newProps: Record<string, unknown>,
  ) {
    return true;
  }

  setProps = (nextProps: {}) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };


  _getChildren(propsAndChildren: Record<string, unknown>) {
    const children: Record<string, Block | Block[]> = {};
    const props: Record<string, unknown> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      console.log('propsAndChildren key: ', key, ' value: ', value);
      if (value instanceof Block) {
        console.log('value instanceof Block: ', value);
        children[key] = value;
      } else if (Array.isArray(value) && value.every(v => v instanceof Block)) {
        console.log('Array.isArray(value) value: ', value);
        children[key] = value;
      } else {
        console.log('props key: ', key, ' value: ', value);
        props[key] = value;
        console.log('props[key] after set value: ', props[key]);
      }
    });

    return { children, props };
  }


  compile(template: string, props: Record<string, unknown>) {
    const propsAndStubs = { ...props };

    // console.log('propsAndStubs before заглушки: ', propsAndStubs)
    console.log('this.chidlren before заглушки: ', this.children);

    Object.entries(this.children).forEach(([name, child]) => {
      if (Array.isArray(child)) {
        console.log('child is array: ', child);
        propsAndStubs[name] = child.map(ch =>
          Array.isArray(ch)
            ? ch.map(ch2 => `<div data-id="${(ch2).id}"></div>`)
            : `<div data-id="${(<Block>ch).id}"></div>`
        );
      } else {
        // console.log('child not Array: ', child);
        propsAndStubs[name] = `<div data-id="${(<Block>child).id}"></div>`;
      }
    });

    // console.log('propsAndStubs: ', propsAndStubs);

    const compiledHtml = Handlebars.compile(template)(propsAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = compiledHtml;

    const replaceStub = (component: Block) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
      stub?.replaceWith(component.getContent());
    };

    /* eslint no-unused-vars: "off" */
    /* eslint @typescript-eslint/no-unused-vars: "off" */
    Object.entries(this.children).forEach(([_, child]) => {
      if (Array.isArray(child)) {
        child.forEach(replaceStub);
      } else {
        replaceStub(<Block>child);
      }
    });

    return temp.content;
  }

  _addEvents() {
    if (this.props.events) {
      const events = <Record<string, (e: Event) => void>>this.props.events;

      Object.keys(events).forEach((eventName) => {
        if (this._element) {
          this._element.addEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  _removeEvents() {
    if (this.props.events) {
      const events = <Record<string, (e: Event) => void>>this.props.events;

      Object.keys(events).forEach((eventName) => {
        if (this._element) {
          this._element.removeEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  get element() {
    return this._element!;
  }

  _render() {
    const fragment = this.render();

    const newEl = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element?.replaceWith(newEl);
    }
    this._element = newEl;

    this._addEvents();
  }

  render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent(): HTMLElement {
    return this.element;
  }

  _makePropsProxy(props: Record<string, unknown>) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        if (target[prop] !== value || typeof value === 'object') {
          /* eslint no-param-reassign: "off" */
          target[prop] = value;
          self.eventBus().emit(Block.EVENTS.FLOW_CDU);
        }
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  static _createDocumentElement(tagName: string) {
    return document.createElement(tagName as string);
  }

  static createDocumentFragment() {
    const fragment = document.createDocumentFragment();
    return fragment;
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  changeStyles(styles: { [key: string]: string }) {
    Object.entries(styles).forEach(([key, value]) => {
      this.getContent().style.setProperty(key, value);
    });
    return this;
  }

  changeAttributes(attrs: { [key: string]: string }) {
    Object.entries(attrs).forEach(([key, value]) => {
      this.getContent().setAttribute(key, value);
    });
    return this;
  }
}
