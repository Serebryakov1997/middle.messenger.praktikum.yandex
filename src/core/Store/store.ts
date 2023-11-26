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

export const withStore = (tagName: string, mapStateToProps: (data: IState) => any) => {
    return (Component: typeof Block) => {
        return class extends Component {
            constructor(props: any) {
                super(tagName, { ...props, ...mapStateToProps(store.getState()) });

                store.on(StoreEvents.Update, () => {
                    const newProps = mapStateToProps(store.getState());
                    console.log('newProps: ', newProps);

                    this.setProps({ ...newProps });
                })
            }
        }
    }
}

// export const withStore = (
//     Component: Block): Block => {

//     let componentChildrenDeepCopy = cloneDeep(Component.children);

//     store.on(StoreEvents.Update, () => {
//         let state = store.getState();
//         if (state) {
//             let stateUser = state.user ? JSON.parse(String(state.user)) : {};
//             Object.keys(componentChildrenDeepCopy).forEach(key => {
//                 if (key.includes('input')) {
//                     const { name } = componentChildrenDeepCopy[key].props;
//                     if (stateUser)
//                         (<Block>componentChildrenDeepCopy[key]).props.inputValue = stateUser[name];
//                 }
//             });
//             Component.setProps({ ...state });
//         }
//     })

//     return Component;
// };

export { store };
