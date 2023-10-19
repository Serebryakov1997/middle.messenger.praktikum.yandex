import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import { EventBus } from './event-bus';

export class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element: HTMLElement | null = null;

  props: Record<string, unknown>;

  eventBus: (() => EventBus);

  tagName: string;

  /* eslint no-use-before-define: "off" */
  children: Record<string, Block | Block[]>;

  id: string;

  /** JSDoc
       * @param {string} tagName
       * @param {Object} props
       *
       * @returns {void}
       */
  constructor(tagName: string, propsAndChildren: Record<string, unknown>) {
    this.tagName = tagName;
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
    this._element = Block._createDocumentElement(this.tagName);
  }

  _init() {
    this._createResources();

    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  /* eslint class-methods-use-this: "off" */
  protected init() { }

  _componentDidMount() {
    this.componentDidMount(this.props);
    // this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
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
      if (value instanceof Block) {
        children[key] = value;
      } else if (value instanceof Array) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  compile(template: string, props: Record<string, unknown>) {
    const propsAndStubs = { ...props };

    let fragmentsArr: string = '';
    Object.entries(this.children).forEach(([name, component]) => {
      if (component instanceof Block) {
        propsAndStubs[name] = `<div data-id="${component.id}"></div>`;
      } else {
        Object.values(component).forEach((value) => {
          fragmentsArr += `<div data-id="${value.id}"></div>`;
        });
        propsAndStubs[name] = fragmentsArr;
      }
    });

    const compiledHtml = Handlebars.compile(template)(propsAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = compiledHtml;

    /* eslint no-unused-vars: "off" */
    /* eslint @typescript-eslint/no-unused-vars: "off" */
    Object.entries(this.children).forEach(([_, component]) => {
      if (component instanceof Block) {
        const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
        if (!stub) {
          return;
        }
        component.getContent().append(...Array.from(stub.childNodes));
        stub.replaceWith(component.getContent());
      } else {
        Object.values(component).forEach((value) => {
          const stub = temp.content.querySelector(`[data-id="${value.id}"]`);
          if (!stub) {
            return;
          }
          value.getContent().append(...Array.from(stub.childNodes));
          stub.replaceWith(value.getContent());
        });
      }
    });

    return temp.content;
  }

  _addEvents() {
    if (this.props.events) {
      const events = <Record<string, (e: Event) => void>> this.props.events;

      Object.keys(events).forEach((eventName) => {
        if (this._element) {
          this._element.addEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  _removeEvents() {
    if (this.props.events) {
      const events = <Record<string, (e: Event) => void>> this.props.events;

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

    this._element!.innerHTML = '';

    // this._removeEvents();

    this._element!.append(fragment);

    this._addEvents();
  }

  // Может переопределять пользователь, необязательно трогать
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
}
