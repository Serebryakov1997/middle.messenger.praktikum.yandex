import { IState } from '../../models/interfaces/auth';
import { isEqual } from '../../utils';
import { set } from '../../utils/set';
import { Block } from '../Block';
import { EventBus } from '../EventBus/event-bus';

export enum StoreEvents {
    Update = 'Update',
}

class Store extends EventBus {
    state: IState = {};

    constructor() {
        super();
    }

    getState(): IState {
        return this.state;
    }

    set(path: string, value: unknown) {
        set(this.state, path, value);
        this.emit(StoreEvents.Update, this.getState());
    }
}

const store = new Store();

export const withStore = (
    Component: Block): Block => {

    const beforeProps = Component.props;

    store.on(StoreEvents.Update, () => {
        const { children } = Component;

        if (children) {
            const fromState = JSON.parse(String(store.getState().user));

            Object.keys(children).forEach(key => {
                if (key.includes('input')) {

                    const { name } = (<Block>children[key]).props;
                    if (<string>name in fromState) {
                        (<Block>Component.children[key]).props.inputValue = fromState[name as string];
                    }
                }
            });

            if (!isEqual(beforeProps, Component.props)) {
                Component.setProps(Component.props)

            }
        }
    });

    return Component;
};

export { store };
