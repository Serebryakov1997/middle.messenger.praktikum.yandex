import { IState } from '../../models/interfaces/auth';
import { cloneDeep, isEqual } from '../../utils';
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

    let componentChildrenDeepCopy = cloneDeep(Component.children);

    store.on(StoreEvents.Update, () => {
        let state = store.getState();
        if (state) {
            let stateUser = JSON.parse(String(state.user));
            Object.keys(componentChildrenDeepCopy).forEach(key => {
                if (key.includes('input')) {
                    const { name } = componentChildrenDeepCopy[key].props;
                    (<Block>componentChildrenDeepCopy[key]).props.inputValue = stateUser[name];
                }
            });
            Component.setProps({ ...state });
        }
    })

    return Component;
};

export { store };
